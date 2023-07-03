const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'fc7b5331c3f8e2609b38f39f78a50961';

export const fetchWeather = async (city) => {
	try {
		const response = await fetch(`${API_URL}weather?units=metric&q=${city}&appid=${API_KEY}&lang=ru`);
		if (!response.ok) {
			throw new Error('Ошибка запроса');
		}
		const data = await response.json();
		return { success: true, data}
	} catch (err) {
		return { success: false, err}
	}
};

export const fetchForecast = async (city) => {
	try {
		const response = await fetch(`${API_URL}forecast?units=metric&q=${city}&appid=${API_KEY}&lang=ru`);
		if (!response.ok) {
			throw new Error('Ошибка запроса');
		}
		const data = await response.json();
		return { success: true, data}
	} catch (err) {
		return { success: false, err}
	}
}



