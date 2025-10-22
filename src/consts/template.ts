import {nanoid} from 'nanoid';

export enum TIME {
	FIRST = '10:00',
	SECOND = '11:00',
	THIRD = '12:00',
	FOUR = '14:00',
}
export const timer = [TIME.FIRST, TIME.SECOND, TIME.THIRD, TIME.FOUR];

export enum DAYS {
	MONDAY = 'Monday',
	TUESDAY = 'Tuesday',
	WEDNESDAY = 'Wednesday',
	THURSDAY = 'Thursday',
	FRIDAY = 'Friday',
	SATURDAY = 'Saturday',
	SUNDAY = 'Sunday',
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
				client: '',
				workers: [],
			},
			{
				time: TIME.SECOND,
				client: '',
				workers: [],
			},
			{
				time: TIME.THIRD,
				client: '',
				workers: [],
			},
			{
				time: TIME.FOUR,
				client: '',
				workers: [],
			},
		],
	},
	{
		day: DAYS.TUESDAY,
		registrationTime: [
			{
				time: TIME.FIRST,
				client: '',
				workers: [],
			},
			{
				time: TIME.SECOND,
				client: '',
				workers: [],
			},
			{
				time: TIME.THIRD,
				client: '',
				workers: [],
			},
			{
				time: TIME.FOUR,
				client: '',
				workers: [],
			},
		],
	},
	{
		day: DAYS.WEDNESDAY,
		registrationTime: [
			{
				time: TIME.FIRST,
				client: '',
				workers: [],
			},
			{
				time: TIME.SECOND,
				client: '',
				workers: [],
			},
			{
				time: TIME.THIRD,
				client: '',
				workers: [],
			},
			{
				time: TIME.FOUR,
				client: '',
				workers: [],
			},
		],
	},
	{
		day: DAYS.THURSDAY,
		registrationTime: [
			{
				time: TIME.FIRST,
				client: '',
				workers: [],
			},
			{
				time: TIME.SECOND,
				client: '',
				workers: [],
			},
			{
				time: TIME.THIRD,
				client: '',
				workers: [],
			},
			{
				time: TIME.FOUR,
				client: '',
				workers: [],
			},
		],
	},
	{
		day: DAYS.FRIDAY,
		registrationTime: [
			{
				time: TIME.FIRST,
				client: '',
				workers: [],
			},
			{
				time: TIME.SECOND,
				client: '',
				workers: [],
			},
			{
				time: TIME.THIRD,
				client: '',
				workers: [],
			},
			{
				time: TIME.FOUR,
				client: '',
				workers: [],
			},
		],
	},
	{
		day: DAYS.SATURDAY,
		registrationTime: [
			{
				time: TIME.FIRST,
				client: '',
				workers: [],
			},
			{
				time: TIME.SECOND,
				client: '',
				workers: [],
			},
			{
				time: TIME.THIRD,
				client: '',
				workers: [],
			},
			{
				time: TIME.FOUR,
				client: '',
				workers: [],
			},
		],
	},
	{
		day: DAYS.SUNDAY,
		registrationTime: [
			{
				time: TIME.FIRST,
				client: '',
				workers: [],
			},
			{
				time: TIME.SECOND,
				client: '',
				workers: [],
			},
			{
				time: TIME.THIRD,
				client: '',
				workers: [],
			},
			{
				time: TIME.FOUR,
				client: '',
				workers: [],
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
