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
                    background-color: #0367A3;
                    text-align: center;
                    color: #fff;                    
                    padding: 20px;                    
                    font-size: 18px;
                }
            </style>
            <footer>
                <p> Copyright &copy; 2024</p>
            </footer>
        `;
    }
}