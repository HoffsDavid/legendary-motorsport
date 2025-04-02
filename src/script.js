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
const filtroContainer = document.getElementById('filtro-container')
const mainPage = document.getElementById('carros')
var newPage = ''

filtroBtn.addEventListener('click', function () {
    if (filtroImg.getAttribute("src") == "../assets/traco.png") {
        filtroImg.removeAttribute("src")
        filtroImg.setAttribute("src", "../assets/seta-cima.png")
        filtrarPreco(0)
    } else if ((filtroImg.getAttribute("src") == "../assets/seta-cima.png")) {
        filtroImg.removeAttribute("src")
        filtroImg.setAttribute("src", "../assets/seta-baixo.png")
        filtrarPreco(1)
    } else {
        filtroImg.removeAttribute("src")
        filtroImg.setAttribute("src", "../assets/traco.png")
        filtrarPreco()
    }
})


const catalog = {
    comet: {
        nome: 'PFISTER COMET SAFARI',
        preco: 710000,
        dlc: 'PARTE DO GOLPE DO JUÍZO FINAL',
        vagas: '2',
        img: 'car1'
    },
    pariah: {
        nome: 'OCELOT PARIAH',
        preco: 1420000,
        dlc: 'PARTE DO GOLPE DO JUÍZO FINAL',
        vagas: '2',
        img: 'car2'
    },
    sc1: {
        nome: 'UBERMATCH SC1',
        preco: 1603000,
        dlc: 'PARTE DO GOLPE DO JUÍZO FINAL',
        vagas: '2',
        img: 'car3'
    },
    kuruma: {
        nome: 'KARIM KURUMA',
        preco: 450000,
        dlc: 'PARTE DE BOAS FESTAS',
        vagas: '4',
        img: 'car4'
    },
    insurgent: {
        nome: 'HVY INSURGENT',
        preco: 1800000,
        dlc: 'PARTE DE HEISTS',
        vagas: '4',
        img: 'car5'
    },
    adder: {
        nome: 'TRUFFADE ADDER',
        preco: 3000000,
        dlc: 'PARTE DO MODO HISTÓRIA',
        vagas: '2',
        img: 'car6'
    },
    champion: {
        nome: 'DEWBAUCHEE CHAMPION',
        preco: 3750000,
        dlc: 'PARTE DO GOLPE DO CASSINO',
        vagas: '4',
        img: 'car7'
    },
    opressor: {
        nome: 'PEGASSI OPRESSOR MK II',
        preco: 8000000,
        dlc: 'PARTE DO GOLPE DE CAYO PERICO',
        vagas: '2',
        img: 'car8'
    }

}

for (let chave in catalog) {
    var carro = catalog[chave]
    newCar = document.createElement('div')
    newCar.setAttribute('class', "w-55 md:w-60 h-40 bg-slate-300 mx-auto my-15 carro hover:cursor-pointer hover:scale-110 duration-300")
    newCar.setAttribute('onclick', `goToCart('${carro.nome}')`)
    newCar.setAttribute('id', carro.nome)
    newCar.innerHTML = `
            <div class="flex justify-between h-fit bg-white px-2 py-1 gap-5">
                <h2 id="${carro.nome}-golpe-nome" class="font-semibold text-xs">${carro.dlc}</h2>
                <img class="size-7 mr-1" id="img-vaga-${carro.nome}" src="../assets/vagas-${carro.vagas}.png">
                </div>
                <!--fim da parte superior-->
                <!--Imagem-->
                <img id="img-${carro.nome}" src="../assets/carros/${carro.img}-1.png" class="w-full">
                <!--Fim Imagem-->
                <!--parte inferior-->
                <div class="grid grid-cols-2 bg-black text-slate-200  w-full max-h-11 p-2 relative">
                    <h2 id="${carro.nome}" class="my-auto ml-1" style="font-size: 12px">${carro.nome}</h2>
                    <h2 id="${carro.nome}-preco" class="bg-red-700 h-fit absolute bottom-0 right-0 p-1 rounded-l-xs">${carro.preco.toLocaleString("en", { style: "currency", currency: "USD" })}</h2>
                </div>`

    listaCarros.appendChild(newCar)
}

