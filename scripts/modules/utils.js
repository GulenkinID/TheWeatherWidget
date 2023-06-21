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

	let getHours = date.getHours();
	let getMinutes = date.getMinutes();

	if (getHours < 10) {
		getHours = `0${getHours}`;
	};
	if (getMinutes < 10) {
		getMinutes = `0${getMinutes}`;
	};

	return { 
		getDayOfMonth, 
		getMonth,
		getDayOfWeek, 
		getYear, 
		getHours, 
		getMinutes,
	};

};