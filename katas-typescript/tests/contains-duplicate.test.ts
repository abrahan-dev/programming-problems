import { containsDuplicate } from "../problems/contains-duplicate";
import { expect, test } from "@jest/globals";

test('Returns false if does not contain duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test('Returns true if does contain duplicates', () => {
    expect(containsDuplicate([1,2,3,1])).toBe(true);
});

test('Returns true if does contain duplicates', () => {
    expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});
