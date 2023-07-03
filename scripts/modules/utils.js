const addZero = (n) => n < 10 ? `0${n}` : n;

export const getCurrentDateTime = () => {
 
	const moths = [
	'янв',
	'фев',
	'мар',
	'апр',
	'май',
	'июн',
	'июл',
	'авг',
	'сен',
	'окт',
	'ноя',
	'дек',
 ];

 const days = [
	'воскресенье',
	'понедельник',
	'вторник',
	'среда',
	'четверг',
	'пятница',
	'суббота',
 ];

	const date = new Date();
 
	const getDayOfMonth = date.getDate()
	const getMonth = moths[date.getMonth()];
	const getDayOfWeek = days[date.getDay()]
	const getYear = date.getFullYear();

	const getHours = addZero(date.getHours());
	const getMinutes = addZero(date.getMinutes());

	return { 
		getDayOfMonth, 
		getMonth,
		getDayOfWeek, 
		getYear, 
		getHours, 
		getMinutes,
	};

};

export const getWindDirection = (deg) => {
	const directions = [
		'&#8593;',//верх
		'&#8598;',//лево-верх
		'&#8592;',//лево
		'&#8601;',//лево-низ
		'&#8595;',//низ
		'&#8600;',//право-низ
		'&#8594;',//право
		'&#8599;',//право-верх
	];

	const i = Math.round(deg / 45) % 8;

	return directions[i];
};

export const calculateDewPoint = (temp, humidity) => {
	const a = 17.27;
	const b = 237.7;

	const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
	const dewPoint = (b * ft) / (a - ft);

	return dewPoint.toFixed(1);

};

export const convertPressure = (pressure) => {
	const mmHg = (pressure * 0.750063755419211).toFixed(2);
	return  mmHg;
}