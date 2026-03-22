// Requirement: Use JS to auto-select the first radio button.
const firstTipSelected = document.querySelector('input[name="tip-button"]');
firstTipSelected.checked = true;

// If input is entered, run the function again
const costInput = document.querySelector('input[name="initial-cost"]');
costInput.addEventListener("input", tipCalculator);

// If the button is changed, run the function again
const tipButtons = document.querySelectorAll('input[name="tip-button"]');
tipButtons.forEach(button =>{
    button.addEventListener("change", tipCalculator)
})


// The function handler that calculates the tip.
function tipCalculator(){
    const currentTip = Number(document.querySelector('input[name="tip-button"]:checked').value)
    const initialCost = Number(document.querySelector('input[name=initial-cost]').value)
    const tipAmount = Number((initialCost * currentTip).toFixed(2))
    const totalCost = Number((initialCost + tipAmount).toFixed(2))
    // Using text content to change the text
    document.querySelector("#tip-amount").textContent = `Tip Amount: $${tipAmount}`
    document.querySelector("#cost-output").textContent = `Total Cost: $${totalCost}`
}