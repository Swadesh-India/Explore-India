let m = document.querySelector('.menu-cont');
let c = false;
document.getElementById('menu').addEventListener('click', () => { c = !c;
	document.getElementById(`hidden`).style.display = c ? 'block' : 'none';
	c ? m.setAttribute('id', 'menu-show') : m.removeAttribute('id') })
let fs = parseInt(getComputedStyle(document.querySelector('.home-header')).fontSize.trim('px')) * 3;

document.querySelector('.hidden').style.height = document.body.scrollHeight + "px";

function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	return rect.top <= window.innerHeight;
}


window.addEventListener('scroll', function() {
	elements = Array.from(document.getElementsByClassName('category-box'));
	elements.forEach((elem) => {
		if (isElementInViewport(elem)) {
			elem.classList.add('visible');

		} else {
			elem.classList.remove('visible');

		}
	});
});