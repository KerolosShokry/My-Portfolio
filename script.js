const fileMeta = {
  home: { title: 'home.tsx - Kerolos Shokry - Portfolio', lang: 'TypeScript React' },
  about: { title: 'about.html - Kerolos Shokry - Portfolio', lang: 'HTML' },
  skills: { title: 'skills.ts - Kerolos Shokry - Portfolio', lang: 'TypeScript' },
  projects: { title: 'projects.json - Kerolos Shokry - Portfolio', lang: 'JSON' },
  contact: { title: 'contact.css - Kerolos Shokry - Portfolio', lang: 'CSS' }
};

function switchTab(fileName) {
  // Update Tab active state
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-file') === fileName);
  });

  // Update Explorer active file
  document.querySelectorAll('.explorer-file').forEach(file => {
    file.classList.toggle('active', file.getAttribute('data-file') === fileName);
  });

  // Switch Active Pane
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.remove('active');
  });
  
  const targetPane = document.getElementById(`pane-${fileName}`);
  if (targetPane) {
    targetPane.classList.add('active');
  }

  // Update window title and statusbar language
  if (fileMeta[fileName]) {
    const titleEl = document.getElementById('window-title');
    const langEl = document.getElementById('file-language');
    if (titleEl) titleEl.textContent = fileMeta[fileName].title;
    if (langEl) langEl.textContent = fileMeta[fileName].lang;
  }

  // Auto-close explorer drawer on mobile after selection
  if (window.innerWidth <= 768) {
    toggleExplorer(false);
  }
}

function toggleExplorer(forceState) {
  const explorer = document.getElementById('explorer-panel');
  const overlay = document.getElementById('explorer-overlay');
  const toggleBtn = document.getElementById('explorer-toggle-btn');
  
  if (!explorer) return;

  const isOpen = explorer.classList.contains('open');
  const shouldOpen = typeof forceState === 'boolean' ? forceState : !isOpen;

  if (shouldOpen) {
    explorer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    if (toggleBtn) toggleBtn.classList.add('active');
  } else {
    explorer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    if (toggleBtn) toggleBtn.classList.remove('active');
  }
}
