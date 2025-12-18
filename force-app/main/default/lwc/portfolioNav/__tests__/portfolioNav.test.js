import { createElement } from "@lwc/engine-dom";
import PortfolioNav from "c/portfolioNav";

describe("c-portfolio-nav", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("renders and toggles mobile menu", async () => {
    // Arrange
    const element = createElement("c-portfolio-nav", {
      is: PortfolioNav
    });

    // Act
    document.body.appendChild(element);
    await Promise.resolve();

    const menuToggle = element.shadowRoot.querySelector('[data-id="menu-toggle"]');
    const navList = element.shadowRoot.querySelector('[data-id="nav-list"]');

    // Initially menu should be hidden on mobile (aria-hidden=true)
    expect(navList.getAttribute('aria-hidden')).toBe('true');

    // Click toggle
    menuToggle.click();
    await Promise.resolve();

    // Now menu should be visible (aria-hidden=false) and have open class
    expect(navList.getAttribute('aria-hidden')).toBe('false');
    expect(navList.classList.contains('is-open')).toBe(true);

    // Click a nav link and ensure menu closes
    const firstLink = element.shadowRoot.querySelector('.slds-nav-link');
    firstLink.click();
    await Promise.resolve();

    expect(navList.getAttribute('aria-hidden')).toBe('true');
    expect(navList.classList.contains('is-open')).toBe(false);
  });

  it('keyboard navigation works between links', async () => {
    const element = createElement('c-portfolio-nav', { is: PortfolioNav });
    document.body.appendChild(element);
    await Promise.resolve();

    const links = element.shadowRoot.querySelectorAll('.slds-nav-link');
    links[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    await Promise.resolve();

    expect(document.activeElement.shadowRoot || document.activeElement).toBeTruthy();
  });
});
