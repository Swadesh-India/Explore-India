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
const toggleContainer = document.querySelector('.toggle-container');
const ball = toggleContainer.children[0].children[1]
let height = getDimension(toggleContainer, 'height');
		let width = getDimension(toggleContainer, 'width');
		
window.onload=(e) => {


	if (localStorage.getItem('darkMode')=='true') {
	document.body.classList.add('dark')
	ball.style.left =  `${width/100*95.8- getDimension(ball,'height')}px `
} else {
	document.body.classList.remove('dark')
ball.style.left=`${height/100*7.5}px`;
}

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




function getDimension(target,axis) {
	
	return parseInt(getComputedStyle(target).getPropertyValue(axis).slice(0, -2))
};

function toggleLandscape(container, ball) {
	
}

let on = 0
function setOrientation() {
	
		
		
		ball.style.width = ball.style.height = `${getDimension(toggleContainer, 'height')/100*85}px`;
		
		
			toggleContainer.children[0].style.alignItems = 'center'
			toggleContainer.style.borderRadius = `${height/2}px`;
			ball.style.left = `${height/100*7.5}px`;
			
			toggleContainer.addEventListener('click', (e) => {
				e.preventDefault()
				switchMode()

				ball.style.left = localStorage.getItem('darkMode')=='true' ? `${width/100*95.8- getDimension(ball,'height')}px ` : `${height/100*7.5}px`;
				console.log(width,height,getDimension(ball,height))
				
				on++
			})
			
		
		
	
	
}
setOrientation();

function switchMode() {
	let darkMode
	try {
		darkMode=localStorage.getItem('darkMode');
	} catch (e) {
		localStorage.setItem('darkMode','false');
		darkMode=localStorage.getItem('darkMode');
	}
	if(darkMode=='true'){
		document.body.classList.remove('dark')
		localStorage.setItem('darkMode','false');

	}else{
		document.body.classList.add('dark')
		localStorage.setItem('darkMode','true');

	}
}
