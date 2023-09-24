const shadow = document.querySelector('.opening-xray'); //document.querySelector('.threeD-shadow');
const header = document.querySelector('header');

header.addEventListener('mousemove', mouseMove);

const shadowBbox = shadow.getBoundingClientRect();

const { x, y, width, height } = shadowBbox;

console.log(x, y, width, height);

setTimeout(
    () => {
        shadow.style.setProperty('--r', '33%');
    }, 2000
)


//const d = 30;

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

    /*
    shadow.style.setProperty('--x1', `${dx - d}%`);
    shadow.style.setProperty('--y1', `${dy - d}%`);
    shadow.style.setProperty('--x2', `${dx + d}%`);
    shadow.style.setProperty('--y2', `${dy + d}%`);
    */

}