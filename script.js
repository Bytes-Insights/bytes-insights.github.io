const shadow = document.querySelector('.opening-xray'); //document.querySelector('.threeD-shadow');
const header = document.querySelector('header');

header.addEventListener('mousemove', mouseMove);

const shadowBbox = shadow.getBoundingClientRect();

const { x, y, width, height } = shadowBbox;

console.log(x, y, width, height);

//const h = +window.getComputedStyle(shadow).height.slice(0,-2);
//const w = +window.getComputedStyle(shadow).width.slice(0,-2);

function mouseMove(e) {

    const mx = e.clientX;
    const my = e.clientY;

    const dx = Math.round(100 * (mx - x) / width);
    const dy = Math.round(100 * (my - y) / height);

    //shadow.style.perspectiveOrigin = `${dx}% ${dy}%`;
    shadow.style.setProperty('--x', `${dx}%`);
    shadow.style.setProperty('--y', `${dy}%`);

}