function goToCart(id) {
    for (let chave in catalog) {
        if (catalog[chave].nome == id) {
            listaCarros.removeAttribute('class')
            listaCarros.setAttribute('class', 'hidden')
            filtroContainer.removeAttribute('class')
            filtroContainer.setAttribute('class', 'hidden')
            let carro = catalog[chave]
            newPage = document.createElement('div')
            newPage.setAttribute('class', 'block')
            newPage.innerHTML = `
            <div id="show-prod" class="grid grid-cols-3 p-7 gap-4">
                    <div class=" text-slate-200 m-auto">
                        <h2 class="md:text-2xl md:mb-4">${carro.nome}</h2>
                        <p class="hidden md:block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique error non, sunt accusantium molestias vitae id vel. Magni sapiente, consequatur debitis ullam assumenda quia sunt totam sed repellat, recusandae corrupti?</p>
                        <h2 class="md:text-2xl text-sm pt-10">SELECIONE UMA DAS CORES DISPONÍVEIS PARA ENCOMENDAR</h2>
                        <div id="color-selector" class="grid grid-cols-3 w-fit gap-5 md:ml-2 p-5">
                            <button class="bg-blue-500 rounded-full size-6 md:size-10 selecionado"></button>
                            <button class="bg-red-500 rounded-full size-6 md:size-10 selecionado"></button>
                            <button class="bg-green-500 rounded-full size-6 md:size-10 selecionado"></button>
                            <button class="bg-yellow-500 rounded-full size-6 md:size-10 selecionado"></button>
                            <button class="bg-black rounded-full size-6 md:size-10 selecionado"></button>
                            <button class="bg-slate-300 rounded-full size-6 md:size-10 selecionado"></button>
                        </div>
                        <button class="bg-red-700 md:ml-8 px-6 py-2 text-slate-200 rounded-xs hover:border border-slate-200 text-sm" onclick="retornar()">ENCOMENDAR</button>
                    </div>
                    <div class="col-span-2">
                        <p class="flex justify-end text-slate-200 text-2xl">${carro.preco.toLocaleString("en", { style: "currency", currency: "USD" })}</p>
                        <div class="grid grid-cols-2 w-full pt-10 gap-1">
                            <img class="col-span-2" src="../assets/carros/${carro.img}-1.png">
                            <img class="col-span-1" src="../assets/carros/${carro.img}-2.png">
                            <img class="col-span-1" src="../assets/carros/${carro.img}-3.png">
                        </div>
                        
                    </div>
                </div>
                <p class="block md:hidden px-10 text-slate-200 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique error non, sunt accusantium molestias vitae id vel. Magni sapiente, consequatur debitis ullam assumenda quia sunt totam sed repellat, recusandae corrupti?</p>
            `
            mainPage.appendChild(newPage)
        }
    }
}

function retornar() {
    mainPage.removeChild(newPage)
    listaCarros.removeAttribute('class')
    listaCarros.setAttribute('class', 'grid-cols-2 md:grid-cols-3 grid')
    filtroContainer.removeAttribute('class')
    filtroContainer.setAttribute('class', 'justify-between p-5 flex')
}

function filtrarPreco(ordem) {
    let precos = []
    let origem = []
    for (let carro in catalog) {
        precos.push(catalog[carro].preco)
        origem.push(catalog[carro].preco)
    }

    if (ordem > 0) {
        precos.sort(function (a, b) {
            return b - a;
        }
        )
    } else if (ordem == 0) {
        precos.sort(function (a, b) {
            return a - b;

        });
    } else {
        precos = origem
    }
    ordenarCarros(precos)

}

function ordenarCarros(listaPreco) {
    listaCarros.innerHTML = ''
    for (let preco in listaPreco) {
        for (let key in catalog) {
            if (listaPreco[preco] == catalog[key].preco) {
                var carro = catalog[key]
                newCar = document.createElement('div')


                newCar.setAttribute('class', "w-55 md:w-60 h-40 bg-slate-300 mx-auto my-15 carro hover: cursor-pointer")
                newCar.setAttribute('onclick', `goToCart('${carro.nome}')`)
                newCar.setAttribute('id', carro.nome)
                newCar.innerHTML = `
            <div class="flex justify-between h-fit bg-white px-2 py-1 gap-5">
                <h2 id="${carro.nome}-golpe-nome" class="font-semibold text-xs">${carro.dlc}</h2>
                <img class="size-7 mr-1" id="img-vaga-${carro.nome}" src="../assets/vagas-${carro.vagas}.png">
                </div>
                <!--fim da parte superior-->
                <!--Imagem-->
                <img id="img-${carro.nome}" src="../assets/carros/${carro.img}-1.png" class="w-full">
                <!--Fim Imagem-->
                <!--parte inferior-->
                <div class="grid grid-cols-2 bg-black text-slate-200  w-full max-h-11 p-2 relative">
                    <h2 id="${carro.nome}" class="my-auto ml-1" style="font-size: 12px">${carro.nome}</h2>
                    <h2 id="${carro.nome}-preco" class="bg-red-700 h-fit absolute bottom-0 right-0 p-1 rounded-l-xs">${carro.preco.toLocaleString("en", { style: "currency", currency: "USD" })}</h2>
                </div>`

                listaCarros.appendChild(newCar)
            }
        }
    }
}