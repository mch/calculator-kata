import {Option, none} from "fp-ts/Option";
import * as O from "fp-ts/Option";
import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";

type CalculatorInput = { tag: "CalculatorDigit", value: CalculatorDigit } |
    { tag: "CalculatorOperation", value: CalculatorOperation } |
    { tag: "CalculatorAction", value: CalculatorAction };
type CalculatorOutput = unknown

export type CalculatorState = {
    display: CalculatorDisplay,
    pendingOperation: Option<[CalculatorOperation, CalculatorNumber]>
}
export type CalculatorDisplay = string
export enum CalculatorDigit {
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

export enum CalculatorOperation {
    Add,
    Subtract,
    Multiply,
    Divide,
}
enum CalculatorAction {
    Equals,
    Clear
}

export type CalculatorNumber = number

type DoMathOperation = (operation: CalculatorOperation, a: CalculatorNumber, b: CalculatorNumber) => MathOperationResult;
type Calculate = (input: CalculatorInput, state: CalculatorState) => CalculatorOutput
export enum MathOperationError {
    DivideByZero
}
export type MathOperationResult = E.Either<CalculatorNumber, MathOperationError>;

type UpdateDisplayFromDigit = (digit: CalculatorDigit, display: CalculatorDisplay) => CalculatorDisplay

type GetDisplayNumber = (display: CalculatorDisplay) => Option<CalculatorNumber>
type SetDisplayNumber = (number: CalculatorNumber) => CalculatorDisplay

type InitState = () => CalculatorState

export type CalculatorServices = {
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

export function updateDisplayFromPendingOp(services: CalculatorServices, state: CalculatorState) {
    function updateDisplayAndState(data) {
        const newDisplay = services.setDisplayNumber(data);
        const newState = Object.assign({}, state, {display: newDisplay, pendingOp: none});
        return newState;
    }

    function appleSauce([op, pendingNumber]: [CalculatorOperation, CalculatorNumber]) {

        function bananaSauce(currentNumber: number): CalculatorState {
            const result = services.doMathOperation(op, pendingNumber, currentNumber);
            const newState = pipe(result,
                E.match(
                    updateDisplayAndState,
                    (error) => {
                        return state
                    }));
            return newState;

        }

        const currentNumberOption = services.getDisplayNumber(state.display);
        const newState = pipe(currentNumberOption, O.map(bananaSauce), O.getOrElse(() => state));
        return newState;
    }

    return pipe(state.pendingOperation,
        O.map(appleSauce),
        O.getOrElse(() => state));
}

//option<number>.map ((number) => number), if the otion is empty, the map doesn't call the function passed
//option<number.bin((number) => option<number>)

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

