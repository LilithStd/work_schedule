import {nanoid} from 'nanoid';

export enum TIME {
	FIRST = '10:00',
	SECOND = '11:00',
	THIRD = '12:00',
	FOUR = '14:00',
}
export const timer = [TIME.FIRST, TIME.SECOND, TIME.THIRD, TIME.FOUR];

// export const DAYS = {
// 	MONDAY: 'Monday',
// 	TUESDAY: 'Tuesday',
// 	WEDNESDAY: 'Wednesday',
// 	THURSDAY: 'Thursday',
// 	FRIDAY: 'Friday',
// 	SATURDAY: 'Saturday',
// 	SUNDAY: 'Sunday',
// };

export const DAYS = {
	MONDAY: {
		EN: 'Monday',
		LV: 'Pirmdiena',
		RU: 'Понедельник',
	},
	TUESDAY: {
		EN: 'Tuesday',
		LV: 'Otrdiena',
		RU: 'Вторник',
	},
	WEDNESDAY: {
		EN: 'Wednesday',
		LV: 'Trešdiena',
		RU: 'Среда',
	},
	THURSDAY: {
		EN: 'Thursday',
		LV: 'Сetrdiena',
		RU: 'Четверг',
	},
	FRIDAY: {
		EN: 'Friday',
		LV: 'Piektdiena',
		RU: 'Пятница',
	},
	SATURDAY: {
		EN: 'Saturday',
		LV: 'Sestdiena',
		RU: 'Суббота',
	},
	SUNDAY: {
		EN: 'Sunday',
		LV: 'Svētdiena',
		RU: 'Воскресенье',
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

export const registartionDataTemplate = [
	{
		day: DAYS.MONDAY.EN,
		registrationTime: [
			{
				time: TIME.FIRST,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.SECOND,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.THIRD,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.FOUR,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
		],
	},
	{
		day: DAYS.TUESDAY.EN,
		registrationTime: [
			{
				time: TIME.FIRST,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.SECOND,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.THIRD,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.FOUR,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
		],
	},
	{
		day: DAYS.WEDNESDAY.EN,
		registrationTime: [
			{
				time: TIME.FIRST,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.SECOND,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.THIRD,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.FOUR,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
		],
	},
	{
		day: DAYS.THURSDAY.EN,
		registrationTime: [
			{
				time: TIME.FIRST,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.SECOND,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.THIRD,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.FOUR,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
		],
	},
	{
		day: DAYS.FRIDAY.EN,
		registrationTime: [
			{
				time: TIME.FIRST,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.SECOND,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.THIRD,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.FOUR,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
		],
	},
	{
		day: DAYS.SATURDAY.EN,
		registrationTime: [
			{
				time: TIME.FIRST,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.SECOND,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.THIRD,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.FOUR,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
		],
	},
	{
		day: DAYS.SUNDAY.EN,
		registrationTime: [
			{
				time: TIME.FIRST,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.SECOND,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.THIRD,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
			{
				time: TIME.FOUR,
				data: [
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
					{
						id: nanoid(),
						client: '',
						cells: [
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
							{
								cell: nanoid(),
								worker: {
									id: '',
									name: '',
								},
							},
						],
					},
				],
			},
		],
	},
];

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

export const week = (currentLanguage: LANGUAGE) => [
	DAYS.MONDAY[currentLanguage],
	DAYS.TUESDAY[currentLanguage],
	DAYS.WEDNESDAY[currentLanguage],
	DAYS.THURSDAY[currentLanguage],
	DAYS.FRIDAY[currentLanguage],
	DAYS.SATURDAY[currentLanguage],
	DAYS.SUNDAY[currentLanguage],
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
	{day: DAYS.MONDAY.EN, workers: []},
	{day: DAYS.TUESDAY.EN, workers: []},
	{day: DAYS.WEDNESDAY.EN, workers: []},
	{day: DAYS.THURSDAY.EN, workers: []},
	{day: DAYS.FRIDAY.EN, workers: []},
	{day: DAYS.SATURDAY.EN, workers: []},
	{day: DAYS.SUNDAY.EN, workers: []},
];
