const reciboFoco = (campo)=> {campo.className=`bg-color-input`}
const pierdoFoco = (campo)=> {campo.className=""} 
const capturarEnter = (event) => {
    //console.log(event.key)
    if (event.key == "Enter"){
        //metaKey se usa para detectar las teclas cotrol, alt, shift
        //debugger        
            let indice = event.target.getAttribute("tabindex")
            console.log(indice)
            if (indice < campos.length){            
            campos[indice].focus()
        }
        
    }

}

let commit3 = "comentario commit 3"

// nombre.addEventListener("focus", ()=> {
//     reciboFocoLam()
// })

// nombre.addEventListener("blur", ()=>{
//     pierdoFoco()
// })

for (let campo of campos){
    campo.addEventListener("focus", ()=> reciboFoco(campo))
    campo.addEventListener("blur", ()=> pierdoFoco(campo))
    campo.addEventListener("change", ()=> console.log(campo.value))
    campo.addEventListener("keypress", ()=> {
        capturarEnter(event)
    })
}

//keypress, keydown, keyup son eventos del teclado que podemos usar.