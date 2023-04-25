import $ from '../../prices.json';

type Price = {
    crossPrice: string;
    newPrice: string;
};

function getPrice(weight: number, isUPS: boolean): Price {
    let newPrice = '$0';
    let crossPrice = '';

    if (isUPS) {
        if (weight >= 1 && weight <= 8) {
            crossPrice = `${$.ups.oneToEight.crossPrice}`;
            newPrice = `${$.ups.oneToEight.newPrice}`;
        } else if (weight >= 10 && weight <= 45) {
            crossPrice = `${$.ups.tenToFourFive.crossPrice}`;
            newPrice = `${$.ups.tenToFourFive.newPrice}`;
        } else if (weight >= 46 && weight <= 70) {
            crossPrice = `${$.ups.fourSixSevenZero.crossPrice}`;
            newPrice = `${$.ups.fourSixSevenZero.newPrice}`;
        } else if (weight >= 71 && weight <= 120) {
            crossPrice = `${$.ups.sevenTenAbove.crossPrice}`;
            newPrice = `${$.ups.sevenTenAbove.newPrice}`;
        } else if (weight >= 121) {
            crossPrice = `${$.ups.oneTwoOneAbove.crossPrice}`;
            newPrice = `${$.ups.oneTwoOneAbove.newPrice}`;
        }
    } else {
        if (weight >= 1 && weight <= 8) {
            crossPrice = `${$.usps.oneToEight.crossPrice}`;
            newPrice = `${$.usps.oneToEight.newPrice}`;
        } else if (weight >= 10 && weight <= 45) {
            crossPrice = `${$.usps.tenToFourFive.crossPrice}`;
            newPrice = `${$.usps.tenToFourFive.newPrice}`;
        } else if (weight >= 46 && weight <= 70) {
            crossPrice = `${$.usps.fourSixSevenZero.crossPrice}`;
            newPrice = `${$.usps.fourSixSevenZero.newPrice}`;
        } else if (weight >= 71) {
            crossPrice = `${$.usps.sevenTenAbove.crossPrice}`;
            newPrice = `${$.usps.sevenTenAbove.newPrice}`;
        }
    }

    return { crossPrice, newPrice };
}

export default getPrice;
