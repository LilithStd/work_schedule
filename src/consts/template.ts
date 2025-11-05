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

export enum LANGUAGE {
	EN = 'EN',
	LV = 'LV',
	RU = 'RU',
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

export const week = [
	DAYS.MONDAY,
	DAYS.TUESDAY,
	DAYS.WEDNESDAY,
	DAYS.THURSDAY,
	DAYS.FRIDAY,
	DAYS.SATURDAY,
	DAYS.SUNDAY,
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
