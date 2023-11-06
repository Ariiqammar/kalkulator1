document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen tombol dan tampilkan
    const display = document.getElementById('displayNumber');
    const buttons = document.querySelectorAll('.button');
    
    // Fungsi untuk menangani klik tombol
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const buttonText = button.textContent;
        if (buttonText === 'CE') {
          // Jika tombol 'CE' ditekan, reset tampilan menjadi 0
          display.textContent = '0';
        } else if (buttonText === '=') {
          // Jika tombol '=' ditekan, hitung hasilnya
          try {
            display.textContent = eval(display.textContent);
          } catch (error) {
            display.textContent = 'Error';
          }
        } else {
          // Selain itu, tambahkan teks tombol ke tampilan
          if (display.textContent === '0') {
            display.textContent = buttonText;
          } else {
            display.textContent += buttonText;
          }
        }

        const target = event.target;

        if (target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }
        if (target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }
        if (target.classList.contains('equals')) {
            calculateResult();
            updateDisplay();
            return;
            }
        if (target.classList.contains('oprator')) {
            addOperatorToMemory();
            updateDisplay();
            return;
            }

            inputDigit(target.innerText);
            updateDisplay();
      });
    });
  });