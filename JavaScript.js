let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
//let contactButton1 = document.querySelector('.contactButton1');
//let contactButton2 = document.querySelector('.contactButton2');
let contact1 = document.querySelector('.contact1');
let contact2 = document.querySelector('.contact2');
let page = document.querySelector('.page');


const changeNightCol = () => {
	page.style.backgroundColor = '#113662';
	page.style.color = '#fff';
	contact1.style.color = '#fff';
	contact2.style.color = '#fff';

};
const changeLightCol = () => {
	page.style.backgroundColor = '#E0E7D9';
	page.style.color = '#000';
	contact1.style.color = '#000';
	contact2.style.color = '#000';
};
button1.onclick = changeNightCol;
button2.onclick = changeLightCol;




/*const changeNightGrad = () => {
	page.style.background = 'linearGradient(135deg, rgba(142,219,215,1), rgba(255,244,235,1))';
};
const changeLightGrad = () => {
	page.style.background = 'linearGradient(142deg, rgba(0,0,0,1) 0%, rgba(62,72,72,1) 51%, rgba(92,106,107,1) 87%)';
};

contactButton1.onclick = changeNightGrad;
contactButton2.onclick = changeLightGrad;		


contactButton1.onclick.console.log('click');    





const changeNightGrad = () => {
	page.style.innerHTML = 
		`background: linearGradient(142deg, rgba(0,0,0,1) 0%, rgba(62,72,72,1) 51%, rgba(92,106,107,1) 87%);
		background-repeat: no-repeat;
		display: flex;
		flex-direction: row;
		
		flex-wrap: wrap;
		height: 100vh;
		`
};
const changeLightGrad = () => {
	page.style.innerHTML = 
		`background: linearGradient(135deg, rgba(142,219,215,1), rgba(255,244,235,1));
		background-repeat: no-repeat;
		display: flex;
		flex-direction: row;
		
		flex-wrap: wrap;
		height: 100vh;
		`
};            */

//contactButton1.onclick = changeNightCol;
//contactButton2.onclick = changeLightCol;	