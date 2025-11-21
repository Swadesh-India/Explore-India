const API_KEY = 'AIzaSyBroqUWDxPxD5dcNwrxG1Jm30_Yi3z5X04';
const conversationHistory=[];
async function searchData(query) {

	const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`
conversationHistory.push({
	role: 'user',
	parts: [{ text: query }]
});console.log(conversationHistory)
	const requestOptions = {
		'method': 'POST',
		'headers': {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"contents":conversationHistory
		})
	};
	try {

		const response = await fetch(API_URL, requestOptions);
		if (!response.ok) throw new Error(response.statusText);
		const data = await response.json();
		const answer = data.candidates[0].content.parts[0].text
		
		conversationHistory.push({
			role:'model',
			parts:[{text:answer}]
		})
		return answer

	} catch (e) {
		return 'Sorry! Some error occurred!'+e;
	};
}
async function getData(query) {
	return await getData(query);
}



const queryBox= document.getElementById('query');
const searchBtn = document.getElementById('search-btn');
const resultContainer = document.querySelector('.result-box');
async function showData() {
	if (! queryBox ||!queryBox.value) {
		console.log('Query Not Found')
		return
	}
	const query=queryBox.value;
	
	const data = await searchData(query)
	       
	
	resultContainer.innerHTML = data
	  .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>')
	  	.replace(/\*/g, '&bull;')
	  	.replace(/\\n/,'<br>')
	 console.log(resultContainer.innerHTML )
}
searchBtn.addEventListener('click',(e) => {
	e.preventDefault();
	showData()
})