const carousellContendeor = document.querySelector('.img_top')
const carousellImg = document.querySelectorAll('.img_top img')
const btn1 = document.querySelector('.circulo1')
const btn2 = document.querySelector('.circulo2')

let index = 0;

function enseñarImg(){
    carousellImg.forEach((img, i)=> {
        if(i === index){
            img.classList.add('activo')
        } else{
            img.classList.remove('activo')
        }
    })
}

function atrasImg(){
    index--
    if(index < 0){
        index = carousellImg.length - 1
    }
    enseñarImg()
}

function adelanteImg(){
    index++
    if(index >= carousellImg.length){
        index = 0
    }
    enseñarImg()
}


btn1.addEventListener('click', atrasImg)
btn2.addEventListener('click', adelanteImg)
enseñarImg()