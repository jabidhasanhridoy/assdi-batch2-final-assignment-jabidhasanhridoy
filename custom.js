





function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;
    switch (operator) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          result = "Cannot divide by zero";
        } else {
          result = num1 / num2;
        }
        break;
      case "interest":
        const time = parseFloat(prompt("Enter time in years:"));
        const interest = (num1 * num2 * time) / 100;
        result = `Interest: ${interest.toFixed(2)}, Total Amount: ${(
          num1 + interest
        ).toFixed(2)}`;
        break;
      case "remainder":
        result = num1 % num2;
        break;
      default:
        result = "Invalid operation";
    }
    document.getElementById("result").innerText = `Result: ${result}`;
  }
  
  function add() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;
    document.getElementById("result").innerText = `Result: ${result}`;
  }
  
  function subtract() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 - num2;
    document.getElementById("result").innerText = `Result: ${result}`;
  }
  
  function multiply() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 * num2;
    document.getElementById("result").innerText = `Result: ${result}`;
  }
  
  function divide() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
      document.getElementById("result").innerText = "Cannot divide by zero";
    } else {
      const result = num1 / num2;
      document.getElementById("result").innerText = `Result: ${result}`;
    }
  }
  
  function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(
      document.getElementById("fahrenheitInput").value
    );
    const celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById(
      "fahrenheitToCelsiusResult"
    ).innerText = `Result: ${celsius.toFixed(2)} °C`;
  }
  
  function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsiusInput").value);
    const fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById(
      "celsiusToFahrenheitResult"
    ).innerText = `Result: ${fahrenheit.toFixed(2)} °F`;
  }
  
  function calculateAreaOfCircle() {
    const radius = parseFloat(document.getElementById("circleRadius").value);
    const area = Math.PI * radius * radius;
    document.getElementById("circleAreaResult").innerText = `Area: ${area.toFixed(
      2
    )}`;
  }
  
  function calculateAreaOfRectangle() {
    const length = parseFloat(document.getElementById("rectangleLength").value);
    const width = parseFloat(document.getElementById("rectangleWidth").value);
    const area = length * width;
    document.getElementById(
      "rectangleAreaResult"
    ).innerText = `Area: ${area.toFixed(2)}`;
  }
  
  function calculateAreaOfSquare() {
    const side = parseFloat(document.getElementById("squareSide").value);
    const area = side * side;
    document.getElementById("squareAreaResult").innerText = `Area: ${area.toFixed(
      2
    )}`;
  }
  
  function calculateAreaOfTriangle() {
    const base = parseFloat(document.getElementById("triangleBase").value);
    const height = parseFloat(document.getElementById("triangleHeight").value);
    const area = 0.5 * base * height;
    document.getElementById(
      "triangleAreaResult"
    ).innerText = `Area: ${area.toFixed(2)}`;
  }
  
  function calculateAreaOfParallelogram() {
    const base = parseFloat(document.getElementById("parallelogramBase").value);
    const height = parseFloat(
      document.getElementById("parallelogramHeight").value
    );
    const area = base * height;
    document.getElementById(
      "parallelogramAreaResult"
    ).innerText = `Area: ${area.toFixed(2)}`;
  }
  
  function calculateAreaOfRhombus() {
    const diagonal1 = parseFloat(
      document.getElementById("rhombusDiagonal1").value
    );
    const diagonal2 = parseFloat(
      document.getElementById("rhombusDiagonal2").value
    );
    const area = 0.5 * diagonal1 * diagonal2;
    document.getElementById(
      "rhombusAreaResult"
    ).innerText = `Area: ${area.toFixed(2)}`;
  }
  
  function calculateAreaOfTrapezoid() {
    const base1 = parseFloat(document.getElementById("trapezoidBase1").value);
    const base2 = parseFloat(document.getElementById("trapezoidBase2").value);
    const height = parseFloat(document.getElementById("trapezoidHeight").value);
    const area = 0.5 * (base1 + base2) * height;
    document.getElementById(
      "trapezoidAreaResult"
    ).innerText = `Area: ${area.toFixed(2)}`;
  }
  
  function calculateAreaOfEllipse() {
    const axisA = parseFloat(document.getElementById("ellipseAxisA").value);
    const axisB = parseFloat(document.getElementById("ellipseAxisB").value);
    const area = Math.PI * axisA * axisB;
    document.getElementById(
      "ellipseAreaResult"
    ).innerText = `Area: ${area.toFixed(2)}`;
  }
  
  function calculateAreaOfCube() {
    const side = parseFloat(document.getElementById("cubeSide").value);
    const area = 6 * side * side;
    document.getElementById("cubeAreaResult").innerText = `Area: ${area.toFixed(
      2
    )}`;
  }
  