$(function(){

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
});
      