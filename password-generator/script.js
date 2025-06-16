document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const passwordInput = document.getElementById('password');
    const copyBtn = document.getElementById('copy-btn');
    const generateBtn = document.getElementById('generate-btn');
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const excludeSimilarCheckbox = document.getElementById('exclude-similar');
    const excludeAmbiguousCheckbox = document.getElementById('exclude-ambiguous');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');

    // Character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Similar and ambiguous characters to exclude
    const similarChars = 'il1Lo0O';
    const ambiguousChars = '{}[]()/\\\'"`~,;:.<> ';

    // Update length display
    lengthSlider.addEventListener('input', function() {
        lengthValue.textContent = this.value;
    });

    // Copy password to clipboard
    copyBtn.addEventListener('click', function() {
        if (passwordInput.value) {
            passwordInput.select();
            document.execCommand('copy');
            
            // Visual feedback
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            copyBtn.style.backgroundColor = '#2ecc71';
            
            setTimeout(function() {
                copyBtn.textContent = originalText;
                copyBtn.style.backgroundColor = '#3498db';
            }, 2000);
        }
    });

    // Generate password
    generateBtn.addEventListener('click', generatePassword);

    // Generate password on initial load
    generatePassword();

    function generatePassword() {
        let length = parseInt(lengthSlider.value);
        let charset = '';
        let password = '';
        
        // Build character set based on selected options
        if (uppercaseCheckbox.checked) charset += uppercaseChars;
        if (lowercaseCheckbox.checked) charset += lowercaseChars;
        if (numbersCheckbox.checked) charset += numberChars;
        if (symbolsCheckbox.checked) charset += symbolChars;
        
        // If no character set is selected, use all
        if (charset === '') {
            charset = uppercaseChars + lowercaseChars + numberChars + symbolChars;
            uppercaseCheckbox.checked = true;
            lowercaseCheckbox.checked = true;
            numbersCheckbox.checked = true;
            symbolsCheckbox.checked = true;
        }
        
        // Exclude similar characters if option is checked
        if (excludeSimilarCheckbox.checked) {
            charset = charset.split('').filter(c => !similarChars.includes(c)).join('');
        }
        
        // Exclude ambiguous characters if option is checked
        if (excludeAmbiguousCheckbox.checked) {
            charset = charset.split('').filter(c => !ambiguousChars.includes(c)).join('');
        }
        
        // Generate password
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        
        passwordInput.value = password;
        updateStrengthMeter(password);
    }

    function updateStrengthMeter(password) {
        // Calculate password strength (simplified version)
        let strength = 0;
        const length = password.length;
        
        // Length contributes to strength
        if (length >= 8) strength += 1;
        if (length >= 12) strength += 1;
        if (length >= 16) strength += 1;
        if (length >= 20) strength += 1;
        
        // Character variety contributes to strength
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSymbols = /[^A-Za-z0-9]/.test(password);
        
        if (hasUppercase) strength += 1;
        if (hasLowercase) strength += 1;
        if (hasNumbers) strength += 1;
        if (hasSymbols) strength += 1;
        
        // Update strength meter
        let strengthLevel = '';
        let strengthColor = '';
        
        if (strength <= 3) {
            strengthLevel = 'Weak';
            strengthColor = '#e74c3c';
        } else if (strength <= 6) {
            strengthLevel = 'Moderate';
            strengthColor = '#f39c12';
        } else if (strength <= 9) {
            strengthLevel = 'Strong';
            strengthColor = '#2ecc71';
        } else {
            strengthLevel = 'Very Strong';
            strengthColor = '#27ae60';
        }
        
        strengthBar.style.width = `${(strength / 10) * 100}%`;
        strengthBar.style.backgroundColor = strengthColor;
        strengthText.textContent = `Password Strength: ${strengthLevel}`;
    }
});