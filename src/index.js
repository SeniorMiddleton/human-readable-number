module.exports = function toReadable (number) {
   const numToWord = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
    };

    if (numToWord.hasOwnProperty(number)) {
        return numToWord[number];
    } else if (number < 100) {
        const tens = Math.floor(number / 10) * 10;
        const ones = number % 10;
        return numToWord[tens] + (ones > 0 ? " " + numToWord[ones] : "");
    } else {
        const hundreds = Math.floor(number / 100);
        const remaining = number % 100;

        if (remaining === 0) {
            return numToWord[hundreds] + " hundred";
        } else {
            return numToWord[hundreds] + " hundred " + toReadable(remaining);
        }
    }
}
