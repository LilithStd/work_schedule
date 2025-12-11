import {nanoid} from 'nanoid';
import { APP_ROUTES } from './globalConsts';

export enum TIME {
	FIRST = '10:00',
	SECOND = '11:00',
	THIRD = '12:00',
	FOUR = '14:00',
}
export const timer = [TIME.FIRST, TIME.SECOND, TIME.THIRD, TIME.FOUR];

export const DAYS = {
	MONDAY: 'Monday',
	TUESDAY: 'Tuesday',
	WEDNESDAY: 'Wednesday',
	THURSDAY: 'Thursday',
	FRIDAY: 'Friday',
	SATURDAY: 'Saturday',
	SUNDAY: 'Sunday',
};

export const THEME_COLORS = {
	LIGHT: {
		background: 'bg-stone-800',
		textColor: 'text-white',
		container:{
			main:'bg-sky-300',
			sub: 'bg-blue-500',
			input:'bg-indigo-800'
		},
		button: 'bg-sky-600',
		hover: 'hover:bg-sky-700',
	},
	DARK: {
		background: 'bg-slate-300',
		textColor: 'text-black',
		container:{
			main:'bg-sky-300',
			sub:'bg-stone-300',
			input:'bg-blue-200',
		},
		button: 'bg-sky-500',
		hover: 'hover:bg-sky-600',
	},
};

export const APP_ROUTES_LABEL = {
	MAIN : {
		LABEL:{
			EN:'Main',
			RU:'Главная',
			LV:'Galvena'
		},
		PATH:APP_ROUTES.MAIN
	} ,
	SCHEDULE : {
		LABEL:{
			EN:'Schedule',
			RU:'Расписание',
			LV:'Grafiks'
		},
		PATH:APP_ROUTES.SCHEDULE
	},
	CLIENTS : {
		LABEL:{
			EN:'Clients',
			RU:'Клиенты',
			LV:'Klients'
		},
		PATH:APP_ROUTES.CLIENTS
	}
}

export const DAYS_TRANSLATED = {
	MONDAY: {
		label: DAYS.MONDAY,
		translate: {
			EN: 'Monday',
			LV: 'Pirmdiena',
			RU: 'Понедельник',
		},
	},
	TUESDAY: {
		label: DAYS.TUESDAY,
		translate: {
			EN: 'Tuesday',
			LV: 'Otrdiena',
			RU: 'Вторник',
		},
	},
	WEDNESDAY: {
		label: DAYS.WEDNESDAY,
		translate: {
			EN: 'Wednesday',
			LV: 'Trešdiena',
			RU: 'Среда',
		},
	},
	THURSDAY: {
		label: DAYS.THURSDAY,
		translate: {
			EN: 'Thursday',
			LV: 'Сetrdiena',
			RU: 'Четверг',
		},
	},
	FRIDAY: {
		label: DAYS.FRIDAY,
		translate: {
			EN: 'Friday',
			LV: 'Piektdiena',
			RU: 'Пятница',
		},
	},
	SATURDAY: {
		label: DAYS.SATURDAY,
		translate: {
			EN: 'Saturday',
			LV: 'Sestdiena',
			RU: 'Суббота',
		},
	},
	SUNDAY: {
		label: DAYS.SUNDAY,
		translate: {
			EN: 'Sunday',
			LV: 'Svētdiena',
			RU: 'Воскресенье',
		},
	},
};

export enum LANGUAGE {
	EN = 'EN',
	LV = 'LV',
	RU = 'RU',
}

export enum THEME {
	LIGHT = 'LIGHT',
	DARK = 'DARK',
}

export enum TYPE_WORKER_MODAL {
	NEW = 'NEW',
	EDIT = 'EDIT',
}

export const LANGUAGE_APP = [LANGUAGE.EN, LANGUAGE.LV, LANGUAGE.RU];

export enum UPDATE_REGISTRATION_DATA_STATUS {
	UPDATE = 'UPDATE',
	STATIC = 'STATIC',
}

export enum MODAL_TYPE {
	ADD_CLIENT = 'ADD_CLIENT',
	ADD_WORKER = 'ADD_WORKER',
}

export enum GET_REGISTRATION_TYPE {
	GET_CLIENT = 'GET_CLIENT',
	GET_WORKER = 'GET_WORKER',
}

