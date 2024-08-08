let menu = document.querySelector('#menu-btn');
// Seleciona o elemento com o ID "menu-btn" e atribui-o à variável "menu"
let navbar = document.querySelector('.header .navbar');
// Seleciona o elemento com a classe "navbar" dentro de um elemento com a classe "header" e atribui-o à variável "navbar

menu.onclick = () =>{
    // Adiciona um evento de clique ao elemento "menu"
    menu.classList.toggle('fa-times');
    // Ao clicar no menu, alterna a classe "fa-times" do elemento "menu"
    navbar.classList.toggle('active');
     // Ao clicar no menu, alterna a classe "active" do elemento "navbar"
};
window.onscroll = () =>{
    // Adiciona um evento de scroll à janela do navegador
    menu.classList.remove('fa-times');
     // Ao rolar a janela, remove a classe "fa-times" do elemento "menu" (se estiver presente)
    navbar.classList.remove('active');
    // Ao rolar a janela, remove a classe "active" do elemento "navbar" (se estiver presente)
};
    

/* Começo dos Slides */

// Importação (assumindo que Swiper é uma biblioteca externa)
// ... (código para importar a biblioteca Swiper)

// Cria um carrossel Swiper para o elemento com a classe "home-slider"
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    // Espaçamento entre slides (20 pixels)
    effect: "cube",
    // Efeito de transição: fade (dissolver)
    grabCursor: true,
    // Habilita o cursor "pegar" para indicar que é possível arrastar
    loop:true,
     // Ativa a repetição contínua (o último slide volta para o primeiro)
    autoplay: {
        delay: 200000,  
        // Define o tempo de intervalo entre transições automáticas (4 segundos)
    }, 
    centeredSlides: true,
     // Centraliza os slides no carrossel
    pagination: {
      el: ".swiper-pagination",
      // Elemento HTML que contém a paginação (pontos de navegação)
      clickable: true,
       // Habilita a navegação por clique nos pontos de paginação
    },
});

var swiper = new Swiper(".review-slider", {
    // Cria outro carrossel Swiper para o elemento com a classe "review-slider"
    spaceBetween: 20,
    // Espaçamento entre slides (20 pixels)
    grabCursor: true,
    // Habilita o cursor "pegar" para indicar que é possível arrastar
    loop:true,
    // Ativa a repetição contínua (o último slide volta para o primeiro)
    autoplay: {
        delay: 1500,
        // Define o tempo de intervalo entre transições automáticas (7.5 segundos)
        disableOnInteraction: false,
         // Permite que a reprodução automática continue mesmo após interação do usuário (clique ou arrastar)
    },
    breakpoints:{
        0:{
            slidesPerView:1,
            // Exibe 1 slide por vez em telas menores que 600px
        },
        600:{
            slidesPerView:2,
            // Exibe 2 slides por vez em telas iguais ou maiores que 600px
        },
    },
});

var swiper = new Swiper(".blogs-slider", {
    // Cria um carrossel Swiper para o elemento com a classe "blogs-slider"
    spaceBetween: 20,
    // Espaçamento entre slides (20 pixels)
    grabCursor: true,
    // Habilita o cursor "pegar" para indicar que é possível arrastar
    loop:true,
    // Ativa a repetição contínua (o último slide volta para o primeiro)
    autoplay: {
        delay: 7500,
        // Define o tempo de intervalo entre transições automáticas (7.5 segundos)
        disableOnInteraction: false,
        // Permite que a reprodução automática continue mesmo após interação do usuário (clique ou arrastar)

    },
    pagination: {
        el: ".swiper-pagination",
        // Elemento HTML que contém a paginação (pontos de navegação)
        clickable: true,
        // Habilita a navegação por clique nos pontos de paginação
    },
    breakpoints:{
        0:{
            slidesPerView:1,
            // Exibe 1 slide por vez em telas menores que 768px
        },
        768:{
            slidesPerView:2,
            // Exibe 2 slides por vez em telas entre 768px e 990px
        },
        991:{
            slidesPerView:3,
            // Exibe 3 slides por vez em telas iguais ou maiores que 991px
        },
    },
});