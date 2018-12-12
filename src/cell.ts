export class Cell {
    private cell: HTMLElement;
    private isShip: boolean;
    private wasClicked: boolean;

    constructor(isShip:boolean) {
        this.isShip = isShip;
        this.wasClicked = false;
        this.cell = document.createElement('button');
        this.cell.style.height = '50px';
        this.cell.style.width = '50px';
        this.cell.onmouseover = () => this.select();
        this.cell.onmouseout = () => this.disselect();
        this.cell.onclick = () => this.fire();
        this.cell.style.backgroundColor = 'white';
    }

    select() {
        if (!this.wasClicked) {
            this.cell.style.backgroundColor = 'green';
        }
    }

    disselect() {
        if (!this.wasClicked) {
            this.cell.style.backgroundColor = 'white';
        }
    }

    fire() {
        this.wasClicked = true;

        if (this.isShip) {
            this.cell.style.backgroundColor = 'grey';
            document.write("WINNER, WINNER, CHICKEN DINNER!<br />You sunk the ship!");
        } else {
            this.cell.style.backgroundColor = 'blue';
        }
    }
}