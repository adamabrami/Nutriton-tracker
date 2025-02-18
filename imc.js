document.getElementById('calculate').addEventListener('click', function() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
  
    if (height === '' || weight === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    height = height / 100; 
  
    var bmi = weight / (height * height);
    bmi = bmi.toFixed(2); 
  
    var interpretation = interpreterIMC(bmi);
  
    document.getElementById('results').innerHTML = 'Your BMI is: ' + bmi + '<br>' + interpretation;
  });
  
  function interpreterIMC(bmi) {
    if (bmi < 18.5) {
      return 'thiness';
    } else if (bmi >= 18.5 && bmi < 25) {
      return 'normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      return 'overweight';
    } else {
      return 'Obesity';
    }
  }