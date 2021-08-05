export function crearHeader(){
    class HeaderM extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            var texto = this.textContent
            var header = document.createElement("header")
            header.classList.add("header")
           
            var titulo = document.createElement("p")
            titulo.setAttribute("class", "titulo")
            titulo.textContent = texto

            var style = document.createElement('style');
            style.textContent = `
            .header{
                background-color: #FF8282;
                height: 10vh;
                display: flex;
                justify-content: center;
                align-items: center;
                }
            .titulo{
                font-size: 22px;
                font-weight:500;
               }
               @media(min-width:600px){
                .titulo{
                    font-size:32px;
                    font-weight:700;
                }
            }    
            `
           var shadow = this.attachShadow({mode: 'open'});
            shadow.appendChild(header)
            header.appendChild(titulo)
            shadow.appendChild(style)
          
        }
    }
    customElements.define("header-el",HeaderM)
}