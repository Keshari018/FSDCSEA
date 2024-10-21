const numBulbsInput = document.getElementById('numBulbs');
const Btn = document.getElementById('Btn');
const container = document.getElementById('container');
Btn.addEventListener('click', () => {
    container.innerHTML = '';
    const numBulbs = parseInt(numBulbsInput.value);

    for (let i = 0; i < numBulbs; i++) {
        const bulbDiv = document.createElement('div');
        const bulbImage = document.createElement('img');
        bulbImage.src = 'bulboff.png';
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                bulbImage.src = 'bulbon.png'; 
            } else {
                bulbImage.src = 'bulboff.png'; 
            }
        });
        bulbDiv.appendChild(bulbImage);
        bulbDiv.appendChild(checkbox);
        container.appendChild(bulbDiv);
    }
});