export class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                footer>p {
                    display: block;
                    width: 100%;
                    padding: 20px;
                    background-color: #3e853c00;
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
