export const setCells = (
	numberCells: number,
	fillComponent?: React.JSX.Element,
) => {
	const fillComponentElement = fillComponent ? fillComponent : 0;
	return new Array(numberCells).fill(fillComponentElement);
};
