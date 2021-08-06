export function crearButton(){
    class Buttons extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            var texto = this.textContent
            console.log(texto)
            var contenedor = document.createElement("form")
            contenedor.classList.add("contenedor")
            
            var label = document.createElement("label")
            label.classList.add("label")
            label.textContent = "Nombre"

            var input = document.createElement("input")
            input.classList.add("input")
            input.setAttribute("placeholder","Ingrese su nombre")

            var button = document.createElement("button")
            button.classList.add("button")
            button.textContent = texto

            var style = document.createElement("style")
            style.textContent = `
            .contenedor{
                display: flex;
                flex-direction: column;
                width: 312px;
                max-width: 353px;
            }
            .label{
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
                font-weight: 400;
               }
            .input{
                font-family: 'Roboto', sans-serif;
                height: 55px;
                border: solid 2px black;
                border-radius: 4px;
                font-size: 18px;
                font-weight: 400;
                margin-bottom:31px;
            }
            .button{
                font-family: 'Roboto', sans-serif;
                width: 312px;
                height: 55px;
                border-radius: 4px;
                background: #9CBBE9;
                font-size: 22px;
                font-weight: 500;
            }
               

            `

            var shadow = this.attachShadow({mode:'open'})
            if(this.hasAttribute("formulario")){
            shadow.appendChild(contenedor)
            shadow.appendChild(style)
            contenedor.appendChild(label)
            contenedor.appendChild(input)
            contenedor.appendChild(button)
            
            }
             if (this.hasAttribute("boton")){
                 style.textContent =`
                 .button{
                      font-family: 'Roboto', sans-serif;
                     width: 312px;
                     height: 55px;
                     border-radius: 4px;
                     background-color: #FFF;
                     font-size: 22px;
                     font-weight: 500;
                 }
                 `
                shadow.appendChild(style)
                shadow.appendChild(button)
            }
            
        }
    }
    customElements.define("button-el",Buttons)
}