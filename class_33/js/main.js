/**
 * description:
 * A Price description app.
 * that will calculate vat,
 * discount amount and provide overview of the price.
 */

/**
 * This will get number from user.
 * @param {String} position
 * @returns
 */
const getNumber = (type) => {
  const number = Number(prompt(`Enter ${type} Amount.`));
  if (number || number === 0) {
    return number;
  }
  return false;
};

/**
 * Calculates percentage of any number.
 * @param {Number} price
 * @param {Number} percentage
 * @returns {Number} Percent amount.
 */
const calculatePercentage = (price, percentage) => (price * percentage) / 100;

/**
 * Calculate all price description
 * @param {Number} price
 * @param {Number} vat
 * @param {Number} discount
 * @returns {Array} with [price, vat, vatAmount, priceWithVat, discount, discountAmount, priceWithDiscount];
 */
const getPriceDescription = (price = 100, vat = 7, discount = 10) => {
  const vatAmount = calculatePercentage(price, vat);
  const priceWithVat = price + vatAmount;
  const discountAmount = calculatePercentage(priceWithVat, discount);
  const priceWithDiscount = priceWithVat - discountAmount;
  return [
    price,
    vat,
    vatAmount,
    priceWithVat,
    discount,
    discountAmount,
    priceWithDiscount,
  ];
};

/**
 * Prints price description.
 */
const printPriceDescription = () => {
  const getPrice = getNumber("price");
  const getVat = getNumber("VAT");
  const getDiscount = getNumber("discount");

  if (getPrice && getVat && getDiscount) {
    // Get all the number
    const allPrice = getPriceDescription(getPrice, getVat, getDiscount);
    const price = allPrice[0];
    const vat = allPrice[1];
    const vatAmount = allPrice[2];
    //   const priceWithVat = allPrice[3]
    const discount = allPrice[4];
    const discountAmount = allPrice[5];
    const priceWithDiscount = allPrice[6];
    console.table(`
    Price:${price} Tk
    ${vat}% vat: + ${vatAmount} Tk
    ${discount}% discount: -${discountAmount} Tk
    ---------------------------------------
    Total: ${priceWithDiscount} Tk
    `);
  } else {
    console.log("Please enter a valid number, Press ctrl + r to try again");
  }
};

printPriceDescription();
