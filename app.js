// button is pressed, added to input string

const equationEl = document.getElementById('equation')

function evaluate() {
  // const equation = equationEl.innerText
  const equation = '8+8x99-84+2'

  const numbers = []
  const operators = []

  for (let i = 0; i < equation.length; i++) {
    if(isNaN(parseInt(equation[i]))) {
      operators.push(equation[i])
    } else if(i === 0 || isNaN(parseInt(equation[i - 1]))) {
      for (let j = i; j < equation.length; j++) {
        if(j === equation.length - 1) {
          const num = parseInt(equation.slice(i, j + 1))
          numbers.push(num)
        } else {
          if (isNaN(parseInt(equation[j]))) {
            const num = parseInt(equation.slice(i, j))
            numbers.push(num)
            break
          }
        }
      }
    }
  }

  console.log(numbers)
  console.log(operators)
}

evaluate()