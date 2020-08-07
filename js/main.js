$(document).ready(function () {
  var hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
  });

  var reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters

    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $(".modal__close");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  //обработка форм
  $(".modal__form ").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Enter your name",
        minlength: "Name shouldn't be shorter than 2 letters",
      },
      email: {
        required: "Enter your email adress",
        email: "Email adress should be in the format of name@domain.com",
      },
      phone: {
        required: "Enter your phone number",
        minlength: "Phone number shouldn't be shorter than 2 letters",
      },
    },
  });
  //обработка форм
  $(".form ").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Enter your name",
        minlength: "Name shouldn't be shorter than 2 letters",
      },
      email: {
        required: "Enter your email adress",
        email: "Email adress should be in the format of name@domain.com",
      },
      phone: {
        required: "Enter your phone number",
        minlength: "Phone number shouldn't be shorter than 10 letters",
      },
    },
  });
  $(".subscribe__form ").validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Enter your name",
        minlength: "Name shouldn't be shorter than 2 letters",
      },
      email: {
        required: "Enter your email adress",
        email: "Email adress should be in the format of name@domain.com",
      },
      phone: {
        required: "Enter your phone number",
        minlength: "Phone number shouldn't be shorter than 10 letters",
      },
    },
  });

  AOS.init();
});
