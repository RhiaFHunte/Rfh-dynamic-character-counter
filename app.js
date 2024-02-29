// Get the textarea element
const textarea = document.getElementById('input-field');

// Get the character count output element
const characterCountOutput = document.getElementById('character-count');

// Add an event listener to the textarea for input events
textarea.addEventListener('input', function() {
   // Adjust the height of the textarea based on its content
   this.style.height = 'auto'; // Reset the height first
   this.style.height = (this.scrollHeight) + 'px'; // Set the height to match the scroll height
   
   // Update the character count
   characterCountOutput.textContent = this.value.length;
});

// Get the reset button element
const resetButton = document.getElementById('reset-button');

// Add event listener to the reset button
resetButton.addEventListener('click', function() {
  // Reset the value of the textarea and character count
  textarea.value = '';
  characterCountOutput.textContent = '0';
});
