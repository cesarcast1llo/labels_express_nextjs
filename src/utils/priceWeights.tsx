type Price = {
    crossPrice: string;
    newPrice: string;
};

function getPrice(weight: number, isUPS: boolean): Price {
    let newPrice = '0';
    let crossPrice = '';
    console.log(`${isUPS} inside`);
    if (isUPS) {
        if (weight >= 1 && weight <= 15) {
            crossPrice = `<s>$14</s>`;
            newPrice = `$8`;
        } else if (weight >= 15 && weight <= 60) {
            crossPrice = `<s>$17</s>`;
            newPrice = `$9`;
        } else if (weight >= 61 && weight <= 120) {
            crossPrice = `<s>$22</s>`;
            newPrice = `$11`;
        } else if (weight >= 121) {
            crossPrice = ``;
            newPrice = `Price not available`;
        }
    } else {
        if (weight >= 1 && weight <= 8) {
            crossPrice = `<s>$11</s>`;
            newPrice = `$5`;
        } else if (weight >= 9 && weight <= 70) {
            crossPrice = `<s>$22</s>`;
            newPrice = `$10`;
        }
    }

    return { crossPrice, newPrice };
}

export default getPrice;
