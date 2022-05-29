import { styled } from 'linaria/react';

const namedRows = [
	'[col-1] minmax(0, 1fr)',
	'[col-2] minmax(0, 1fr)',
	'[col-3] minmax(0, 1fr)',
	'[col-4] minmax(0, 1fr)',
	'[col-5] minmax(0, 1fr)',
	'[col-6] minmax(0, 1fr)',
	'[col-7] minmax(0, 1fr)',
	'[col-8] minmax(0, 1fr)',
	'[col-9] minmax(0, 1fr)',
	'[col-10] minmax(0, 1fr)',
	'[col-11] minmax(0, 1fr)',
	'[col-12] minmax(0, 1fr)',
	'[col-13]',
].join(' ');

export const GridContainer = styled.div`
	display: grid;
	grid-auto-rows: min-content;
	align-items: start;
	grid-column-gap: 0.5rem;
	grid-template-columns: ${namedRows};
`;

type GridColumnIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

const createSubGridIndexCols = (
	start: GridColumnIndex,
	end: GridColumnIndex
) => {
	const total = end - start;
	const cols = Array(total + 1)
		.fill(null)
		.map((_, i) => {
			const colNumber = start + i;
			return i + 1 <= total
				? `[col-${colNumber}] minmax(0, 1fr)`
				: `[col-${colNumber}]`;
		})
		.join(' ');
	return cols;
};

export type GridItemProps = {
	start: GridColumnIndex;
	end: GridColumnIndex;
	subGrid?: boolean;
};

const GridItem = styled.div<GridItemProps>`
	grid-column: ${({ start, end }) => `col-${start} / col-${end}`};
	display: ${({ subGrid }) => (subGrid ? 'grid' : 'block')};
	grid-column-gap: 0.5rem;
	grid-template-columns: ${({ start, end }) =>
		createSubGridIndexCols(start, end)};
`;

export const Grid = {
	Container: GridContainer,
	Item: GridItem,
};

export default Grid;
