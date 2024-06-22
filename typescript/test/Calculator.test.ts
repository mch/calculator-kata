import { describe, test } from "@jest/globals";
import * as Calculator from "../src/Calculator"
import * as O from "fp-ts/Option";
import * as E from "fp-ts/Either";
import {
  CalculatorDigit,
  CalculatorDisplay,
  CalculatorNumber,
  CalculatorOperation,
  CalculatorServices,
  CalculatorState, MathOperationResult
} from "../src/Calculator";
import {Option} from "fp-ts/Option";


// these tests must be passing in order for the calculator to work

describe("Calculator tests", () => {

  test("updateDisplayFromPendingOp, should return empty given display empty and no pending Op", () => {
    const services: CalculatorServices = {
      doMathOperation(operation: CalculatorOperation, a: CalculatorNumber, b: CalculatorNumber): MathOperationResult {
        return E.of(0);
      }, getDisplayNumber(display: CalculatorDisplay): Option<CalculatorNumber> {
        return O.none;
      }, initState(): CalculatorState {
        return {display: "", pendingOperation: O.none};
      }, setDisplayNumber(number: CalculatorNumber): CalculatorDisplay {
        return "";
      }, updateDisplayFromDigit(digit: CalculatorDigit, display: CalculatorDisplay): CalculatorDisplay {
        return "";
      }
    }

    let calculatorState = Calculator.updateDisplayFromPendingOp(services,
        {display: "", pendingOperation: O.none});

    expect(calculatorState.display).toBe("");
    expect(calculatorState.pendingOperation).toBe(O.none);
  })

  test("when I press the [1] button, I expect [     1] to appear on the screen of the calculator", () => {
    // the calculator gets an input of 1,
    // assert that the calculator returns 1 to show on the screen
  })

  test("when I press the [2] button, I expect [     2] to appear on the screen of the calculator", () => {
  })

  test("when I press the [1][=] buttons, I expect [     1] to appear on the screen of the calculator", () => {
  })

  test("when I press the [1][+] buttons, I expect [     +] to appear on the screen of the calculator", () => {

  })

  test("when I press the [1][+][2] buttons, I expect [     2] to appear on the screen of the calculator", () => {
  })

  test("when I press the [1][+][2][=] buttons, I expect [     3] to appear on the screen of the calculator", () => {
  })

  test("when I press the [1][+][2][+] buttons, I expect [     3] to appear on the screen of the calculator", () => {
  })

  test("when I press the [1][+][2][+][4] buttons, I expect [     4] to appear on the screen of the calculator", () => {
  })

  test("when I press the [1][+][2][+][4][=] buttons, I expect [     7] to appear on the screen of the calculator", () => {
  })

  test("when I press the [4][+][-][3][=] buttons, I expect [     1] to appear on the screen of the calculator", () => {
  })
});
