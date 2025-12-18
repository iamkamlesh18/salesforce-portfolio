(function(){
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('primary-navigation');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    nav.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Simple active-link handling
  nav.addEventListener('click', (e) => {
    if (e.target.matches('.slds-nav-link')){
      nav.querySelectorAll('.slds-nav-link').forEach(l=>l.classList.remove('is-active'));
      e.target.classList.add('is-active');
      // close on mobile
      nav.classList.remove('is-open');
      nav.setAttribute('aria-hidden','true');
      toggle.setAttribute('aria-expanded','false');
    }
  });
})();