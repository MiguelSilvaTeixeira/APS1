export class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                .header {
                    display: block;
                    top: 0;
                    left: 0;
                    width: 100%;
                    padding: 20px 100px;
                    background: #3e853c00;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    z-index: 100;
                }
                
                .logo {
                    font-size: 32px;
                    color: #fff;
                    text-decoration: none;
                    font-weight: 700;
                }
                
                .navbar {
                    display: flex;
                }
                
                .navbar a {
                    position: relative;
                    font-size: 18px;
                    color: #fff;
                    font-weight: 500;
                    text-decoration: none;
                    margin-left: 45px;
                    margin-right: 25px;
                }
                
                .navbar a::before {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #23582ff5;
                    transition: .3s;
                }
                
                .navbar a:hover::before {
                    width: 100%;
                }
                
                /*Dropdown das Energias*/
                .dropdown {
                    position: relative;
                    margin-right: 20px;
                }
                
                .dropdown-content {
                    display: none;
                    position: absolute;
                    left: 40px;
                    background-color: rgba(220, 220, 220, 1);
                    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.566);
                    z-index: 1;
                }
                
                .dropdown-content a {
                    color: black;
                    padding: 12px 30px;
                    margin: 10px;
                    text-decoration: none;
                    display: block;
                }
                
                .dropdown-content a:hover {
                    background-color: #79db686a;
                }
                
                .dropdown:hover .dropdown-content {
                    display: block;
                }
            </style>
            <header class="header">
                <a href="#" class="logo">Logo</a>
                <nav class="navbar">
                    <a href="home.html">Home</a>
                    <div class="dropdown">
                        <a href="energia-solar.html">Energias Limpas</a>
                        <div class="dropdown-content">
                            <a href="energia-solar.html">Energia Solar</a>
                            <a href="energia-eolica.html">Energia Eólica</a>
                            <a href="energia-hidrica.html">Energia Hídrica</a>
                            <a href="energia-biomassa.html">Energia da Biomassa</a>
                            <a href="energia-geotermica.html">Energia Geotérmica</a>
                            <a href="energia-ondas-mares.html">Energia das Ondas e Marés</a>
                        </div>
                    </div>
                    <a href="trasportes-sustentaveis.html">Transportes Sustentáveis</a>
                    <a href="transportes-alternativos.html">Transportes Alternativos</a>
                    <a href="sobre.html">Sobre</a>
                </nav>
            </header>  
        `;
  }
}
