class AppMyLink extends HTMLElement {
  constructor() {
    super();


    this.innerHTML = `
            <style>
                a{
                    display: inline-block;
                    padding: 1em;
                    width:100%;
                    color: #1c1c1c;
                    text-decoration:none;
                    cursor: pointer;
                }
                
                a i{
                    font-size: 1.8em;
                }
            </style>

            <a class="" href="${this.getAttribute("href")}" target="conteudo">
            <i class="${this.getAttribute("icon")}"></i>
            ${this.getAttribute("title")}
            </a>
        
        `;
  }
}


customElements.define("app-mylink", AppMyLink);