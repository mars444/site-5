$(function () {




  var header = $('.header'),
    scrollPrev = 0;

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
      header.addClass('out');
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;
  });


  const menuLinks = document.querySelectorAll('.menu__item-link');
  if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuClick);
    });
    function onMenuClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
      }

    }
  }



  $(".menu-icon").click(function (e) {
    $(".menu").addClass('menu-active');
    $(".menu-icon").addClass('menu-icon-closeicon');
    $("body").addClass('lock');
    $(".menu-icon-close").addClass('menu-icon-close-active');
  })

  $(".menu-icon-close").click(function (e) {
    $(".menu").removeClass('menu-active');
    $(".menu-icon").removeClass('menu-icon-closeicon');
    $("body").removeClass('lock');
    $(".menu-icon-close").removeClass('menu-icon-close-active');
  })

  $(".menu__item-link").click(function (e) {
    $(".menu").removeClass('menu-active');
    $(".menu-icon").removeClass('menu-icon-closeicon');
    $("body").removeClass('lock');
    $(".menu-icon-close").removeClass('menu-icon-close-active');
  })


  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }
});
