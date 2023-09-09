//template
const plantilla = document.createElement("template");

plantilla.innerHTML = `
<style>
.noticia{
}
.noticias p{
    font-size: 1.5rem;
}

.noticias img{
    width: 100%;
}
</style>
<h2> <slot name="tituloNoticia></slot></h2>
            <div class="noticia">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quod molestias rem nesciunt nobis? Fugit!</p>
                <img src="https://previews.123rf.com/images/rastudio/rastudio1708/rastudio170809958/84944028-icono-de-l%C3%ADnea-de-vector-de-noticias-global-aislado-sobre-fondo-blanco-icono-de-l%C3%ADnea-de-noticias.jpg" alt="...">
            </div>
`;


class ComponenteWeb extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(plantilla.content.cloneNode(true))
    }
}

//siempre debe llevar guion el nombre
customElements.define("web-noticias", ComponenteWeb);