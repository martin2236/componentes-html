export function crearFooter(){
    class Footer extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            var texto = this.textContent

            var titulo = document.createElement("p")
            titulo.setAttribute("class", "titulo")
            titulo.textContent = texto

            const footer = document.createElement("div")
            footer.classList.add("footer")

            var style = document.createElement("style")
            style.textContent = `
            .footer{
                margin-top:60px;
                height: 233px;
                background: #FFA0EA;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            `

            var shadow = this.attachShadow({mode:'open'})
           shadow.appendChild(footer)
            shadow.appendChild(style)
            footer.appendChild(titulo)

        }
    
    }
    customElements.define("footer-el", Footer)
}