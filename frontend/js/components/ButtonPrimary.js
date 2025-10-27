class AppButtonPrimary extends HTMLElement {
  constructor() {
    super();
    // const shadow = this.attachShadow({mode: 'open'});

    this.innerHTML = `
          <button 
            data-bs-toggle="${this.getAttribute("data-bs-toggle") || ""}"
            data-bs-target="${this.getAttribute("data-bs-target") || ""}" aria-controls="${this.getAttribute("aria-controls") || ""}"
            type="${this.getAttribute("type") || "button"}"
            class="btn btn-lg rounded-pill p-3 d-flex justify-content-center align-items-center gap-2" style="background:var(${this.getAttribute(
      "cor"
    )}); box-shadow:4px 5px 5px -1px rgba(0,0,0,0.38); min-width:100%; letter-spacing:.1em;">
              <i class="${this.getAttribute("icon") || ""}"></i>
                ${this.getAttribute("text") || ""}
          </button>
        `;
  }
}

customElements.define("app-button-primary", AppButtonPrimary);
