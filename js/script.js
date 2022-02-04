const btnMobile = document.getElementById('btn_mobile'),
  menuArea = document.getElementById('menu');
function toggleMenu(t) {
  'touchstart' === t.type && t.preventDefault();
  const e = document.querySelector('.header_menu');
  e.classList.toggle('active');
  const n = e.classList.contains('active');
  t.currentTarget.setAttribute('aria-expanded', n),
    n
      ? t.currentTarget.setAttribute('aria-label', 'Fechar Menu')
      : t.currentTarget.setAttribute('aria-label', 'Abrir Menu');
}
function closeMenu(t) {
  document.querySelector('.header_menu').classList.remove('active');
}
btnMobile.addEventListener('click', toggleMenu),
  btnMobile.addEventListener('touchstart', toggleMenu),
  menuArea.addEventListener('click', closeMenu),
  menuArea.addEventListener('touchstart', closeMenu),
  window.addEventListener('scroll', () => {
    document
      .querySelector('.header')
      .classList.toggle('sticky', window.scrollY > 0);
  });
class TypeWriter {
  constructor(t, e, n = 3e3) {
    (this.txtElement = t),
      (this.words = e),
      (this.txt = ''),
      (this.wordIndex = 0),
      (this.wait = parseInt(n, 10)),
      this.type(),
      (this.isDeleting = !1);
  }
  type() {
    const t = this.wordIndex % this.words.length,
      e = this.words[t];
    this.isDeleting
      ? (this.txt = e.substring(0, this.txt.length - 1))
      : (this.txt = e.substring(0, this.txt.length + 1)),
      (this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`);
    let n = 100;
    this.isDeleting && (n /= 2),
      this.isDeleting || this.txt !== e
        ? this.isDeleting &&
          '' === this.txt &&
          ((this.isDeleting = !1), this.wordIndex++, (n = 300))
        : ((n = this.wait), (this.isDeleting = !0)),
      setTimeout(() => this.type(), n);
  }
}
function init() {
  const t = document.querySelector('.txt-type'),
    e = JSON.parse(t.getAttribute('data-words')),
    n = t.getAttribute('data-wait');
  new TypeWriter(t, e, n);
}
document.addEventListener('DOMContentLoaded', init);
let myButton = document.getElementById('scroll');
function scrollFunction() {
  document.body.scrollTop > 120 || document.documentElement.scrollTop > 120
    ? ((myButton.style.display = 'block'),
      (myButton.style.animationName = 'scroll-animate'))
    : ((myButton.style.display = 'none'),
      (myButton.style.animationName = 'none'));
}
function topFunction() {
  (document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
window.onscroll = function () {
  scrollFunction();
};
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const t = window.pageYOffset;
  sections.forEach((e) => {
    const n = e.offsetHeight,
      s = e.offsetTop - 50;
    (sectionId = e.getAttribute('id')),
      t > s && t <= s + n
        ? document
            .querySelector('.header_menu li a[href*=' + sectionId + ']')
            .classList.add('selected')
        : document
            .querySelector('.header_menu li a[href*=' + sectionId + ']')
            .classList.remove('selected');
  });
}
window.addEventListener('scroll', scrollActive);
