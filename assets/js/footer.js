export class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                footer>p {
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                    padding: 20px;
                    background-color: #0367A3;
                    text-align: center;
                    font-size: 18px;
                    color: #fff;
                }
            </style>
            <footer>
                <p> Copyright &copy; 2024</p>
            </footer>
        `;
    }
}