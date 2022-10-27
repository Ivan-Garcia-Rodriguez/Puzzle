function Puzle(contenedor)
{
    this.tamano=3;
    this.contenedorParent=contenedor;
    this.imagen="C:\Users\DAW\Desktop\Cliente\Ejercicio puzle\Imagen";
    this.width=2000;
    this.celdas=[];

}

Puzle.prototype.empezar=function()
{
    this.contenedor=this.creaContenedor();
    this.contenedorParent.appendChild(this.contenedor);
}

Puzle.prototype.creaContenedor=function()
{
    
    const div = document.createElement("div");
    div.style.position="relative";
    div.style.margin=" 0 auto";
    return div;
}

Puzle.prototype.procesaImagen=function()
{
    this.imagen.addEventListener("onload",function(){
        this.heighth=imagen.heighth*this.width/imagen.width;
        this.contenedor.style.width=this.width+"px";
        this.contenedor.style.heighth=this.heighth+"px";
    })
}

Puzle.prototype.construccion=function()
{
    for(let i=0;i<this.tamano*this.tamano;i++)
    {

    }
}