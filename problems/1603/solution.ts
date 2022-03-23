interface ParkingLotType {
    big: number;
    medium: number;
    small: number;
};
class ParkingSystem {

    parkingLots: ParkingLotType = { big: 0, medium: 0, small: 0 };
    parkingID: readonly string[] = ["", "big", "medium", "small"];

    constructor(big: number, medium: number, small: number) {
        this.parkingLots.big = big;
        this.parkingLots.medium = medium;
        this.parkingLots.small = small;

    }


    addCar(carType: number): boolean {
        const id = this.parkingID[carType]
        const rem = this.parkingLots[id];
        if (rem > 0) {
            this.parkingLots[id] -= 1;
            return true;
        }
        else {
            return false;
        }
    }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */