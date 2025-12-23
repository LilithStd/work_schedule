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
		background: 'bg-stone-700',
		textColor: 'text-stone-900',
		accentColor: 'bg-sky-400',
		container:{
			main:'bg-sky-300',
			sub: 'bg-blue-500',
			list:'bg-sky-200',
			input:'bg-sky-700'
		},
		element:{
			active:'bg-indigo-500',
			listItem:'bg-indigo-800',
			selectedItem:'bg-amber-700',
			selectedOption:'focus:bg-indigo-400',
			checkedOption:'data-[state=checked]:bg-sky-200',
			inactive:''
		},
		
		button: 'bg-sky-600',
		hover: 'hover:bg-sky-700',
	},
	DARK: {
		background: 'bg-stone-900',
		accentColor: 'bg-amber-600',
		textColor: 'text-orange-100',
		container:{
			main:'bg-gray-600',
			sub:'bg-stone-500',
			list:'bg-gray-500',
			input:'bg-gray-500',
		},	
		element:{
			active:'bg-amber-600',
			listItem:'bg-amber-600',
			selectedItem:'bg-amber-700',
			selectedOption:'focus:bg-amber-500',
			checkedOption:'data-[state=checked]:bg-amber-200',
			inactive:'bg-gray-400'
		},
		button: 'bg-amber-700',
		hover: 'hover:bg-amber-600',
	},
};

