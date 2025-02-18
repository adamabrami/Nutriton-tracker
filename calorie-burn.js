document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight');
    const activitySelect = document.getElementById('activity');
    const durationInput = document.getElementById('duration');
    const calculateButton = document.getElementById('calculate');
    const caloriesSpan = document.getElementById('calories');
  
    calculateButton.addEventListener('click', function() {
      const weight = parseFloat(weightInput.value);
      const activity = activitySelect.value;
      const duration = parseFloat(durationInput.value);
  
      if (isNaN(weight) || isNaN(duration)) {
        alert('Please enter valid numbers for weight and duration.');
        return;
      }
  
      let metValue;
      switch (activity) {
        case 'walking':
          metValue = 3.5;
          break;
        case 'running':
          metValue = 8.0;
          break;
        case 'cycling':
          metValue = 6.0;
          break;
        case 'swimming':
          metValue = 7.0;
          break;
        default:
          metValue = 1.0;
      }
  
      const caloriesBurned = calculateCalories(weight, metValue, duration);
      caloriesSpan.textContent = caloriesBurned.toFixed(2);
    });
  
    function calculateCalories(weight, met, duration) {
      
      
      const caloriesPerMinute = (met * 3.5 * weight) / 200;
      const totalCalories = caloriesPerMinute * duration;
      return totalCalories;
    }
  });