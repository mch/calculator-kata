enum CalculatorInput {
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
    DecimalSeparator,
    Add,
    Subtract,
    Multiply,
    Divide,
    Equals,
    Clear
}
type CalculatorOutput = unknown
type CalculatorState = {
    display: CalculatorDisplay
}
type CalculatorDisplay = string


export function calculate (input: CalculatorInput, state: CalculatorState) : CalculatorOutput {
    return undefined
}


