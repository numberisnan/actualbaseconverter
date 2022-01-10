const fn = require("./helpers");

// tenToBase

test("Simple test for tenToBase", () => {
    expect(fn.tenToBase(10, 2)).toEqual([0,1,0,1]);
});

test("Test with larger numbers for tenToBase", () => {
    expect(fn.tenToBase(1200, 5)).toEqual([0,0,3,4,1]);
});

test("Large base and small number for tenToBase", () => {
    expect(fn.tenToBase(3, 20)).toEqual([3]);
});

test("Number equal to 0 for tenToBase", () => {
    expect(fn.tenToBase(0, 20)).toEqual([0]);
});

test("Large base and small number for tenToBase", () => {
    expect(fn.tenToBase(3, 20)).toEqual([3]);
});

test("0 base for tenToBase", () => {
    expect(fn.tenToBase(3, 0)).toEqual([]);
});

test("1 base for tenToBase", () => {
    expect(fn.tenToBase(3, 1)).toEqual([]);
});

test("strange behavior for base 10 for tenToBase", () => {
    expect(fn.tenToBase(1000000000000, 10)).toEqual([0,0,0,0,0,0,0,0,0,0,0,0,1]);
});

// baseToTen

const binten = [0,1,0,1]

test("Simple test for baseToTen", () => {
    expect(fn.baseToTen(binten, 2)).toEqual(10);
});

test("base 0 for baseToTen", () => {
    expect(fn.baseToTen(binten, 0)).toEqual(NaN);
});

test("base 1 for baseToTen", () => {
    expect(fn.baseToTen(binten, 1)).toEqual(NaN);
});

test("large base for baseToTen", () => {
    expect(fn.baseToTen(binten, 101)).toEqual(101**1 + 101**3);
});

test("large array for baseToTen", () => {
    expect(fn.baseToTen([0, 0, 0, 0, 0, 0, 0, 5], 8)).toEqual(5 * 8**7);
});

test("empty array for baseToTen", () => {
    expect(fn.baseToTen([], 8)).toEqual(NaN);
});