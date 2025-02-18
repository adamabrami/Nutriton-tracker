document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const genderInput = document.getElementById('gender');
    const heightInput = document.getElementById('height');
    const ageInput = document.getElementById('age');
    const resultDiv = document.getElementById('result');
  
    calculateButton.addEventListener('click', function() {
      const gender = genderInput.value;
      const height = parseFloat(heightInput.value);
      const age = parseInt(ageInput.value);
  
      if (isNaN(height) || isNaN(age)) {
        resultDiv.textContent = 'Please enter valid height and age.';
        return;
      }
  
      
      let idealWeight;
      if (gender === 'male') {
        idealWeight = 50 + 2.3 * ((height / 2.54) - 60);
      } else {
        idealWeight = 45.5 + 2.3 * ((height / 2.54) - 60);
      }
  
      resultDiv.textContent = `Your ideal weight is approximately ${idealWeight.toFixed(2)} kg.`;
    });
  });