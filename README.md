<h1>Tax Calculation Form</h1>
This project implements a tax calculation form using HTML, CSS, and JavaScript. The form allows users to input their gross annual income, extra income, deductions, and age to calculate their tax liability based on specific criteria.

<h3>Features</h3>
<h5>Tax Calculation</h5> The form calculates tax based on the provided inputs according to the following rules:

If the overall income (after deductions) is under 8 Lakhs, no tax is applied.
For income over 8 Lakhs, the amount over 8 Lakhs is taxed at different rates based on age:
- 30% for individuals under 40 years old
- 40% for individuals aged 40 to 59
- 10% for individuals aged 60 or above
<h5>Error Handling</h5>

- Error icons are displayed next to input fields if incorrect values are entered, and hovering over them shows error messages.
- Age input is mandatory, and an error icon is displayed if it is not selected.
<h5>Modal Display</h5>

- Upon form submission, a modal displays the calculated tax amount.

<h3>Screenshots</h3>

<img width="725" alt="Screenshot-tax-calculation form" src="https://github.com/ik-deep/tax-calculator/assets/80601941/23125103-e9ec-4f19-a8f2-ac9eebcebf48">
<img width="698" alt="tooltip-message" src="https://github.com/ik-deep/tax-calculator/assets/80601941/7a67980e-463e-489c-b862-4e15d213ba67">
<img width="692" alt="error-find" src="https://github.com/ik-deep/tax-calculator/assets/80601941/a2f40867-a43c-4eac-b6c3-139513daa642">
<img width="637" alt="output" src="https://github.com/ik-deep/tax-calculator/assets/80601941/4d385d26-3b2b-40bb-b0c9-444123d04654">





<h3>Requirements</h3>

- The project is implemented using HTML, CSS, and JavaScript.
- Bootstrap and jQuery libraries are allowed for development.
- Edge cases such as invalid inputs and missing age selection are handled gracefully.
- Design elements such as error icons and modal display are implemented according to specifications.
<h3>How to Use</h3>

- Open index.html in a web browser.
- Fill in the form fields with your gross annual income, extra income, deductions, and select your age group.
- Click the "Calculate Tax" button to see the tax calculation result in a modal.
<h3>Credits</h3>

 - This project was created by Irfan Khan.
