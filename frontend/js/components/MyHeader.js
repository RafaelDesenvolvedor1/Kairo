class AppMyHeader extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `

    <header class="navbar navbar-light p-4" style="background-color:var(${this.getAttribute(
      "bgColor"
    )}); position:relative"}>
        <div class="container-fluid ">
          <form class="d-flex bg-light">
            <input
              class="form-control me-2 bg-light border-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn  type="submit">
              <img width=30px; src="../../assets/icons/search.svg" alt='icone de procura'/>
            </button>
          </form>
          <div style="width:70px;">
                 <span id="clock" class="fw-bold"></span>
          </div>
   
          <app-user></app-user>
        </div>
    </header>
        `;
  }

  connectedCallback() {
    this.iniciarRelogio();
  }

  iniciarRelogio() {
    const clockElement = this.querySelector("#clock");

    const atualizarRelogio = () => {
      const agora = new Date();
      const hora = agora.getHours().toString().padStart(2, "0");
      const minuto = agora.getMinutes().toString().padStart(2, "0");
      const segundo = agora.getSeconds().toString().padStart(2, "0");

      clockElement.textContent = `${hora}:${minuto}:${segundo}`;
    };

    atualizarRelogio(); // atualiza imediatamente
    setInterval(atualizarRelogio, 1000); // atualiza a cada segundo
  }
}

customElements.define("app-myheader", AppMyHeader);
