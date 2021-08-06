export function crearArticle(){
    class ArticleM extends HTMLElement{
        constructor(){
            super()
            this.render()
        }
        render(){
            var texto = this.textContent
            
           var card = document.createElement("div")
            card.classList.add("card")
           
            var titulo = document.createElement("h2")
            titulo.classList.add("sub")
            titulo.textContent = texto

            var parrafo1 = document.createElement("p")
            parrafo1.classList.add("p")

            var parrafo2 = document.createElement("p")
            parrafo2.classList.add("p")

            var style = document.createElement('style');
            style.textContent = `
            .subtitulo{
                margin-top: 23px;
                text-align: center;
                font-weight: 400;
                font-size: 18px;
                margin-bottom: 72px;
            }
            .card{
                margin: 0 auto;
                width: 90%;
            }
            .sub{
                font-size: 38px;
                font-weight: 700;
            }
            .p{
                margin-top: 33px;
            }  
            `
           var shadow = this.attachShadow({mode: 'open'});
            shadow.appendChild(card)
            card.appendChild(titulo)
            card.appendChild(parrafo1)
            card.appendChild(parrafo2)
            shadow.appendChild(style)
          
        }
    }
    customElements.define("article-el",ArticleM)
}