import { describe, test } from "@jest/globals";
import { Calculator } from "../src/Calculator";
import {pipe} from "fp-ts/function";

// these tests must be passing in order for the calculator to work
// todo add more test cases

// type Digit

describe("Calculator tests", () => {

  // function processInputs(digit Digit) {
  //
  // }

  describe("when I input 1, I expect 1", () => {
    // pipe([Digit One], processInputs)
  })
  /*

      let ``when I input 1, I expect 1``() =
        [Digit One; ]
        |> processInputs
        |> assertResult "1" "1"

    let ``when I input 1+, I expect 1``() =
        [Digit One; MathOp Add]
        |> processInputs
        |> assertResult "1+" "1"

    let ``when I input 1=, I expect 1``() =
        [Digit One; Equals]
        |> processInputs
        |> assertResult "1=" "1"

    let ``when I input 1+2, I expect 2``() =
        [Digit One; MathOp Add; Digit Two]
        |> processInputs
        |> assertResult "1+2" "2"

    let ``when I input 1+2=, I expect 3``() =
        [Digit One; MathOp Add; Digit Two; Equals]
        |> processInputs
        |> assertResult "1+2=" "3"

    let ``when I input 1+2+, I expect 3``() =
        [Digit One; MathOp Add; Digit Two; MathOp Add; ]
        |> processInputs
        |> assertResult "1+2+" "3"

    let ``when I input 1+2+4, I expect 4``() =
        [Digit One; MathOp Add; Digit Two; MathOp Add; Digit Four]
        |> processInputs
        |> assertResult "1+2+4" "4"

    let ``when I input 1+2+4=, I expect 7``() =
        [Digit One; MathOp Add; Digit Two; MathOp Add; Digit Four; Equals]
        |> processInputs
        |> assertResult "1+2+4=" "7"

    let ``when I input 4+-3=, I expect 1``() =
        [Digit Four; MathOp Add; MathOp Subtract; Digit Three; Equals]
        |> processInputs
        |> assertResult "4+-3=" "1"

   */


  test("move", () => {});
});
