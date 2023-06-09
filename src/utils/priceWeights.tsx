import $ from '../../prices.json';

type Price = {
    crossPrice: string;
    newPrice: string;
};

function getPrice(weight: number, isUPS: boolean, ozOrLbs: string): Price {
    let newPrice = '$0';
    let crossPrice = '';

    if (isUPS) {
        if (weight >= 1 && weight <= 8) {
            crossPrice = `${$.ups.oneToEight.crossPrice}`;
            newPrice = `${$.ups.oneToEight.newPrice}`;
        } else if (weight >= 9 && weight <= 30) {
            crossPrice = `${$.ups.nineToThirty.crossPrice}`;
            newPrice = `${$.ups.nineToThirty.newPrice}`;
        } else if (weight >= 31 && weight <= 50) {
            crossPrice = `${$.ups.threeOneFifty.crossPrice}`;
            newPrice = `${$.ups.threeOneFifty.newPrice}`;
        } else if (weight >= 51 && weight <= 70) {
            crossPrice = `${$.ups.fiftyOneSeventy.crossPrice}`;
            newPrice = `${$.ups.fiftyOneSeventy.newPrice}`;
        } else if (weight >= 71 && weight <= 120) {
            crossPrice = `${$.ups.seventyOneTwoOne.crossPrice}`;
            newPrice = `${$.ups.seventyOneTwoOne.newPrice}`;
        } else if (weight >= 121) {
            crossPrice = `${$.ups.error.crossPrice}`;
            newPrice = `${$.ups.error.newPrice}`;
        }
    } else {
        if (weight >= 1 && weight <= 8) {
            if (ozOrLbs === 'oz') {
                crossPrice = `${$.usps.uspsFirstClass.crossPrice}`;
                newPrice = `${$.usps.uspsFirstClass.newPrice}`;
            } else {
                crossPrice = `${$.usps.oneToEight.crossPrice}`;
                newPrice = `${$.usps.oneToEight.newPrice}`;
            }
        } else if (weight >= 9 && weight <= 30) {
            if (weight >= 9 && weight <= 15) {
                if (ozOrLbs === 'oz') {
                    crossPrice = `${$.usps.uspsFirstClass.crossPrice}`;
                    newPrice = `${$.usps.uspsFirstClass.newPrice}`;
                } else {
                    crossPrice = `${$.usps.nineToThirty.crossPrice}`;
                    newPrice = `${$.usps.nineToThirty.newPrice}`;
                }
            } else {
                if (ozOrLbs === 'oz') {
                    crossPrice = `${$.usps.error.crossPrice}`;
                    newPrice = `${$.usps.error.newPrice}`;
                } else {
                    crossPrice = `${$.usps.nineToThirty.crossPrice}`;
                    newPrice = `${$.usps.nineToThirty.newPrice}`;
                }
            }
        } else if (weight >= 31 && weight <= 50) {
            if (ozOrLbs === 'oz') {
                crossPrice = `${$.usps.error.crossPrice}`;
                newPrice = `${$.usps.error.newPrice}`;
            } else {
                crossPrice = `${$.usps.threeOneFifty.crossPrice}`;
                newPrice = `${$.usps.threeOneFifty.newPrice}`;
            }
        } else if (weight >= 51 && weight <= 70) {
            if (ozOrLbs === 'oz') {
                crossPrice = `${$.usps.error.crossPrice}`;
                newPrice = `${$.usps.error.newPrice}`;
            } else {
                crossPrice = `${$.usps.fiftyOneSeventy.crossPrice}`;
                newPrice = `${$.usps.fiftyOneSeventy.newPrice}`;
            }
        } else if (weight >= 71) {
            crossPrice = `${$.usps.error.crossPrice}`;
            newPrice = `${$.usps.error.newPrice}`;
        }
    }

    return { crossPrice, newPrice };
}

export default getPrice;
