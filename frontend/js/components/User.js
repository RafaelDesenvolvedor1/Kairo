class AppUser extends HTMLElement {
    constructor(){
        super();

        this.innerHTML = `
        <style>
            .avatar{
                border: 1px solid;
                width:50px;
                height:50px;
                display:flex;
                justify-content:center;
                border-radius:50px;
            }
        </style>
            <div class="d-flex gap-3 align-items-center avatar-container">
                <div class="avatar">
                    <img width=30px; height:30px; src="${this.getAttribute("avatar") || "../../assets/icons/user.svg"}" alt="icone de usuário"/>
                </div>
                <span>${this.getAttribute('username') || 'Username'}</span>
            </div>
        `
    }
}

customElements.define("app-user", AppUser);

