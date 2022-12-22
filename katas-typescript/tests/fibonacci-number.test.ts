import {fib} from "../problems/fibonacci-number";
import {expect, test} from "@jest/globals";

test('F(0) = 0', () => {
    expect(fib(0)).toBe(0);
});

test('F(1) = 1', () => {
    expect(fib(1)).toBe(1);
});

test('F(2) = F(1) + F(0) = 1 + 0 = 1', () => {
    expect(fib(2)).toBe(1);
});

test('F(3) = F(2) + F(1) = 1 + 1 = 2', () => {
    expect(fib(3)).toBe(2);
});

test('F(4) = F(3) + F(2) = 2 + 1 = 3', () => {
    expect(fib(4)).toBe(3);
});

test('F(10) = F(9) + F(8) ... = 55', () => {
    expect(fib(10)).toBe(55);
});