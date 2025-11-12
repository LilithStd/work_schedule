import {LANGUAGE, timer, week} from '@/consts/template';
import {ObjectTypes} from './types';
import {nanoid} from 'nanoid';

export const setCells = (
	numberCells: number,
	fillComponent?: React.JSX.Element,
) => {
	const fillComponentElement = fillComponent ? fillComponent : 0;
	return new Array(numberCells).fill(fillComponentElement);
};

export const setColors = (color: string, valueColorStrength: string) => {
	return `bg-${color}-${valueColorStrength}`;
};

export const translateObjectValues = (
	currentLanguage: LANGUAGE,
	objectItems: ObjectTypes,
): string[] => {
	return Object.values(objectItems).map((item) => item[currentLanguage]);
};

export const createRegistrationDataTemplate = () => {
	const registartionData = week.map((day) => {
		const registrationTime = timer.map((time) => {
			const cell = {
				cell: nanoid(),
				worker: {
					id: '',
					name: '',
					surname: '',
					additionalProperties: {color: ''},
				},
			};

			const registartionBlock = {
				id: nanoid(),
				client: '',
				cells: [cell],
			};

			return {
				time,
				data: [registartionBlock],
			};
		});

		return {
			day,
			registrationTime,
		};
	});

	return registartionData;
};
