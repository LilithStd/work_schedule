export const timer = ['10:00', '11:00', '12:00', '14:00'];
export enum DAYS {
	MONDAY = 'Monday',
	TUESDAY = 'Tuesday',
	WEDNESDAY = 'Wednesday',
	THURSDAY = 'Thursday',
	FRIDAY = 'Friday',
	SATURDAY = 'Saturday',
	SUNDAY = 'Sunday',
}
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
