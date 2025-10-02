$(".header__slider").slick({
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: `
  <button class="slick-prev custom-arrow">
<svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Main horizontal line -->
  <line x1="38" y1="12" x2="2" y2="12" stroke="#EFF3F5" stroke-width="3" stroke-linecap="round"/>
  <!-- Arrowhead -->
  <line x1="12" y1="4" x2="2" y2="12" stroke="#EFF3F5" stroke-width="3" stroke-linecap="round"/>
  <line x1="12" y1="20" x2="2" y2="12" stroke="#EFF3F5" stroke-width="3" stroke-linecap="round"/>
</svg>

  </button>
`,
  nextArrow: `
  <button class="slick-next custom-arrow">
   <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Main horizontal line -->
  <line x1="2" y1="12" x2="38" y2="12" stroke="#EFF3F5" stroke-width="3" stroke-linecap="round"/>
  <!-- Arrowhead -->
  <line x1="28" y1="4" x2="38" y2="12" stroke="#EFF3F5" stroke-width="3" stroke-linecap="round"/>
  <line x1="28" y1="20" x2="38" y2="12" stroke="#EFF3F5" stroke-width="3" stroke-linecap="round"/>
</svg>
  </button>
`

});
