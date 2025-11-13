import {nanoid} from 'nanoid';

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

export const registartionDataTemplate = [
	{
		day: DAYS.MONDAY,
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
		day: DAYS.TUESDAY,
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
		day: DAYS.WEDNESDAY,
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
		day: DAYS.THURSDAY,
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
		day: DAYS.FRIDAY,
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
		day: DAYS.SATURDAY,
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
		day: DAYS.SUNDAY,
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
