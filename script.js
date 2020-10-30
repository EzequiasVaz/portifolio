document.querySelector(".hamburguer").addEventListener('click', () => document.querySelector('.container').classList.toggle('show-menu'))

let btnConhecimentos = document.querySelector('#conhecimentos')
let sessaoConhecimentos = document.querySelector(".conhecimentos")

btnConhecimentos.addEventListener('click', function () {
    window.scroll(1300, 1300)
})



document.querySelector(".btn-inicio").addEventListener('click', () => window.scrollTo({top: 0, left: 0, behavior: 'smooth' }) )

/*document.querySelector("#home").addEventListener('click', () => document.querySelector(".container").scrollIntoView() )

document.querySelector("#conhecimentos").addEventListener('click', () => document.querySelector(".sessao-conhecimentos").scrollIntoView(true))

document.querySelector("#projetos").addEventListener('click', () => document.querySelector(".sessao-projetos").scrollIntoView())

document.querySelector("#contato").addEventListener('click', () => document.querySelector(".sessao-contato").scrollIntoView())

document.querySelector("#orcamento").addEventListener('click', () => document.querySelector(".sessao-orcamento").scrollIntoView())*/