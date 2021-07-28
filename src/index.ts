interface Case {
  value: any;
  callBack: Function;
}
class SwitchExpression {
  protected value: any;
  protected cases: Case[];
  protected defaultCase: Function;

  constructor(value: any) {
    this.cases = [];
    this.value = value;
    this.defaultCase = () => null;
  }

  case(value: any, callBack: Function): SwitchExpression {
    this.cases = [...this.cases, { value, callBack }];
    return this;
  }

  default(callBack: Function) {
    this.defaultCase = callBack;
    return this.run();
  }

  run() {
    for (const { value, callBack } of this.cases) {
      if (value === this.value) return callBack();
    }
    return this.defaultCase();
  }
}

export const Switch = (value: any) => new SwitchExpression(value);
