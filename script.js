
function generateQuestion(type) {
  let num1 = Math.floor(Math.random() * 50) + 1;
  let num2 = Math.floor(Math.random() * 50) + 1;
  let question = '';

  switch(type) {
    case 'addition':
      question = `${num1} + ${num2} = ?`;
      break;
    case 'subtraction':
      question = `${num1} - ${num2} = ?`;
      break;
    case 'multiplication':
      question = `${num1} × ${num2} = ?`;
      break;
    case 'division':
      num1 = num1 * num2; // Ensure divisible
      question = `${num1} ÷ ${num2} = ?`;
      break;
    default:
      question = 'Select a valid section!';
  }

  document.getElementById('question').innerHTML = question;
}
