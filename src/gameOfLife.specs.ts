import {GameOfLife} from './gameOfLife';

describe('GameOfLife', () => {

	const gameOfLife = new GameOfLife();
	const startingCells = [[0,0],[0,0]];

	it('Should get next generation', () => {

		const expectedResult = [[0,0],[0,0]];
		const nextGeneration = gameOfLife.getNextGeneration(startingCells);
		expect(nextGeneration).toEqual(expectedResult);
	});
});