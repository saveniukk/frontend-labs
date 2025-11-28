const patterns = {
    fullName: /^[А-ЯІЇЄҐа-яіїєґ]+\s[А-ЯІЇЄҐа-яіїєґ]\.\s?[А-ЯІЇЄҐа-яіїєґ]\.$/,
    
    birthDate: /^\d{2}\.\d{2}\.\d{4}$/,
    
    address: /^м\.\s[А-ЯІЇЄҐа-яіїєґ]+$/,
    
    email: /^[a-z]+@[a-z]+\.com$/,
    
    telegram: /^@[А-ЯІЇЄҐa-z]_[А-ЯІЇЄҐa-z]+$/
};

const errorMessages = {
    fullName: "ПІБ повинно бути у форматі ТТТТТТ Т.Т. (наприклад: Іванов І.П.)",
    birthDate: "Дата повинна бути у форматі ЧЧ.ЧЧ.ЧЧЧЧ (наприклад: 18.04.2006)",
    address: "Адреса повинна бути у форматі м. ТТТТТТ (наприклад: м. Київ)",
    email: "Email повинен бути у форматі тттттт@ттттт.com (наприклад: example@gmail.com)",
    telegram: "Telegram повинен бути у форматі @Т_ТТТТТ (наприклад: @User_Name)"
};

function validateField(fieldName, value) {
    const pattern = patterns[fieldName];
    const isValid = pattern.test(value);
    
    const input = document.getElementById(fieldName);
    const errorSpan = document.getElementById(fieldName + 'Error');
    
    if (value.trim() === '') {
        input.classList.remove('valid', 'error');
        errorSpan.textContent = '';
        return false;
    }
    
    if (isValid) {
        input.classList.remove('error');
        input.classList.add('valid');
        errorSpan.textContent = '';
        return true;
    } else {
        input.classList.remove('valid');
        input.classList.add('error');
        errorSpan.textContent = errorMessages[fieldName];
        return false;
    }
}

function clearError(fieldName) {
    const input = document.getElementById(fieldName);
    const errorSpan = document.getElementById(fieldName + 'Error');
    input.classList.remove('error', 'valid');
    errorSpan.textContent = '';
}

function showResults(formData) {
    const resultWindow = window.open('', '_blank', 'width=500,height=400,scrollbars=yes');
    
    if (resultWindow) {
        resultWindow.document.write(`
            <!DOCTYPE html>
            <html lang="uk">
            <head>
                <meta charset="UTF-8">
                <title>Результати форми</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        background-color: #f5f5f5;
                    }
                    .result-container {
                        background-color: white;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    h2 {
                        color: #4CAF50;
                        margin-top: 0;
                    }
                    .result-item {
                        margin: 15px 0;
                        padding: 10px;
                        background-color: #f9f9f9;
                        border-left: 4px solid #4CAF50;
                    }
                    .result-label {
                        font-weight: bold;
                        color: #333;
                    }
                    .result-value {
                        color: #666;
                        margin-top: 5px;
                    }
                </style>
            </head>
            <body>
                <div class="result-container">
                    <h2>Введена інформація</h2>
                    <div class="result-item">
                        <div class="result-label">ПІБ:</div>
                        <div class="result-value">${formData.fullName}</div>
                    </div>
                    <div class="result-item">
                        <div class="result-label">Дата народження:</div>
                        <div class="result-value">${formData.birthDate}</div>
                    </div>
                    <div class="result-item">
                        <div class="result-label">Адреса:</div>
                        <div class="result-value">${formData.address}</div>
                    </div>
                    <div class="result-item">
                        <div class="result-label">Email:</div>
                        <div class="result-value">${formData.email}</div>
                    </div>
                    <div class="result-item">
                        <div class="result-label">Telegram:</div>
                        <div class="result-value">${formData.telegram}</div>
                    </div>
                </div>
            </body>
            </html>
        `);
        resultWindow.document.close();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const fields = ['fullName', 'birthDate', 'address', 'email', 'telegram'];
    
    fields.forEach(fieldName => {
        const input = document.getElementById(fieldName);
        
        input.addEventListener('blur', function() {
            validateField(fieldName, this.value);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                clearError(fieldName);
            }
        });
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            fullName: document.getElementById('fullName').value.trim(),
            birthDate: document.getElementById('birthDate').value.trim(),
            address: document.getElementById('address').value.trim(),
            email: document.getElementById('email').value.trim(),
            telegram: document.getElementById('telegram').value.trim()
        };
        
        let isValid = true;
        fields.forEach(fieldName => {
            if (!validateField(fieldName, formData[fieldName])) {
                isValid = false;
            }
        });
        
        if (isValid) {
            showResults(formData);
        } else {
            const firstError = document.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });
    
    form.addEventListener('reset', function() {
        fields.forEach(fieldName => {
            clearError(fieldName);
        });
    });
    
    const tableBody = document.getElementById('tableBody');
    const colorPicker = document.getElementById('colorPicker');
    
    if (tableBody && colorPicker) {
        let cellNumber = 1;
        for (let row = 0; row < 6; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 6; col++) {
                const td = document.createElement('td');
                td.textContent = cellNumber;
                td.dataset.row = row;
                td.dataset.col = col;
                td.dataset.number = cellNumber;
                
                td.dataset.originalColor = '#ffffff';
                
                if (cellNumber === 6) {
                    td.addEventListener('mouseenter', function() {
                        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                        this.style.backgroundColor = randomColor;
                    });
                    
                    td.addEventListener('mouseleave', function() {
                        this.style.backgroundColor = this.dataset.originalColor;
                    });
                    
                    td.addEventListener('click', function(e) {
                        e.preventDefault();
                        const selectedColor = colorPicker.value;
                        this.style.backgroundColor = selectedColor;
                        this.dataset.originalColor = selectedColor;
                    });
                    
                    td.addEventListener('dblclick', function(e) {
                        e.preventDefault();
                        const selectedColor = colorPicker.value;
                        const startNumber = parseInt(this.dataset.number);
                        
                        const allCells = tableBody.querySelectorAll('td');
                        allCells.forEach(cell => {
                            const cellNumber = parseInt(cell.dataset.number);
                            
                            if (cellNumber >= startNumber) {
                                cell.style.backgroundColor = selectedColor;
                                cell.dataset.originalColor = selectedColor;
                            }
                        });
                    });
                }
                
                tr.appendChild(td);
                cellNumber++;
            }
            tableBody.appendChild(tr);
        }
    }
});

