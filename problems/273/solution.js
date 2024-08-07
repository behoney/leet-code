// NOTE:: too complex... 38min 46sec

/**
 * @param {number} num
 * @return {string}
 */

const postfix = {
    10: "Billion",
    9: "Hundred",
    7: "Million",
    6: "Hundred",
    4: "Thousand",
    3: "Hundred"
}

const tens = {
    1: "Ten",
    2: "Twenty",
    3: "Thirty",
    4: "Forty",
    5: "Fifty",
    6: "Sixty",
    7: "Seventy",
    8: "Eighty",
    9: "Ninety"
}

const ones = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
}

const teens = {
    "10": "Ten",
    "11": "Eleven",
    "12": "Twelve",
    "13": "Thirteen",
    "14": "Fourteen",
    "15": "Fifteen",
    "16": "Sixteen",
    "17": "Seventeen",
    "18": "Eighteen",
    "19": "Nineteen",
}

var numberToWords = function(num) {
    if(!num) return "Zero"
    
    const arr = new Array(12).fill("0")
    const digits = num.toString().split("").reverse()
    for(let i = 0; i < digits.length; i++){
        arr[arr.length - 1 - i] = digits[i]
    }

    const results = []
    let digitFlag = false

    for(let i=0;i<arr.length; i++){
        if(i%3 === 0) digitFlag = false
        
        const wordset = (arr.length - i)%3 === 2 ? tens : ones

        if( wordset === tens && arr[i] === "1") {
            results.push(teens[arr[i]+arr[i+1]])
            i++
            digitFlag = true
        }
        else results.push(wordset[arr[i]])

        if(wordset[arr[i]]) digitFlag = true    
        if(digitFlag && postfix[arr.length - i]) results.push(postfix[arr.length - i])
    }

    return results.filter(Boolean).join(" ")
};