export const RegularExpression = {
	PERSONAL_CODE: /^[0-9]{6}-[0-9]{5}$/,
	NAME: /^[A-Za-zА-Яа-яЁёĒēĪīŪūĀāŠšŽžČčĢģĶķĻļŅņ\s'-]{1,}$/,
	SURNAME: /^[A-Za-zА-Яа-яЁёĒēĪīŪūĀāŠšŽžČčĢģĶķĻļŅņ\s'-]{1,}$/,
	CUSTOMER: /^[A-Za-zА-Яа-яЁёĒēĪīŪūĀāŠšŽžČčĢģĶķĻļŅņ\s'-]{1,}$/,	
}

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


export const CLIENT_FORM_TRANSLATED = {
	NAME:{
		LABEL:'name',
		TRANSLATE_LABEL: {
			EN:'Name',
			LV:'Vards',
			RU:'Имя',
		},
		PLACEHOLDER:{
			EN:'Enter name',
			LV:'Ievadiet vārdu',
			RU:'Введите имя',
		}
	},
	SURNAME:{
		LABEL:'surname',
		TRANSLATE_LABEL:{
			EN:'Surname',
			LV:'Uzvārds',
			RU:'Фамилия'
		},
		PLACEHOLDER:{
			EN:'Enter surname',
			LV:'Ievadiet uzvārdu',
			RU:'Введите фамилию',
		}
	},
	TIME:{
		LABEL:'time',
		TRANSLATE_LABEL:{
			EN:'Time',
			LV:'Laiks',
			RU:'Время',
		},
		PLACEHOLDER:{
			EN:'Select time',
			LV:'Izvēlieties laiku',
			RU:'Выберите время',
		},
		TRANSLATE_OPINION:{
			EN:['10:00','11:00','12:00','14:00','Another (need to specify)'],
			LV:['10:00','11:00','12:00','14:00','Vēl viens (jānorāda)'],
			RU:	['10:00','11:00','12:00','14:00','Другой (нужно указать)'],
		},
			
		PLACEHOLDER_ADDITIONAL:{
			EN:'Write additional time',
			LV:'Uzrakstiet papildu laiku',
			RU:'Напишите дополнительное время',
		}

	},
	PERSONAL_CODE:{
		LABEL:'personal_code',
		TRANSLATE_LABEL:{
			EN:'Personal Code',
			LV:'Personal Kods',
			RU:'Персональный код',
		},
		PLACEHOLDER:{
			EN:'Enter personal code',
			LV:'Ievadiet personāla kodu',
			RU:'Введите персональный код',
		},
		PLACEHOLDER_ADDITIONAL:'123456-7890'
	},
	TYPE_EXPERTISE:{
		LABEL:'type_expertise',
		TRANSLATE_LABEL:{
			EN:'Type expertise',
			LV:'Tipa zināšanas',
			RU:'Тип экспертизы',
		},
		TRANSLATE_OPINION:{
					EN:['Ambulatory','Stationary with security','Stationary','Another (need to specify)'],
					LV:['Ambulatorais','Stacionārs ar apsardzi','Stacionārs','Vēl viens (jānorāda)'],
					RU:['Амблуторный','Стационарная с охраной','Стацонарная','Другой (нужно указать)'],

		},
		PLACEHOLDER:{
			EN:'Select type expertise',
			LV:'Izvēlieties veida ekspertīzi',
			RU:'Выберите тип экспертизы',
		},
		PLACEHOLDER_ADDITIONAL:{
			EN:'Write additional type expertise',
			LV:'Uzrakstiet papildu veida ekspertīzi',
			RU:'Напишите дополнительный тип экспертизы',
		}

	},
	SUBTYPE_EXPERTISE:{
		LABEL:'subtype_expertise',
		TRANSLATE_LABEL:{
			EN:'Subtype expertise',
			LV:'Apakštips zināšanas',
			RU:'Вид экспертизы',
		},
		TRANSLATE_OPINION:{
			EN:['Psychiatric','Psychological','Comprehensive','Another (need to specify)'],
			RU:['Психиатрическая','Психологическая','Комплексная','Другая (нужно указать)'],
			LV:['Psihiatriskais','Psiholoģiskais','Kompleksa','Cits (jānorāda)'],
		},
		PLACEHOLDER_MAIN:{
			EN:'Select subtype expertise',
			LV:'Izvēlieties apakštipa ekspertīzi',
			RU:'Выберите вид экспертизы',
		},
		PLACEHOLDER_ADDITIONAL:{
			EN:'Write additional subtype expertise',
			LV:'Uzrakstiet papildu apakštipa ekspertīzi',
			RU:'Напишите дополнительный вид экспертизы',
		}
	},
	
	STATUS:{
		LABEL:'client_status',
		TRANSLATE_LABEL:{
					EN:'Client Status',
					LV:'Klients Statuss',
					RU:'Статус Клиента',
				},
		TRANSLATE_OPINION:{
					EN:['Suspected','Accused','Victim','Another (need to specify)'],
					LV:['Aizdomās turētais','Apsūdzētais','Cietušais','Cits (jānorāda)'],
					RU:['Подозреваемый','Обвиняемый','Потерпевший','Другой (нужно указать)']
				},
				PLACEHOLDER:{
					EN:'Select client status',
					LV:'Izvēlieties klienta statusu',
					RU:'Выберите статус клиента',
				},
				PLACEHOLDER_ADDITIONAL:{
					EN:'Write additional client status',
					LV:'Uzrakstiet papildu klienta statusu',
					RU:'Напишите дополнительный статус клиента',
				}
		
		
		
	},
	CUSTOMER:{
		LABEL:'customer',
		TRANSLATE_LABEL:{
			EN:'Customer',
			LV:'Klients',
			RU:'Заказчик'
		},
		PLACEHOLDER:{
			EN:'Enter customer',
			LV:'Ievadiet klientu',
			RU:'Введите заказчика',
		}
	},
	SUBMIT_BUTTON:{
		LABEL:'submit_button',
		TRANSLATE:{
			EN:'Submit',
			LV:'Iesniegt',
			RU:'Отправить',
		}
	},
	RESET_BUTTON:{
		LABEL:'reset_button',
		TRANSLATE:{
			EN:'Reset',
			LV:'Atiestatīt',
			RU:'Сбросить',
		}
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

export enum CLIENT_DATA_STATUS {
	NOTHING = 'NOTHING',
	CREATE_NEW = 'CREATE_NEW',
	EDIT_CURRENT = 'EDIT_CURRENT'
}

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
