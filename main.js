document.addEventListener("DOMContentLoaded", function() {
    const input = document.querySelector("#input");
    const buttons = document.querySelectorAll("button");

    // Vvent handlers for all buttons
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent.trim(); 
            if (value === "=") {
                calculateResult(); 
            } else if (value === "<=") {
                input.value = input.value.slice(0, -1); 
            } else {
                input.value += value; 
            }
        });
    });

    // Result func
    function calculateResult() {
        const expression = input.value.trim();
        if (!expression) return; 

        try {
            const result = eval(expression); 
            input.value = result; 
        } catch (error) {
            console.error("Error:", error); 
        }
    }
});
