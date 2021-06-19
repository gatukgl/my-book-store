const fizzbuzz = require("./index");

describe("Fizz Buzz", () => {
  test("input 3 should return fizz", () => {
    const actual = fizzbuzz(3);

    expect(actual).toEqual("fizz");
  });

  test("input 6 should return fizz", () => {
    const actual = fizzbuzz(6);

    expect(actual).toEqual("fizz");
  });

  test("input 5 should return buzz", () => {
    const actual = fizzbuzz(5);

    expect(actual).toEqual("buzz");
  });

  test("input 10 should return buzz", () => {
    const actual = fizzbuzz(10);

    expect(actual).toEqual("buzz");
  });

  test("input 15 should return fizzbuzz", () => {
    const actual = fizzbuzz(15);

    expect(actual).toEqual("fizzbuzz");
  });

  test("input 1 should return itself", () => {
    const actual = fizzbuzz(1);

    expect(actual).toEqual(1);
  });

  test("input 2 should return itself", () => {
    const actual = fizzbuzz(2);

    expect(actual).toEqual(2);
  });
});
