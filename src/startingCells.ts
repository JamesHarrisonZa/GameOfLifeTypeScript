export class StartingCells {

	public CellsHeight: number;
	public CellsWidth: number;
	public Cells: ReadonlyArray<ReadonlyArray<number>>;
	private _fillPercentage = 40; //Disable animations if you want to fill more

	constructor(windowHeight: number, windowWidth: number) {

		this.CellsHeight = this.getCellsHeight(windowHeight);
		this.CellsWidth = this.getCellsWidth(windowWidth);
		this.Cells = this.getStartingCells(this.CellsHeight, this.CellsWidth);
	}

	private getCellsHeight(windowHeight: number): number {

		return this.getCellUnits(windowHeight);
	}

	private getCellsWidth = (windowWidth: number) => {

		const windowMargin = 2;
		return this.getCellUnits(windowWidth) - windowMargin;
	}

	private getStartingCells(gridHeight: number, gridWidth: number): ReadonlyArray<ReadonlyArray<number>> {

		const cells = new Array<number>(gridHeight)
			.fill(null) //Cant apply map on undefined elements, need to set to null first
			.map((_, y) => new Array<number>(gridWidth)
				.fill(null)
				.map((__, x) => {
					return this.isInAreaToRandomise(gridHeight, gridWidth, y, x) ? this.randomBinary() : 0;
				})
			);

		return cells;
	}

	private getCellUnits(viewPortSize: number):number {

		const cellDimension = 10;
		const cellMargin = 2;
		return Math.floor(viewPortSize / cellDimension) - cellMargin;
	}

	private isInAreaToRandomise(gridHeight: number, gridWidth: number, y: number, x: number): boolean {

		return y < gridHeight * this._fillPercentage / 100 && x < gridWidth * this._fillPercentage / 100;
	}

	private randomBinary(): number {

		const max = 1;
		const min = 0;
		return Math.floor(Math.random() * (max - min + 1));
	}
}