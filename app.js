// slice equation, into individual expressions
// follow PEMDAS
// show a backlog of the equations performed

function evaluate() {
  let equation = '10/2'
  let result

  while (equation.includes('*') || equation.includes('/') || equation.includes('+') || equation.includes('-')) {
    const getAdjacentNumbers = index => {

      const getNum1 = () => {
        for (let i = index - 1; i >= 0; i--) {
          if (i > 0) {
            if (isNaN(parseInt(equation[i]))) {
              return equation.slice(i + 1, index)
            }
          } else {
            return equation.slice(i, index)
          }
        }
      }
      const num1 = getNum1()

      const getNum2 = () => {
        for (let i = index + 1; i < equation.length; i++) {
          if (i < equation.length - 1) {
            if (isNaN(parseInt(equation[i]))) {
              return equation.slice(index, i)
            }
          } else {
            return equation.slice(index + 1, i + 1)
          }
        }
      }
      const num2 = getNum2()

      return { num1, num2 }
    }

    for (let i = 0; i < equation.length; i++) {
      if (equation[i] === '*') {
        const { num1, num2 } = getAdjacentNumbers(i)
        const product = num1 * num2
        result = product

        const expression = `${num1}*${num2}`
        equation = equation.replace(expression, result)
      } else if (equation[i] === '/') {
        const { num1, num2 } = getAdjacentNumbers(i)

        const quotient = num1 / num2
        result = quotient
      
        const expression = `${num1}/${num2}`
        equation = equation.replace(expression, result)
      }
    }
  }

  return result
}

console.log(evaluate())