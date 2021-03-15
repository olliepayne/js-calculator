// button is pressed, added to input string

const equationEl = document.getElementById('equation')

const slicedEquation = () => {
  // const equation = equationEl.innerText
  const equation = '5+50'

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

  // console.log(numbers)
  // console.log(operators)

  return { numbers, operators }
}

function evaluate() {
  const { numbers, operators } = slicedEquation()

  let operatorIndex = 0
  let answer = 0

  for(let i = 0; i < numbers.length; i += 2) {
    switch(operators[operatorIndex]) {
      case '+':
        answer += numbers[i] + numbers[i + 1]
      break

      case '-':

      break
      
      case '*':

      break

      case '/':

      break
    }
  }

  console.log(answer)
}

evaluate()