# Switch Expression
A simple function providing similar functionality to a switch statement using method chaining with a single composable expression. 

## Usage
```typescript
import { Swtich } from "switch-expression";

// returns "Hello World"
Switch("hello")
  .case(0, () => "case 0")
  .case("test", () => "case test")
  .case("hello", () => "Hello World!")
  .default(() => "Found no match")

// When no match is found the default case is returned:
//   "Found no match"
Switch("hEll0")
  .case(0, () => "case 0")
  .case("test", () => "case test")
  .case("hello", () => "Hello World!")
  .default(() => "Found no match")

// When no match is found the run method will return null
const result3 = Switch("hEll0")
  .case(0, () => <p>case 0</p>)
  .case("test", () => <p>case test</p>)
  .case("hello", () => <p>Hello World!</p>)
  .run()

// returns <p>case test</p>
const result4 = Switch("test")
  .case(0, () => <p>case 0</p>)
  .case("test", () => <p>case test</p>)
  .case("hello", () => <p>Hello World!</p>)
  .run()

```

## TODO
* Add tests
