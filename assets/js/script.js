/* アドレスバー・ツールバーを除いた100vhの高さを取得 */
function setHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setHeight();
window.addEventListener("resize", setHeight);

/* スライダーの設定 */
const verticalSlider = new Swiper(".vertical-slider", {
  direction: "vertical",
  slidesPerView: 1,
  speed: 600,
  mousewheel: true,
  pagination: {
    el: ".vertical-slider__pagination",
    type: "bullets",
    loop: true,
    clickable: true,
  },
});

  // 各スライドのaria-labelをpタグに出力
  document.querySelectorAll('.vertical-slider__slide').forEach(slide => {
    const label = slide.getAttribute('data-label');
    const labelElement = slide.querySelector('.slide-label');
    if (label && labelElement) {
      labelElement.textContent = label;
      slide.setAttribute('aria-label', label); // アクセシビリティ用
    }
  });

function scrollToTop(event) {
    event.preventDefault(); // デフォルトのアンカー動作を防止

    // Swiperのスライダーを最初のスライドにスムーズに移動
    const swiper = document.querySelector('.vertical-slider').swiper;
    swiper.slideTo(0, 1000); // 0番目のスライドに500msで移動（スムーズ）

    // ページ全体をトップにスムーズにスクロール
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // スムーズなスクロール
    });
}