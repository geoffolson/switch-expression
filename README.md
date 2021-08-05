# Switch Expression

A simple function providing similar functionality to a switch statement using method chaining with a single composable expression.

## Usage

```typescript
import { Swtich } from "switch-expression";
// or if using commonjs:
// const { Switch } = require("switch-expression")

// returns "Hello World"
Switch<string, string>("hello")
  .case(0, () => "case 0")
  .case("test", () => "case test")
  .case("hello", () => "Hello World!")
  .default(() => "Found no match");

// When no match is found the default case is returned:
//   "Found no match"
Switch<string | number, React.ReactNode>("hEll0")
  .case(0, () => "case 0")
  .case("test", () => <p>case test</p>)
  .case("hello", () => "Hello World!")
  .default(() => "Found no match");

// returns <p>case test</p>
Switch<string | number, React.ReactNode>("test")
  .case(0, () => <p>case 0</p>)
  .case("test", () => <p>case test</p>)
  .case("hello", () => <p>Hello World!</p>)
  .run();

// When no match is found the run method will return null
Switch<string | number, React.ReactNode>("hEll0")
  .case(0, () => <p>case 0</p>)
  .case("test", () => <p>case test</p>)
  .case("hello", () => <p>Hello World!</p>)
  .run();
```
