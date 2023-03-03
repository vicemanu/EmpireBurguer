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

 