export enum TYPE_WORKER_CELL {
	CREATE = 'CREATE',
	LIST = 'LIST',
	CELL = 'CELL',
}

export enum TYPE_EDIT_WORKER_DATA {
	NOTHING = 'NOTHING',
	COLOR = 'COLOR',
	NAME = 'NAME',
	SURNAME = 'SURNAME',
}

// export const registartionDataTemplate = [
// 	{
// 		day: DAYS.MONDAY,
// 		registrationTime: [
// 			{
// 				time: TIME.FIRST,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.SECOND,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.THIRD,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.FOUR,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		day: DAYS.TUESDAY,
// 		registrationTime: [
// 			{
// 				time: TIME.FIRST,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.SECOND,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.THIRD,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.FOUR,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		day: DAYS.WEDNESDAY,
// 		registrationTime: [
// 			{
// 				time: TIME.FIRST,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.SECOND,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.THIRD,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.FOUR,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		day: DAYS.THURSDAY,
// 		registrationTime: [
// 			{
// 				time: TIME.FIRST,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.SECOND,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.THIRD,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.FOUR,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		day: DAYS.FRIDAY,
// 		registrationTime: [
// 			{
// 				time: TIME.FIRST,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.SECOND,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.THIRD,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.FOUR,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		day: DAYS.SATURDAY,
// 		registrationTime: [
// 			{
// 				time: TIME.FIRST,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.SECOND,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.THIRD,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.FOUR,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		day: DAYS.SUNDAY,
// 		registrationTime: [
// 			{
// 				time: TIME.FIRST,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.SECOND,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.THIRD,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 			{
// 				time: TIME.FOUR,
// 				data: [
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 					{
// 						id: nanoid(),
// 						client: '',
// 						cells: [
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 							{
// 								cell: nanoid(),
// 								worker: {
// 									id: '',
// 									name: '',
// 								},
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// ];

// export const registartionDataTemplate2 = (currentLanguage: LANGUAGE) => {
// 	return [
// 		{
// 			day: DAYS.MONDAY[currentLanguage],
// 			registrationTime: [
// 				{
// 					time: TIME.FIRST,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.SECOND,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.THIRD,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.FOUR,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 			],
// 		},
// 		{
// 			day: DAYS.TUESDAY[currentLanguage],
// 			registrationTime: [
// 				{
// 					time: TIME.FIRST,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.SECOND,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.THIRD,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.FOUR,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 			],
// 		},
// 		{
// 			day: DAYS.WEDNESDAY[currentLanguage],
// 			registrationTime: [
// 				{
// 					time: TIME.FIRST,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.SECOND,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.THIRD,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.FOUR,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 			],
// 		},
// 		{
// 			day: DAYS.THURSDAY[currentLanguage],
// 			registrationTime: [
// 				{
// 					time: TIME.FIRST,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.SECOND,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.THIRD,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.FOUR,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 			],
// 		},
// 		{
// 			day: DAYS.FRIDAY[currentLanguage],
// 			registrationTime: [
// 				{
// 					time: TIME.FIRST,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.SECOND,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.THIRD,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.FOUR,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 			],
// 		},
// 		{
// 			day: DAYS.SATURDAY[currentLanguage],
// 			registrationTime: [
// 				{
// 					time: TIME.FIRST,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.SECOND,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.THIRD,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.FOUR,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 			],
// 		},
// 		{
// 			day: DAYS.SUNDAY[currentLanguage],
// 			registrationTime: [
// 				{
// 					time: TIME.FIRST,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.SECOND,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.THIRD,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 				{
// 					time: TIME.FOUR,
// 					data: [
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 						{
// 							id: nanoid(),
// 							client: '',
// 							cells: [
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 								{
// 									cell: nanoid(),
// 									worker: {
// 										id: '',
// 										name: '',
// 									},
// 								},
// 							],
// 						},
// 					],
// 				},
// 			],
// 		},
// 	];
// };
export const MonthsData = {
	JANUARY: {
		LABEL: 'January',
		NUMBER_MONTH:'01',
		TRANSLATE: {
			EN: 'January',
			LV: 'Janvāris',
			RU: 'Январь',
		},
	},
	FEBRUARY: {
		LABEL: 'February',
		NUMBER_MONTH:'02',
		TRANSLATE: {
			EN: 'February',
			LV: 'Februāris',
			RU: 'Февраль',
		},
	},
	MARCH: {
		LABEL: 'March',
		NUMBER_MONTH:'03',
		TRANSLATE: {
			EN: 'March',
			LV: 'Marts',
			RU: 'Март',
		},
	},
	APRIL: {
		LABEL: 'April',
		NUMBER_MONTH:'04',
		TRANSLATE: {
			EN: 'April',
			LV: 'Aprīlis',
			RU: 'Апрель',
		},
	},
	MAY: {
		LABEL: 'May',
		NUMBER_MONTH:'05',
		TRANSLATE: {
			EN: 'May',
			LV: 'Maijs',
			RU: 'Май',
		},
	},
	JUNE: {
		LABEL: 'June',
		NUMBER_MONTH:'06',
		TRANSLATE: {
			EN: 'June',
			LV: 'Jūnijs',
			RU: 'Июнь',
		},
	},
	JULY: {
		LABEL: 'July',
		NUMBER_MONTH:'07',
		TRANSLATE: {
			EN: 'July',
			LV: 'Jūlijs',
			RU: 'Июль',
		},
	},
	AUGUST: {
		LABEL: 'August',
		NUMBER_MONTH:'08',
		TRANSLATE: {
			EN: 'August',
			LV: 'Augusts',
			RU: 'Август',
		},
	},
	SEPTEMBER: {
		LABEL: 'September',
		NUMBER_MONTH:'09',
		TRANSLATE: {
			EN: 'September',
			LV: 'Septembris',
			RU: 'Сентябрь',
		},
	},
	OCTOBER: {
		LABEL: 'October',
		NUMBER_MONTH:'10',
		TRANSLATE: {
			EN: 'October',
			LV: 'Oktobris',
			RU: 'Октябрь',
		},
	},
	NOVEMBER: {
		LABEL: 'November',
		NUMBER_MONTH:'11',
		TRANSLATE: {
			EN: 'November',
			LV: 'Novembris',
			RU: 'Ноябрь',
		},
	},
	DECEMBER: {
		LABEL: 'December',
		NUMBER_MONTH:'12',
		TRANSLATE: {
			EN: 'December',
			LV: 'Decembris',
			RU: 'Декабрь',
		},
	},
};

export const MONTHS = [
	MonthsData.JANUARY,
	MonthsData.FEBRUARY,
	MonthsData.MARCH,
	MonthsData.APRIL,
	MonthsData.MAY,
	MonthsData.JUNE,
	MonthsData.JULY,
	MonthsData.AUGUST,
	MonthsData.SEPTEMBER,
	MonthsData.OCTOBER,
	MonthsData.NOVEMBER,
	MonthsData.DECEMBER
]

	


export const week = [
	DAYS.MONDAY,
	DAYS.TUESDAY,
	DAYS.WEDNESDAY,
	DAYS.THURSDAY,
	DAYS.FRIDAY,
	DAYS.SATURDAY,
	DAYS.SUNDAY,
];

export const weekTranslated = [
	DAYS_TRANSLATED.MONDAY,
	DAYS_TRANSLATED.TUESDAY,
	DAYS_TRANSLATED.WEDNESDAY,
	DAYS_TRANSLATED.THURSDAY,
	DAYS_TRANSLATED.FRIDAY,
	DAYS_TRANSLATED.SATURDAY,
	DAYS_TRANSLATED.SUNDAY,
];

export const workersTest = [
	{id: '1', name: 'Worker 1'},
	{id: '2', name: 'Worker 2'},
	{id: '3', name: 'Worker 3'},
];

export type WorkerTypes = {
	id: string;
	name: string;
};

export const workerListByDayTemplate = [
	{day: DAYS.MONDAY, workers: []},
	{day: DAYS.TUESDAY, workers: []},
	{day: DAYS.WEDNESDAY, workers: []},
	{day: DAYS.THURSDAY, workers: []},
	{day: DAYS.FRIDAY, workers: []},
	{day: DAYS.SATURDAY, workers: []},
	{day: DAYS.SUNDAY, workers: []},
];
