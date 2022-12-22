// https://www.codurance.com/katalyst/fizzbuzz

export function fizzbuzz(number: number) {
    const isFizz = number % 3 === 0
    const isBuzz = number % 5 === 0

    if (isFizz && isBuzz) {
        return "FizzBuzz"
    } else if (isFizz) {
        return "Fizz"
    } else if (isBuzz) {
        return "Buzz"
    }
    return number.toString()
}
