class AppCardFinanceiro extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
        <style>
            .card i{font-size:1.8em;}
            .card {
                box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.46);
                -webkit-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.46);
                -moz-box-shadow: 10px 10px 5px -4px rgba(0,0,0,0.46);
            }
        </style>
        <div class="card mb-3 rounded-pill overflow-hidden " style="min-width: 250px; max-height:100px;">
            <div class="row g-0">
                <div class="col-md-4 d-flex justify-content-center align-items-center" style="background:var(--background-primary);">
                <i class="${this.getAttribute("icon") || ''}"></i>
                </div>
                <div class="col-md-8">
                <div class="card-body ">
                    <h5 class="card-title">${this.getAttribute("title")}</h5>
                    <p class="card-text ">
                        <small class="text-muted ">
                            ${this.getAttribute("subtitle")} <strong>R$ ${this.getAttribute("valor")}</strong>
                        </small>
                    </p>
                </div>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define("app-cardfinanceiro", AppCardFinanceiro);
