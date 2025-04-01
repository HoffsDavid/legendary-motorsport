const filtroBtn = document.getElementById('filtro-btn')
const filtroImg = document.getElementById('filtro-img')
const golpeTexto = document.getElementById('golpe-nome')
const imgVaga = document.getElementById('img-vaga')
const imgCarro = document.getElementById('img-carro')
const carroTexto = document.getElementById('carro-nome')
const precoCarroTexto = document.getElementById('carro-preco')
const listaCarros = document.getElementById('lista-carros')
const goToCartBtn = document.querySelectorAll('.carro')
const body = document.getElementsByTagName('body')


filtroBtn.addEventListener('click', function(){
    if (filtroImg.getAttribute("src") == "../assets/traco.png"){
        filtroImg.removeAttribute("src")
        filtroImg.setAttribute("src", "../assets/seta-cima.png")
        filtrarPreco('crescente')
    } else if((filtroImg.getAttribute("src") == "../assets/seta-cima.png")){
        filtroImg.removeAttribute("src")
        filtroImg.setAttribute("src", "../assets/seta-baixo.png")
        filtrarPreco('decrescente')
    } else {
        filtroImg.removeAttribute("src")
        filtroImg.setAttribute("src", "../assets/traco.png")
        filtrarPreco('none')
    }
})


const catalog = {
    comet: {
        nome: 'PFISTER COMET SAFARI',
        preco: '$710,000',
        dlc: 'PARTE DO GOLPE DO JUÍZO FINAL',
        vagas: '2',
        img: 'comet.jpeg'
    },
    pariah: {
        nome: 'OCELOT PARIAH',
        preco: '$1,420,000',
        dlc: 'PARTE DO GOLPE DO JUÍZO FINAL',
        vagas: '2',
        img: 'pariah.jpg'
    },
    sc1: {
        nome: 'UBERMATCH SC1',
        preco: '$1,603,000',
        dlc: 'PARTE DO GOLPE DO JUÍZO FINAL',
        vagas: '2',
        img: 'sc1.jpg'
    },
    kuruma: {
        nome: 'KARIM KURUMA BLINDADO',
        preco: '$450,000',
        dlc: 'PARTE DE BOAS FESTAS',
        vagas: '4',
        img: 'kuruma.jpg'
    },
    insurgent: {
        nome: 'HVY INSURGENT',
        preco: '$1,000,000',
        dlc: 'PARTE DE HEISTS',
        vagas: '4',
        img: 'insurgent.jpg'
    },
    adder: {
        nome: 'TRUFFADE ADDER',
        preco: '$1,000,000',
        dlc: 'PARTE DO MODO HISTÓRIA',
        vagas: '2',
        img: 'adder.jpeg'
    },
    champion: {
        nome: 'DEWBAUCHEE CHAMPION',
        preco: '$3,750,000',
        dlc: 'PARTE DO GOLPE DO CASSINO',
        vagas: '4',
        img: 'champion.jpg'
    },
    opressor: {
        nome: 'PEGASSI OPRESSOR MK II',
        preco: '$8,000,000',
        dlc: 'PARTE DO GOLPE DE CAYO PERICO',
        vagas: '2',
        img: 'opressor.jpg'
    }
}

for(let chave in catalog){
    let carro = catalog[chave]
    let newCar = document.createElement('div')
    newCar.setAttribute('class', "w-55 h-40 bg-slate-300 mx-auto my-10 carro hover: cursor-pointer")
    newCar.setAttribute('onclick', `goToCart('${carro.nome}')`)
    newCar.setAttribute('id', carro.nome)
    newCar.innerHTML = `
            <div class="flex justify-between h-fit bg-white px-2 py-1 gap-5">
                <h2 id="${carro.nome}-golpe-nome" class="font-semibold text-xs">${carro.dlc}</h2>
                <img class="size-7 mr-1" id="img-vaga-${carro.nome}" src="../assets/vagas-${carro.vagas}.png">
                </div>
                <!--fim da parte superior-->
                <!--Imagem-->
                <img id="img-${carro.nome}" src="../assets/carros/${carro.img}" class="w-full">
                <!--Fim Imagem-->
                <!--parte inferior-->
                <div class="grid grid-cols-2 bg-black text-slate-200  w-full max-h-11 p-2 relative">
                    <h2 id="${carro.nome}" class="my-auto ml-1" style="font-size: 12px">${carro.nome}</h2>
                    <h2 id="${carro.nome}-preco" class="bg-red-700 h-fit absolute bottom-0 right-0 p-1 rounded-l-xs">${carro.preco}</h2>
                </div>`
                
    listaCarros.appendChild(newCar)
}

function goToCart(id){
    let newPage = document.createElement('div')
    newPage.setAttribute('class', "w-[100dvw] h-[100dvh] bg-slate-300 z-40 fixed top-0 left-0")
    newPage.innerHTML = `
    <header class="w-full h-[400px] bg-cover bg-center"></header>
    <div class="bg w-full">
        <div class="w-[70dvw] h-full bg-red-950 mx-auto mt-[-4dvh] border border-red-800">
        <div class="flex">
            <h2>Carro Caro</h2>
        </div>
        </div>
    </div>`
    listaCarros.appendChild(newPage)
}

