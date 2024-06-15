import {Option} from "fp-ts/Option";

type CalculatorInput = { tag: "CalculatorDigit", value: CalculatorDigit } |
    { tag: "CalculatorOperation", value: CalculatorOperation } |
    { tag: "CalculatorAction", value: CalculatorAction };
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

type InitState = () => CalculatorState

type CalculatorServices = {
    updateDisplayFromDigit: UpdateDisplayFromDigit
    doMathOperation: DoMathOperation
    getDisplayNumber: GetDisplayNumber
    setDisplayNumber: SetDisplayNumber
    initState: InitState
}

function updateDisplayFromDigit(services: CalculatorServices, value: CalculatorDigit, state: CalculatorState) {
    const newDisplay = services.updateDisplayFromDigit(value, state.display);
    const newState = Object.assign({}, state, {display: newDisplay})
    return newState;
}

function updateDisplayFromPendingOp(services: CalculatorServices, state: CalculatorState) {
    if(state.pendingOperation._tag === "Some") {

    }
    return undefined;
}

function updateWithAction(services: CalculatorServices, value: CalculatorAction, state: CalculatorState) {
    switch (value) {
        case CalculatorAction.Clear:
            return services.initState();
        case CalculatorAction.Equals:
            return updateDisplayFromPendingOp(services, state);
        default:
            const _check:never = value;
            return _check;
    }
    return undefined;
}

function createCalculate(services: CalculatorServices): Calculate {
    return (input, state) => {
        switch (input.tag) {
            case "CalculatorDigit":
                return updateDisplayFromDigit(services, input.value, state);
            case "CalculatorAction":
                return updateWithAction(services, input.value, state);
                break;
            case "CalculatorOperation":
                break;
            default:
                const _check:never = input;
                return _check;
        }
    };
}
