let txtEncriptado = document.getElementById("txtEncriptar")
let btnEncriptar = document.getElementById("btnEncriptar")
let btnDesencriptar = document.getElementById("btnDesencriptar")
let txtDesencriptado = document.getElementById("txtDesencriptar")
let btnCopiar = document.getElementById("btnCopiar")

document.getElementById("txtDesencriptar").readOnly = true

function ReemplazarEncriptar(string) {
    const vocales = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    }
    return string.replaceAll(/[eiaou]/g, i => vocales[i])
}

function ReemplazarDesencriptar(string) {
    const vocales = {
        'enter': 'e',
        'imes' : 'i',
        'ai': 'a',            
        'ober': 'o',
        'ufat': 'u'
    }
    /*return string.replaceAll(/enter/ig, "e").replaceAll(/imes/ig, "i").replaceAll(/ai/ig, "a").replaceAll(/ober/ig, "o").replaceAll(/ufat/ig, "u")*/
    return string.replaceAll(/enter|imes|ai|ober|ufat/ig, i => vocales[i]);

}

function BtnEncriptar() {
    txtEncriptado = document.getElementById("txtEncriptar")

    //document.write(txtEncriptado.value)//Quitar
    //document.write("<br>")//Quitar

    //document.write(ReemplazarEncriptar(txtEncriptado.value.toLowerCase()))
    txtDesencriptado.value = ReemplazarEncriptar(txtEncriptado.value.toLowerCase())
    ocultarImagenes()
}

function BtnDesencriptar() {
    txtEncriptado = document.getElementById("txtEncriptar")

    //document.write("TEXTO ENCRIPTADO: " + txtEncriptado.value)//Quitar
    //document.write("<br>")//Quitar

    //document.write(ReemplazarDesencriptar(txtEncriptado.value.toLowerCase()))
    txtDesencriptado.value = ReemplazarDesencriptar(txtEncriptado.value.toLowerCase())
    ocultarImagenes()

}

function BtnCopiar() {
    try {
        var textoCopiado = document.getElementById("txtDesencriptar")
        textoCopiado.select()
        document.execCommand("copy")

    } catch (error) {
        console.log(error)
    }

}

function ocultarImagenes() {
    let textArea = document.getElementById("txtDesencriptar");

    if (textArea.value.length === 0) {

        document.getElementById("imagenEsperarTexto").style.display = "block"
        document.getElementById("tituloUno").style.display = "block"
        document.getElementById("tituloDos").style.display = "block"

    } else {

        document.getElementById("imagenEsperarTexto").style.display = "none"
        document.getElementById("tituloUno").style.display = "none"
        document.getElementById("tituloDos").style.display = "none"
    }
}

btnCopiar.onclick = BtnCopiar
btnEncriptar.onclick = BtnEncriptar
btnDesencriptar.onclick = BtnDesencriptar
