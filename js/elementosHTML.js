const rutaImagen = "cover/tones_and_i.jpg"
const rutaAudio = "sources/tones_and_I_Dance_Monkey.mp3"
const playIcon = `<i class="material-icons">play_arrow</i>`
const pauseIcon = `<i class="material-icons">pause</i>`
let isPlaying = false

document.body.style.backgroundColor = "black"

const titulo = document.createElement("h1")
      titulo.innerText = "Tiembla Spotify"
      titulo.classList.add("green-text")
      // titulo.id = "titulo1"

const imagen = document.createElement("img")      
      imagen.src = rutaImagen
      imagen.setAttribute("width", "250px")
      imagen.setAttribute("height", "250px")
      imagen.style.border = "2px solid"
      imagen.style.borderColor = "grey"
      imagen.style.margin = "20px"

const separador = document.createElement("br")

const audio = document.createElement("audio")
      audio.src = rutaAudio
      audio.controls = true
      audio.volume = 0.5       //0 al 1

const btnPlay = document.createElement("button")
      btnPlay.className="btn-floating btn-large green darken-3 white-text"
      btnPlay.innerHTML = playIcon

const div = document.querySelector("#documento")
     div.append(titulo, imagen, separador, btnPlay )



      //div.removeChild(elementoAeliminar)
      //div.remove() //elimina todos los elementos contenidos en el Padre (div)

      //En el addEventListener el primer parametro es que evento lo dispara y el segundo es que hace
audio.addEventListener("volumechange", ()=>{
      console.log("volumen: ", parseInt(audio.volume *100), "%")
})

 btnPlay.addEventListener("click", ()=>{
       if (isPlaying == false){                     
             audio.play()
             btnPlay.innerHTML = pauseIcon
             isPlaying=true            
       }else{
             audio.pause()
             btnPlay.innerHTML = playIcon
             isPlaying = false
       }
 })

