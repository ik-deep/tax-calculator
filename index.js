document.addEventListener("DOMContentLoaded", function() {
    // Hide error icons by default
    // var errorIcons = document.querySelectorAll('.error-icon');
    // errorIcons.forEach(function(icon) {
    //     icon.style.display = 'none';
    // });

    var taxForm = document.getElementById('taxForm');
    taxForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Validate form inputs
        var extraIncomeInput = document.getElementById("extraIncome");
        var extraIncome = parseFloat(extraIncomeInput.value)
        var deductionInput = document.getElementById("deductionIncome")
        var deductions = parseFloat(deductionInput.value);
        var grossIncomeInput = document.getElementById('grossIncome');
        var ageInput = document.getElementById('age');
        var grossIncome = parseFloat(grossIncomeInput.value);
        var age = ageInput.value;

        var isValid = true;
        if (isNaN(grossIncome) || grossIncome < 0) {
            showError(grossIncomeInput);
            isValid = false;
        } else {
            hideError(grossIncomeInput);
        }
        if(isNaN(extraIncome) || extraIncome < 0){
            showError(extraIncomeInput);
            isValid = false;
        }else{
            hideError(extraIncomeInput);
        }

        if (age === '') {
            showError(ageInput);
            isValid = false;
        } else {
            hideError(ageInput);
        }

        if(isNaN(deductions) || deductions < 0){
            showError(deductionInput);
            isValid = false;
        }else{
            hideError(deductionInput);
        }
       

        if (isValid) {
            // Calculate tax and display result in modal
            var tax = calculateTax(grossIncome, extraIncome, deductions, age);
            var modalBody = document.getElementById('modalBody');
            modalBody.innerHTML+=`<h5>${tax.toFixed(2)}</h5>
                                    <p>after tax deductions</p>     
            `;

            $('#resultModal').modal('show');
        }
    });
});

function showError(element, message) {
    element.focus();
    var errorIcon = element.nextElementSibling;
    if(errorIcon){
        errorIcon.style.display = 'inline-block';
    }

    
}

function hideError(element) {
    var errorIcon = element.nextElementSibling;
    errorIcon.style.display = 'none';
}

function calculateTax(grossIncome, extraIncome, deductions, age) {
    // Constants for tax rates and exemption limit
    const taxRates = {
        "below40": 0.3,
        "40to60": 0.4,
        "above60": 0.1
    };
    const exemptionLimit = 800000;

    // Calculate total income
    const totalIncome = grossIncome + extraIncome - deductions;

    // Check if total income is under exemption limit
    if (totalIncome <= exemptionLimit) {
        return 0; // No tax
    } else {
        // Determine applicable tax rate based on age
        const taxRate = taxRates[age];
        
        // Calculate tax amount
        const taxAmount = taxRate * (totalIncome - exemptionLimit);
        return taxAmount;
    }
}