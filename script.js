// Função para iniciar o carrossel (Slick Slider)
$(document).ready(function(){
    $('.carousel').slick({
      dots: true, // Mostra os indicadores de slide
      infinite: true, // Loop infinito
      speed: 500, // Velocidade da transição
      slidesToShow: 3, // Número de slides visíveis por vez (ajuste conforme necessário)
      slidesToScroll: 1, // Número de slides a serem percorridos
      autoplay: true, // Inicia o carrossel automaticamente
      autoplaySpeed: 3000, // Tempo entre cada slide (em milissegundos)
      responsive: [
        {
          breakpoint: 1024, // Ajustes para telas menores (tablets)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600, // Ajustes para telas ainda menores (celulares)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
  // Animação de entrada para os elementos da página
  const elementsToAnimate = document.querySelectorAll('.animate__animated');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__fadeInUp');
        observer.unobserve(entry.target); // Para de observar o elemento após a animação
      }
    });
  }, { threshold: 0.5 }); // Ativa a animação quando 50% do elemento estiver visível
  
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });