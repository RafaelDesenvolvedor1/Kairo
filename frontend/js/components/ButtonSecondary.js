class AppButtonSecondary extends HTMLElement{
    constructor(){
        super();

        this.innerHTML =`
            <button class="p-2 fs-6" type="${this.getAttribute("type") || 'button'}" title="${this.getAttribute("title") || ''}">
                ${this.getAttribute("text") || 
                `<i class="${this.getAttribute("icon")}"></i>`}
            </button>
        `
    }
}

customElements.define("app-button-secondary", AppButtonSecondary)