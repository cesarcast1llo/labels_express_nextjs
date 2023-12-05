import $ from '../../prices.json';

type Price = {
    crossPrice: string;
    newPrice: string;
};

function getPrice(weight: number, isUPS: boolean, upsGround: boolean, ups3Day: boolean, ups2Day: boolean): Price {
    let newPrice = '$0';
    let crossPrice = '';

    if (isUPS) {
        if (upsGround) {
            if (weight >= 1 && weight <= 15) {
                crossPrice = `${$.ups.ground.oneToFifteen.crossPrice}`;
                newPrice = `${$.ups.ground.oneToFifteen.newPrice}`;
            } else if (weight >= 16 && weight <= 45) {
                crossPrice = `${$.ups.ground.sixteenToFourteeFive.crossPrice}`;
                newPrice = `${$.ups.ground.sixteenToFourteeFive.newPrice}`;
            } else if (weight >= 46 && weight <= 70) {
                crossPrice = `${$.ups.ground.fourteeSixToSeventee.crossPrice}`;
                newPrice = `${$.ups.ground.fourteeSixToSeventee.newPrice}`;
            } else if (weight >= 71 && weight <= 90) {
                crossPrice = `${$.ups.ground.seventyOneAndUp.crossPrice}`;
                newPrice = `${$.ups.ground.seventyOneAndUp.newPrice}`;
            } else if (weight >= 91 && weight <= 120) {
                crossPrice = `${$.ups.ground.ninetyOneToOneTwente.crossPrice}`;
                newPrice = `${$.ups.ground.ninetyOneToOneTwente.newPrice}`;
            } else if (weight >= 121) {
                crossPrice = `${$.ups.error.crossPrice}`;
                newPrice = `${$.ups.error.newPrice}`;
            }
        }
        if (ups3Day) {
            if (weight >= 1 && weight <= 15) {
                crossPrice = `${$.ups.ground.oneToFifteen.crossPrice}`;
                newPrice = `${$.ups.ground.oneToFifteen.newPrice}`;
            }
        }
        if (ups2Day) {
        }
    } else {
        if (weight >= 1 && weight <= 15) {
            crossPrice = `${$.usps.priority.oneToFifteen.crossPrice}`;
            newPrice = `${$.usps.priority.oneToFifteen.newPrice}`;
        } else if (weight >= 16 && weight <= 45) {
            crossPrice = `${$.usps.priority.sixteenToFourteeFive.crossPrice}`;
            newPrice = `${$.usps.priority.sixteenToFourteeFive.newPrice}`;
        } else if (weight >= 46 && weight <= 70) {
            crossPrice = `${$.usps.priority.fourteeSixToSeventee.crossPrice}`;
            newPrice = `${$.usps.priority.fourteeSixToSeventee.newPrice}`;
        } else if (weight >= 71 && weight <= 90) {
            crossPrice = `${$.usps.priority.seventyOneAndUp.crossPrice}`;
            newPrice = `${$.usps.priority.seventyOneAndUp.newPrice}`;
        } else if (weight >= 71) {
            crossPrice = `${$.usps.priority.error.crossPrice}`;
            newPrice = `${$.usps.priority.error.newPrice}`;
        }
    }

    return { crossPrice, newPrice };
}

export default getPrice;
