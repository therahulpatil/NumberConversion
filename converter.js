function convertNumber() {
    var conversionType = document.getElementById("conversionType").value;
    var numberInput = document.getElementById("numberInput").value.trim();
    var resultTable = document.getElementById("result");

    var isValidInput = validateInput(numberInput, conversionType);
    if (!isValidInput) {
        displayError(resultTable);
        return;
    }

    var convertedNumber;
    switch (conversionType) {
        case "binary":
            convertedNumber = parseInt(numberInput, 2);
            break;
        case "decimal":
            convertedNumber = parseInt(numberInput, 10);
            break;
        case "octal":
            convertedNumber = parseInt(numberInput, 8);
            break;
        case "hexadecimal":
            convertedNumber = parseInt(numberInput, 16);
            break;
    }

    var binary = convertedNumber.toString(2);
    var decimal = convertedNumber.toString(10);
    var octal = convertedNumber.toString(8);
    var hexadecimal = convertedNumber.toString(16).toUpperCase();

    resultTable.innerHTML = `
        <tr>
            <td><b>Number System</td>
            <td><b>Conversion</b></td>
        </tr>
        <tr>
            <td>Decimal</td>
            <td>${decimal}</td>
        </tr>
        <tr>
            <td>Binary</td>
            <td>${binary}</td>
        </tr>
        <tr>
            <td>Octal</td>
            <td>${octal}</td>
        </tr>
        <tr>
            <td>Hexadecimal</td>
            <td>${hexadecimal}</td>
        </tr>
    `;
    resultTable.style.display = "table";
}

function validateInput(input, conversionType) {
    var regex;
    switch (conversionType) {
        case "binary":
            regex = /^[01]+$/;
            break;
        case "decimal":
            regex = /^\d+$/;
            break;
        case "octal":
            regex = /^[0-7]+$/;
            break;
        case "hexadecimal":
            regex = /^[0-9a-fA-F]+$/;
            break;
    }
    return regex.test(input);
}

function displayError(resultTable) {
    resultTable.innerHTML = `
        <tr>
            <td colspan="2">Invalid input!</td>
        </tr>
    `;
    resultTable.style.display = "none";
}