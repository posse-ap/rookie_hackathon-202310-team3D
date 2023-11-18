"use strict";

const slideOptions = {
  type: 'loop',
  gap: '40px' ,
  width: '1096px',
  perPage: 3,
  padding: '5rem',
  
  pagination: false,
  breakpoints: {
    768: {
      pagination: true,
      perPage: 1,
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {

  const slider = new Splide( '.splide', slideOptions
  ).mount();
});