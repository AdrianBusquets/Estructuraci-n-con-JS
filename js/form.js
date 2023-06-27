let botonFormulario= document.getElementById('btn')

botonFormulario.onclick = (event) =>{
    event.preventDefault()

    let nombre= document.getElementById('nombre')

    let email= document.getElementById('email')

    let carta= document.getElementById('carta')

    nombre.style.border= '2px solid green'
    email.style.border= '2px solid green'
    carta.style.border= '2px solid green'

    if(nombre.value.trim() === ''){
        nombre.style.border= '2px solid red'
    }

    let emailRegex= /^[\w\-\.]+@([\w-]+\.)+[\w-]$/
    if(emailRegex.test(email.value) === ''){
        email.style.border= '2px solid red'
    }
    if(carta.value.trim() === ''){
        carta.style.border= '2px solid red'
    }
}