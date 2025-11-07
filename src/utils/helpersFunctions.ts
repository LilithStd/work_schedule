import {LANGUAGE} from '@/consts/template';

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
