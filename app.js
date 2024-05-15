const textarea = document.getElementById('input-field');
const characterCountOutput = document.getElementById('character-count');

// TEXT AREA SCRIPT
textarea.addEventListener('input', function() {
    // HEIGHT OF TEXT AREAD ADJUSTED BASED ON CONTENT
    this.style.height = 'auto'; 
    this.style.height = this.scrollHeight + 'px';

    // CHARACTER COUNT NUMBER
    characterCountOutput.textContent = this.value.length;
});

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function() {
    textarea.value = '';
    characterCountOutput.textContent = '0';

    // RESET THE TEXT AREA HEIGHT
    textarea.style.height = 'auto'; 
});
