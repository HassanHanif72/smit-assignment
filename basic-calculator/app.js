function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = "";
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;

    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function deleteResult() {
    let removeResult = document.getElementById('result');
    removeResult.value = removeResult.value.slice(0, -1);
}

// function percentage(value) {
//     let currentValue = document.getElementById('result').value += value;
//     (currentValue.value / 100) * currentValue.value;
// }
