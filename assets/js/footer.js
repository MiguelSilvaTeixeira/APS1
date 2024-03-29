export class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <style>
                footer {
                    text-align: center;
                    margin-bottom: 20px;
                }        
                footer>p {
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 18px;
                    color: #fff;
                }        
                #footer-top {
                    height: 30px;
                    width: 30px;
                    vertical-align: middle;
                    margin-left: 10px;
                }
            </style>
            <footer>
                <a href="#"><img src="../assets/img/seta-para-cima.png" alt="Voltar ao topo" id="footer-top"></a>             
                <p> Copyright &copy; 2024</p>
            </footer>
        `;
    }
}