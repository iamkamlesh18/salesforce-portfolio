import { LightningElement } from "lwc";

export default class PortfolioNav extends LightningElement {
  isMenuOpen = false;

  get isMenuHidden() {
    // aria-hidden expects string 'true'/'false'; returning a boolean is fine for LWC binding
    return !this.isMenuOpen;
  }

  get menuClass() {
    // Keep base classes and add an 'is-open' modifier for animation on small screens
    return `slds-navbar__nav slds-grid nav-list${this.isMenuOpen ? ' is-open' : ''}`;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onLinkClick(event) {
    this.setActive(event.currentTarget);
    // close menu on mobile after click
    this.isMenuOpen = false;
  }

  onLinkKeydown(event) {
    const key = event.key;
    const current = Number(event.currentTarget.dataset.index);
    const max = this.template.querySelectorAll('.slds-nav-link').length - 1;

    if (key === 'ArrowRight') {
      event.preventDefault();
      const next = current === max ? 0 : current + 1;
      this.focusLink(next);
    } else if (key === 'ArrowLeft') {
      event.preventDefault();
      const prev = current === 0 ? max : current - 1;
      this.focusLink(prev);
    } else if (key === 'Enter' || key === ' ') {
      // Activate link
      event.preventDefault();
      event.currentTarget.click();
    }
  }

  focusLink(index) {
    const links = Array.from(this.template.querySelectorAll('.slds-nav-link'));
    if (links[index]) {
      links[index].focus();
      this.setActive(links[index]);
    }
  }

  setActive(el) {
    this.template.querySelectorAll('.slds-nav-link').forEach((link) => {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    });

    el.classList.add('is-active');
    el.setAttribute('aria-current', 'page');
  }
}
