document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const genderInput = document.getElementById('gender');
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const activityInput = document.getElementById('activity');
  
    const bmrValueSpan = document.getElementById('bmr-value');
    const dailyCaloriesValueSpan = document.getElementById('daily-calories-value');
  
    calculateButton.addEventListener('click', function() {
      const gender = genderInput.value;
      const age = parseFloat(ageInput.value);
      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);
      const activityLevel = parseFloat(activityInput.value);
  
      let bmr;
      if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
  
      const dailyCalories = bmr * activityLevel;
  
      bmrValueSpan.textContent = bmr.toFixed(2);
      dailyCaloriesValueSpan.textContent = dailyCalories.toFixed(2);
    });
  });