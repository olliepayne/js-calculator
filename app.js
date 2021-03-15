// slice equation, into individual expressions
// follow PEMDAS
// show a backlog of the equations performed

function evaluate() {
  let equation = '5*5'

  while(equation !== '') {
    const getAdjacentNumbers = index => {

      const getNum1 = () => {
        for(let i = index - 1; i >= 0; i--) {
          if(i > 0) {
            if(isNaN(parseInt(equation[i]))) {
              return equation.slice(i + 1, index)
            }
          } else {
            return equation.slice(i, index)
          }
        }
      }

      const getNum2 = () => {

      }

      const num1 = getNum1()
      return { num1, num2: 0 }
    }

    for(let i = 0; i < equation.length; i++) {
      if(equation[i] === '*') {
        const { num1, num2 } = getAdjacentNumbers(i)
      }
    }

    equation = ''
  }
}

evaluate()