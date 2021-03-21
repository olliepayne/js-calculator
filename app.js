// slice equation, into individual expressions
// follow PEMDAS
// show a backlog of the equations performed

function evaluate() {
  let equation = '5+5'
  const operators = ['*', '/', '+', '-']

  const getExpressions = () => {
    const expressions =  []

    for (let i = 0; i < equation.length; i++) {
      let startIndex = 0
      if (operators.includes(equation[i])) {
        for (let j = i + 1; j < equation.length; j++) {
          if (operators.includes(equation[j]) || j === equation.length - 1) {
            expressions.push(equation.slice(startIndex, j === equation.length - 1 ? j + 1 : j))
            startIndex = j + 1
          }
        }
      }
    }
    return expressions

    function sortExpressions() {

    }
  }
  const expressions = getExpressions()
  console.log(expressions)
}

evaluate()