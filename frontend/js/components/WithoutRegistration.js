class AppWithoutRegistration extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
            <style>
                .container i{font-size:1.8em;}
            </style>
            <div class="container d-flex align-items-center flex-column gap-4 mt-5">
                <p>${this.getAttribute("btnTitle") || ''}</p>
                <i class="fa-solid fa-plus"></i>
                <app-button-primary  text="${this.getAttribute("btnText")}" icon="${this.getAttribute("btnIcon")}" cor="--background-primary"></app-button-primary>
            </div>
        `;
    }
}

customElements.define("app-whithout-registration", AppWithoutRegistration)