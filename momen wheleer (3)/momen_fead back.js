
function calculateScore() {
    var questions = document.querySelectorAll('input[type="radio"]:checked');
    var score = 0;
    

    questions.forEach(function (question) {
      
        if (question.value === 'a') {
            score++;
     
        }
    });
    
    if(score!==3){
      alert("Check ansower  ");
      return false;
  }
  else{
      var resultElement = document.getElementById('result');
      resultElement.innerHTML = 'Your score: ' + score + ' out of ' + questions.length;
      window.alert("Your score is: "+ score +" from "+ questions.length);
      window.location.href="scrole.html";
  }
  
}

