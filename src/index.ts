interface Switch<A, B> {
  case(value: A, callBack: () => B): Switch<A, B>;
  default(callBack: () => B): B;
  run(): B | null;
}

class MatchedCase<A, B> implements Switch<A, B> {
  private readonly callBack: () => B;

  constructor(callBack: () => B) {
    this.callBack = callBack;
  }

  case(value: A, callBack: () => B) {
    return this;
  }

  default(callBack: () => B) {
    return this.callBack();
  }

  run() {
    return this.callBack();
  }
}

class SwitchExpression<A, B> implements Switch<A, B> {
  private readonly value: A;

  constructor(value: A) {
    this.value = value;
  }

  case(value: A, callBack: () => B): Switch<A, B> {
    return value === this.value ? new MatchedCase(callBack) : this;
  }

  default(callBack: () => B): B {
    return callBack();
  }

  run() {
    return null;
  }
}

export function Switch<A, B>(value: A) {
  return new SwitchExpression<A, B>(value);
}
