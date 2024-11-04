document.getElementById("submitBtn").addEventListener("click", function() {
    const dropdowns = document.querySelectorAll(".reflection-dropdown");
    let allSelected = true;
    const selections = [];

    dropdowns.forEach(dropdown => {
        const selectedValue = dropdown.value;
        if (!selectedValue) {
            allSelected = false;
            alert("Please make a selection in all dropdowns.");
            return;
        }
        selections.push(selectedValue);
    });

    if (allSelected) {
        // Log selections to the console
        console.log("User selections:", selections);
        
        // Display a thank-you message to the user
        alert("Thank you for submitting your reflections!");

        // Store selections in local storage (optional)
        localStorage.setItem("reflections", JSON.stringify(selections));

        // Show the success message
        document.getElementById("successMessage").style.display = "block";

        // Optional: Communicate with Storyline by setting a variable
        // This requires a variable in Storyline, e.g., `UserSelections`
        if (window.parent) {
            window.parent.SetPlayerVariable("UserSelections", JSON.stringify(selections));
        }
    }
});


