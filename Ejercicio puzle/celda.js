

function Celda(puzle,index)
{
    this.vacia=false;
    this.index=index;
    this.puzle=puzle;
    this.width=this.puzle.width/this.puzle.tamano;
    this.height=this.puzle.height/this.puzle.tamano;
    this.contenedor=creaContenedorCelda();
    puzle.contenedor.appendChild(this.contenedor);
    this.anadeImagen();

}


function creaContenedorCelda()
{
    const div= document.createElement("div");
    div.style.backgroundSize=this.puzle.width+"px "+this.puzle.height+"px";
    div.style.border="1px solid #FFF";
    div.style.position="absolute";
}


function anadeImagen()
{
    var x = this.getX(this.index);
    var y = this.getY(this.index);
    var left = this.width*x;
    var top = this.height*y;

    this.contenedor.style.width=this.width+"px";
    this.contenedor.style.height=this.height+"px";

    this.contenedor.style.backgroundImage=""+this.puzle.imagen+"";
    this.contenedor.style.backgroundPosition="-"+left+"px -"+top+"px";
}

function getX(index)
{
    return (index%this.puzle.tamano);
}

function getY(index)
{
    return (Math.floor(index/this.puzle.tamano));
}