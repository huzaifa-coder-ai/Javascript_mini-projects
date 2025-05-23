document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const amountInput = document.getElementById('amount');
  const tipInput = document.getElementById('tip');
  const peopleInput = document.getElementById('peoples');
  const calculateBtn = document.getElementById('execute');
  const resetBtn = document.getElementById('reset');
  const tipBtns = document.querySelectorAll('.tip-btn');
  const resultContainer = document.getElementById('result');
  const tipAmountDisplay = document.getElementById('tip2');
  const totalBillDisplay = document.getElementById('total-bill');
  const perPersonDisplay = document.getElementById('per-peoples');
  
  // Format currency
  const formatCurrency = (value) => {
      return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
      }).format(value);
  };
  
  // Calculate tip
  const calculateTip = () => {
      const amount = parseFloat(amountInput.value) || 0;
      const tipPercentage = parseFloat(tipInput.value) || 0;
      return amount * (tipPercentage / 100);
  };
  
  // Calculate total amount
  const calculateTotal = () => {
      const amount = parseFloat(amountInput.value) || 0;
      return amount + calculateTip();
  };
  
  // Calculate per person amount
  const calculatePerPerson = () => {
      const people = parseInt(peopleInput.value) || 1;
      return calculateTotal() / people;
  };
  
  // Update results display
  const updateResults = () => {
      const tip = calculateTip();
      const total = calculateTotal();
      const perPerson = calculatePerPerson();
      
      tipAmountDisplay.textContent = formatCurrency(tip);
      totalBillDisplay.textContent = formatCurrency(total);
      perPersonDisplay.textContent = formatCurrency(perPerson);
      
      resultContainer.style.display = 'block';
  };
  
  // Validate inputs
  const validateInputs = () => {
      if (!amountInput.value || isNaN(amountInput.value) || parseFloat(amountInput.value) <= 0) {
          alert('Please enter a valid bill amount');
          amountInput.focus();
          return false;
      }
      
      if (!tipInput.value || isNaN(tipInput.value) || parseFloat(tipInput.value) <= 0) {
          alert('Please enter a valid tip percentage');
          tipInput.focus();
          return false;
      }
      
      if (peopleInput.value && (isNaN(peopleInput.value) || parseInt(peopleInput.value) <= 0)) {
          alert('Please enter a valid number of people');
          peopleInput.focus();
          return false;
      }
      
      return true;
  };
  
  // Reset calculator
  const resetCalculator = () => {
      amountInput.value = '';
      tipInput.value = '';
      peopleInput.value = '';
      resultContainer.style.display = 'none';
      
      // Remove active class from tip buttons
      tipBtns.forEach(btn => btn.classList.remove('active'));
      
      // Focus on amount input
      amountInput.focus();
  };
  
  // Event Listeners
  calculateBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (validateInputs()) {
          updateResults();
      }
  });
  
  resetBtn.addEventListener('click', (e) => {
      e.preventDefault();
      resetCalculator();
  });
  
  // Tip button click handler
  tipBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          const percentage = btn.dataset.percentage;
          
          // Remove active class from all buttons
          tipBtns.forEach(b => b.classList.remove('active'));
          
          // Add active class to clicked button
          btn.classList.add('active');
          
          // Set tip input value
          tipInput.value = percentage;
      });
  });
  
  // Allow Enter key to trigger calculation
  [amountInput, tipInput, peopleInput].forEach(input => {
      input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
              e.preventDefault();
              if (validateInputs()) {
                  updateResults();
              }
          }
      });
  });
  
  // Initialize with amount input focused
  amountInput.focus();
});