const API_KEY = 'AIzaSyB_d-_00g-gvRJsdHCZlZjHW_eC2YFa5Sc';

async function generateData(prompt) {
console.log('geh')
	const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${API_KEY}`
	const requestOptions = {
		'method': 'POST',
		'headers': {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"contents": [{
				"parts": [{ "text": prompt },
                    ...(image.userData.file.data ? [{ inline_data: image.userData.file }] : [])]
        }]
		})
	};

	try {


		const response = await fetch(API_URL, requestOptions);
			

		if (!response.ok) throw new Error(response.statusText);
		const data = await response.json();
		const answer = data.candidates[0].content.parts[0].text
		return answer.replace(/^###\s*(.+)$/gm, "<h3>$1</h3>");

	} catch (e) {
		c
		return '0 Sorry! Some error occurred!'
	};
}

//#########image data ########


const image = {
	present: false,
	src: null,
	userData: {
		message: null,
		file: {
			data: null,
			mime_type: null
		}
	}
}


//file handeler
function handleFile(file) {
	if (!file || !file.type.startsWith('image/')) return;
	const reader = new FileReader();
	reader.onload = function(e) {
		const base64String = e.target.result.split(',')[1];
		image.present = true;
		image.src = e.target.result;
		image.userData.file.data = base64String;
		image.userData.file.mime_type = file.type;
		return base64String;
	}
	reader.readAsDataURL(file);
}

export {generateData};
