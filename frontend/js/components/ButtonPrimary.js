class AppButtonPrimary extends HTMLElement {
  constructor() {
    super();
    // const shadow = this.attachShadow({mode: 'open'});

    this.innerHTML = `
            <button type="${
              this.getAttribute("type") || "button"
            }" class="btn btn-lg rounded-pill p-3" style="background:var(${this.getAttribute(
      "cor"
    )}); box-shadow:4px 5px 5px -1px rgba(0,0,0,0.38); min-width:100%; letter-spacing:.1em;">
                ${this.getAttribute("text") || ""}
            </button>
        `;
  }
}

customElements.define("app-button-primary", AppButtonPrimary);
