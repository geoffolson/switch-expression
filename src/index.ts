interface Switch {
  case(value: any, callBack: Function): Switch;
  default(callBack: Function): any;
  run(): any;
}

class MatchedCase implements Switch {
  private readonly callBack: Function;

  constructor(callBack: Function) {
    this.callBack = callBack;
  }

  case(value: any, callBack: Function) {
    return this;
  }

  default(callBack: Function) {
    return this.callBack();
  }

  run() {
    return this.callBack();
  }
}

class SwitchExpression implements Switch {
  private readonly value: any;

  constructor(value: any) {
    this.value = value;
  }

  case(value: any, callBack: Function): Switch {
    return value === this.value ? new MatchedCase(callBack) : this;
  }

  default(callBack: Function): any {
    return callBack();
  }

  run() {
    return null;
  }
}

export const Switch = (value: any) => new SwitchExpression(value);
