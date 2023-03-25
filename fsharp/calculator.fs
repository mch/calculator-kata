module SampleHelloWorld.HelloWorld

type Calculate = CalculatorInput * CalculatorState -> CalculatorState
and CalculatorState = {
    display: CalculatorDisplay
    pendingOp: (CalculatorMathOp * Number) option
    }
and CalculatorDisplay = string
and CalculatorInput =
    | Digit of CalculatorDigit
    | Op of CalculatorMathOp
    | Action of CalculatorAction
and CalculatorDigit =
    | Zero | One | Two | Three | Four
    | Five | Six | Seven | Eight | Nine
    | DecimalSeparator
and CalculatorMathOp =
    | Add | Subtract | Multiply | Divide
and CalculatorAction =
    | Equals | Clear
and UpdateDisplayFromDigit =
    CalculatorDigit * CalculatorDisplay -> CalculatorDisplay

and DoMathOperation =
    CalculatorMathOp * Number * Number -> MathOperationResult
and Number = float
and MathOperationResult =
    | Success of Number
    | Failure of MathOperationError
and MathOperationError =
    | DivideByZero

type GetDisplayNumber =
    CalculatorDisplay -> Number option
type SetDisplayNumber =
    Number -> CalculatorDisplay

type InitState =
    unit -> CalculatorState

type CalculatorServices = {
    updateDisplayFromDigit: UpdateDisplayFromDigit
    doMathOperation: DoMathOperation
    getDisplayNumber: GetDisplayNumber
    setDisplayNumber: SetDisplayNumber
    initState: InitState
    }
