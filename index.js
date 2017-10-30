setAnims();

function setAnims() {
  let cards = Array.from(document.getElementsByClassName('card-img-overlay'));
  cards.forEach((card) => {
    card.children[0].style.left = `-${card.children[0].offsetWidth + 50}px`;
    card.addEventListener('mouseover', (e) => {
      card.children[1].style.bottom = `-${card.offsetHeight}px`;
      card.children[0].style.left = '10px'
      card.parentElement.children[0].classList.add('zoom-img');
      // card.style.background = 'linear-gradient(transparent 0%, #191919)';
    });
    card.addEventListener('mouseout', (e) => {
      card.children[1].style.bottom = '10px';
      card.children[0].style.left = `-${card.children[0].offsetWidth + 50}px`;
      card.parentElement.children[0].classList.remove('zoom-img');
      // card.style.background = 'linear-gradient(transparent 50%, #191919)';
    });
  });
}

$('.parallax').css('height', $(window).height());

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).on('click', '.navbar-brand', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

$('.card-img-overlay').on('click', (e) => {
  window.location.href = e.target.dataset.link;
});
