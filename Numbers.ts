/**
 * The Number class acts as a wrapper and enables manipulation
 * of numeric literals as they were objects.
 */
console.log("TypeScript Number Properties: ");
console.log(
    "Maximum value that a number variable can hold: " + Number.MAX_VALUE,
);
console.log(
    "The least value that a number variable can hold: " + Number.MIN_VALUE,
);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);

/**
 * NaN
 */
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is " + month);
} else {
    console.log("Value Accepted..");
}

const n = new Number(2.3456);
console.log(n);
console.log(n.toFixed(2));
console.log(n.valueOf());
