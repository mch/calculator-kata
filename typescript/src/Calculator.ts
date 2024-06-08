import {Option} from "fp-ts/Option";

type CalculatorInput = CalculatorDigit | CalculatorOperation | CalculatorAction;
type CalculatorOutput = unknown
type CalculatorState = {
    display: CalculatorDisplay,
    pendingOperation: Option<[CalculatorOperation, CalculatorNumber]>
}
type CalculatorDisplay = string
enum CalculatorDigit {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    DecimalSeparator
}
enum CalculatorOperation {
    Add,
    Subtract,
    Multiply,
    Divide,
}
enum CalculatorAction {
    Equals,
    Clear
}
type CalculatorNumber = number

type DoMathOperation = (operation: CalculatorOperation, a: CalculatorNumber, b: CalculatorNumber) => MathOperationResult;
type Calculate = (input: CalculatorInput, state: CalculatorState) => CalculatorOutput
enum MathOperationError {
    DivideByZero
}
type MathOperationResult = {data: CalculatorNumber, success: true} | {error: MathOperationError, success: false}

type UpdateDisplayFromDigit = (digit: CalculatorDigit, display: CalculatorDisplay) => CalculatorDisplay

type GetDisplayNumber = (display: CalculatorDisplay) => Option<CalculatorNumber>
type SetDisplayNumber = (number: CalculatorNumber) => CalculatorDisplay

