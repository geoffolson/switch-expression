import { Switch } from "../src";

test('Matching the string "hello"', () => {
  expect(
    Switch<string, string>("hello")
      .case("O", () => "case 0")
      .case("test", () => "case test")
      .case("hello", () => "Hello World!")
      .default(() => "Found no match")
  ).toBe("Hello World!");
});

test("When a match isn't found and the default case is executed", () => {
  expect(
    Switch<string | number, string>("hEll0")
      .case(0, () => "case 0")
      .case("hello", () => "Hello World!")
      .default(() => "Found no match")
  ).toBe("Found no match");
});

test('return "case test"', () => {
  expect(
    Switch<string | number, string>("test")
      .case(0, () => "case 0")
      .case("test", () => "case test")
      .case("hello", () => "Hello World!")
      .run()
  ).toBe("case test");
});

test("When no match is found the run method will return null", () => {
  expect(
    Switch<string | number, string>("hEll0")
      .case(0, () => "case 0")
      .case("test", () => "case test")
      .case("hello", () => "Hello World!")
      .run()
  ).toBe(null);
});
