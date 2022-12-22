import {fizzbuzz} from "../problems/fizzbuzz";
import {expect} from "@jest/globals";

describe('Fizzbuzz', () => {
    it.each([
        [1, "1"],
        [2, "2"],
        [4, "4"],
    ])('convert integers to strings: %p to %p', (number: number, result: string) => {
        expect(fizzbuzz(number)).toBe(result);
    });

    it.each([
        [3, "Fizz"],
        [6, "Fizz"],
        [9, "Fizz"],
        [12, "Fizz"],
    ])('convert multiples of 3 to "Fizz": %p to %p', (number: number, result: string) => {
        expect(fizzbuzz(number)).toBe(result);
    });

    it.each([
        [5, "Buzz"],
        [10, "Buzz"],
    ])('convert multiples of 5 to "Buzz": %p to %p', (number: number, result: string) => {
        expect(fizzbuzz(number)).toBe(result);
    });

    it.each([
        [15, "FizzBuzz"],
        [30, "FizzBuzz"],
    ])('convert multiples of 3 and 5 to "FizzBuzz": %p to %p', (number: number, result: string) => {
        expect(fizzbuzz(number)).toBe(result);
    });
});
