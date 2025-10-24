class AppMyInput extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
          <div class="form-floating">
            <input
              type="${this.getAttribute("type") || 'text'}"
              class="form-control"
              id="floatingInput"
              placeholder="${this.getAttribute("placeholder") || ''}"
              required
            />
            <label for="floatingInput">${this.getAttribute("label") || ''}</label>
          </div>

        `
    }
}

customElements.define("app-myinput", AppMyInput);