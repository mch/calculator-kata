type CalculatorInput = CalculatorDigit | CalculatorOperation | CalculatorAction;
type CalculatorOutput = unknown
type CalculatorState = {
    display: CalculatorDisplay
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

type Calculate = (input: CalculatorInput, state: CalculatorState) => CalculatorOutput

type UpdateDisplayFromDigit = (digit: CalculatorDigit, display: CalculatorDisplay) => CalculatorDisplay

