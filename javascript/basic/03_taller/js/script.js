var contador=1

function cargar_elementos(){
    var content=document.getElementById("content")
    var texto= document.getElementById("texto")

    var div = document.createElement("div")
    
    div.className="item-box"
    var texto= document.createTextNode(texto.value)
    contador++
    div.appendChild(texto)
    content.appendChild(div)
}

function eliminar_elementos(){
    var content = document.getElementById("content")
    content.removeChild(content.lastElementChild)
    contador --
}

