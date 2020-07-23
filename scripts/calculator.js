function createCalculator(display) {
  let operationsLog = [];
  let currentOp = [];
  display.textContent = "";

  return {
    addNumber: num => {
      let lastIndex = currentOp.length - 1;

      if (currentOp.length === 0) {
        display.textContent = "";
      }

      if (isNaN(currentOp[lastIndex]) && currentOp[lastIndex] !== ".") currentOp.push(num);
      else currentOp[lastIndex] += num;
      
      display.textContent += num;     
      console.log(currentOp);
    },

    addOperator: op => {
      if (currentOp.length === 0) {
        display.textContent = "";
      }
      
      currentOp.push(op);
      display.textContent += op;
      console.log(currentOp);
    },

    changeLastNumberSign: () => {
      let lastIndex = currentOp.length - 1;
      if (!isNaN(currentOp[lastIndex])) {
        currentOp[lastIndex] = `${currentOp[lastIndex] * -1}`;
        display.textContent = currentOp.join("");
      }
    },

    reset: () => {
      currentOp = [];
      display.textContent = "";
    },

    computeOperation: () => {
      if (display.textContent !== "") {
        try {
          let result = eval(display.textContent);
          operationsLog.push(`${display.textContent} = ${result}`);
          display.textContent = `${result}`;
        } catch {
          operationsLog.push(`${display.textContent} = Error`);
          display.textContent = "Error";
        } finally {
          currentOp = [];
        }
      }
    },

    showLog: () => {
      operationsLog.forEach((log, index) => {
        console.log(`${index}: ${log}`);
      });
    }
  };
}
