let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}
function updateTime() {
  const now = new Date();
  const dateTimeElement = document.getElementById('datetime');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  const formattedDateTime = now.toLocaleDateString('en-US', options);
  dateTimeElement.textContent = formattedDateTime;
}

// Call updateTime function initially and set an interval to update it every second
updateTime();
setInterval(updateTime, 1000);

function calculateResult() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').value = displayValue;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
