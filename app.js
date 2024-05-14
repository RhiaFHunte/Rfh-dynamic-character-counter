const textarea = document.getElementById('input-field');
const characterCountOutput = document.getElementById('character-count');

// Textarea for input events
textarea.addEventListener('input', function() {
    // Adjust the height of the textarea based on its content
    this.style.height = 'auto'; 
    this.style.height = this.scrollHeight + 'px';

    // Update the character count displayed
    characterCountOutput.textContent = this.value.length;
});

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function() {
    textarea.value = '';
    characterCountOutput.textContent = '0';

    // Reset the height of the textarea
    textarea.style.height = 'auto'; // Reset the height to initial or minimum height
});
