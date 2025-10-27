class AppLogo extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode:'open'})

        shadow.innerHTML=`
            <style>
                @import url('https://fonts.googleapis.com/css2?family=BBH+Sans+Hegarty&display=swap');
                
                h1 {
                    font-family: "BBH Sans Hegarty", sans-serif;
                    text-align:center;
                    color:#836FFF;
                    letter-spacing:.2em;
                }

            </style>
            <h1 style="font-size:${this.getAttribute("size")};">KAIRO</h1>
        `
    }
}

customElements.define('app-logo', AppLogo);