// Aberto e fechado
var setOpen = document.getElementById('time-loja')
var time = new Date()
var dia = time.getDay()
var hora = time.getHours()

if((dia >= 1 && dia <= 5) && hora >= 17 && hora <= 23) {
    setOpen.style.backgroundColor = "rgb(94, 204, 94)"
    setOpen.innerHTML = 'Aberto'
} else if((dia == 0 || dia == 6) && hora >= 18 && hora <= 23 ) {
    setOpen.innerHTML = 'Aberto'
} else {
    setOpen.innerHTML = 'Fechado'
    setOpen.style.backgroundColor = "#8d1e19"
    setOpen.style.color = "#fff"

}

// menu
var rootmenu = document.getElementById("cardapio-box2__root-menu");

const menuItens = async () => {
    const data1 = await fetch("https://api.brchallenges.com/api/empire-burger/menu")
    return data1.json()
  }


  const formandoMenu = (e) => e.map(({ plate, ingredients, price }) =>`
  <div>
   <p class="root-menu__nome"> ${plate} ...................
    <span class="root-menu__valor"> R$${Intl.NumberFormat().format(price)} </span> 
    <p class="menu__descricao"> ${ingredients} </p>
    </div>
      `
    )

    


// NOSSA REALEZA

var rootrealeza = document.getElementById("realeza__carrossel");

const realezaitens = async () => {
    const data2 = await fetch('https://api.brchallenges.com/api/empire-burger/testimonials')
    return data2.json()
}
const formandoRealeza = (e) => e.map(({age, image, name, testimonial}) => `
<div class="carrossel_box-realeza">
            <p>“${testimonial}”</p>
            <div class="box-realeza__people">
                <div class="people__formatimg">
                    <img src=${image} alt="">
                </div>
                <div >
                    <p class="people__name">${name}</p>
                    <p class="people__desc">${age} Anos • Designer</p>
                </div>
            </div>
        </div>
        
`

)









// gerando na tela


const rootDOM = async () => {
    const menuItems = await menuItens()
    const naTelaMenu = formandoMenu(menuItems)
    const realezaItens = await realezaitens()
    const naTelaRealeza = formandoRealeza(realezaItens)

    rootmenu.innerHTML += naTelaMenu
    rootrealeza.innerHTML = ""
    rootrealeza.innerHTML += naTelaRealeza
}

rootDOM()