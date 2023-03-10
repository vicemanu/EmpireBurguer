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

// API

var data = fetch('https://api.brchallenges.com/api/empire-burger/menu')
// .then( result => result.json())
// 

  console.log(JSON.parse(data))
// root do menu
var rootmenu = document.getElementById("cardapio-box2__root-menu");

var item = [
    'Classic burger ................................', 'Special big burger ........................',
    'special big burger ........................',
    'Mexican burger .............................'
]

var prc = [49.99, 49.99, 49.99, 49.99]


var dsp = [
    'Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata',
    'Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata',
    'Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata',
    'Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata'
]



for (i=0 ; i < item.length  ; i++ ) {
    rootmenu.innerHTML += `<div>
    <p class="root-menu__nome"> ${item[i]}
    <span class="root-menu__valor"> R$${Intl.NumberFormat().format(prc[i])} </span> 
    <p class="menu__descricao"> ${dsp[i]} </p>
    </div>`
}

 
