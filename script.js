const shadow = document.querySelector('.opening-xray'); //document.querySelector('.threeD-shadow');
const header = document.querySelector('header');

header.addEventListener('mousemove', mouseMove);

const h = +window.getComputedStyle(header).height.slice(0,-2);
const w = +window.getComputedStyle(header).width.slice(0,-2);

function mouseMove(e) {

    console.log(e);

    const x = e.screenX;
    const y = e.screenY;

    const dx = Math.round(100 * x / w);
    const dy = Math.round(100 * y / h);

    shadow.style.perspectiveOrigin = `${dx}% ${dy}%`;

}