import {LANGUAGE} from '@/consts/template';
import {ObjectTypes} from './types';

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
