

// Addition:
    function add(a, b) {
        return a + b;
}


// Subtraction:
    function subtract(a, b) {
    return a - b;
        // const inp1 =  document.getElementById('a' ).value
        // const inp2 =  document.getElementById('b' ).value
}


// Multiplication:
    function multiply(a, b) {
    return a * b;
        // const inp1 =  document.getElementById('a' ).value
        // const inp2 =  document.getElementById('b' ).value
}

// Division:
    function divide(a, b) {
    return a / b;
        // const inp1 =  document.getElementById('a' ).value
        // const inp2 =  document.getElementById('b' ).value
}

// Calculate
function calculate() {
    let valueA = parseFloat(document.getElementById("valueA").value);
    let valueB = parseFloat(document.getElementById("valueB").value);
    let operation = document.querySelector('input[name="btnradio"]:checked').value;
    let result = document.getElementById("result");

    let Result;

    if (operation === "add") {
        Result = add(valueA, valueB);
    } else if (operation === "subtract") {
        Result = subtract(valueA, valueB);
    } else if (operation === "multiply") {
        Result = multiply(valueA, valueB);
    } else if (operation === "divide") {
        Result = divide(valueA, valueB);
    }

    result.textContent =  Result;
}

function reset() {
    document.getElementById("valueA").value = "";
    document.getElementById("valueB").value = "";
    document.getElementById("result").textContent = "";


    // console.log(document.getElementById('plus' ).value)
    // console.log( add(inp1, inp2))
    // if (document.getElementById('plus' ).value) {
    //     console.log(document.getElementById('plus' ).value)
    //     console.log( add(inp1, inp2))
    // }
    // const answer = document.getElementById('answer').value;
    // const calculate = eval(answer);
    // document.getElementById('answer').value = calculate;
}


// practicing different methods...
// function addToResult(value) {

//
//    const inp1 =  document.getElementById('input1' ).value
//    const inp2 =  document.getElementById('input2' ).value
//     const plus =  document.getElementById('plus' ).value
//     const minus =  document.getElementById('minus' ).value
//     const times =  document.getElementById('times' ).value
//     const divide =  document.getElementById('divide' ).value
//     console.log(inp1, inp2,plus,minus,times,divide)
//     // document.getElementById('answer1' ).value += value;
// }
//
// function equals() {
//     const inp1 =  document.getElementById('input1' ).value
//     const inp2 =  document.getElementById('input2' ).value
//     const plus =  document.getElementById('plus' ).value
//     const minus =  document.getElementById('minus' ).value
//     const times =  document.getElementById('times' ).value
//     const divide =  document.getElementById('divide' ).value
//     console.log(inp1, inp2,plus,minus,times,divide)
//     // const answer = document.getElementById('answer').value;
//     const calculate = eval(answer);
//     document.getElementById('answer').value = calculate;
// }
//
// function resetResult() {
//     document.getElementById('answer').value= '';
// }


// comments -practice code..