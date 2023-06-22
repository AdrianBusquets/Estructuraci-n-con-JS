let categories = [
    { name: 'Coche', icon: `<i class="fa fa-car"></i>`, count: 123 },
    { name: 'Electronica', icon: `<i class="fa fa-laptop"></i>`, count: 564 },
    { name: 'Moto', icon: `<i class="fa fa-motorcycle"></i>`, count: 230 },
    { name: 'Ropa', icon: `<i class="fa fa-socks"></i>`, count: 321 },
    { name: 'Deporte', icon: `<i class="fa fa-dumbbell"></i>`, count: 90 },
    { name: 'Jardineria', icon: `<i class="fa fa-leaf"></i>`, count: 50 },
    { name: 'Casa', icon: `<i class="fa fa-bed"></i>`, count: 134 },
    { name: 'Cocina', icon: `<i class="fa fa-utensils"></i>`, count: 176 },
]

let contenedorCategories= document.querySelector('.lista_categorias')

categories.forEach(element =>{
    let article= document.createElement('article')

    article.classList.add('main_article')

    article.innerHTML= `
    ${element.icon}
    <h4>${element.name}</h4>
    <span>${element.count} anuncios</span>
    `
    contenedorCategories.appendChild(article)
})