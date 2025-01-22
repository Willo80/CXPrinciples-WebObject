document.getElementById("submitBtn").addEventListener("click", function () {
    const functionValue = document.getElementById("Function").value;
    const customerValue = document.getElementById("Customers").value;

    const reflections = {
        MakeItEasy: document.getElementById("MakeItEasy").value,
        BeTrustworthy: document.getElementById("BeTrustworthy").value,
        KnowMe: document.getElementById("KnowMe").value,
        BringValue: document.getElementById("BringValue").value
    };

    if (!functionValue || !customerValue || Object.values(reflections).some(value => !value)) {
        alert("Please complete all fields before submitting.");
        return;
    }

    // Create email
    const emailBody = `
    Primary Function: ${functionValue}
    Primary Customers: ${customerValue}

    Reflections:
    - Make It Easy: ${reflections.MakeItEasy}
    - Be Trustworthy: ${reflections.BeTrustworthy}
    - Know Me: ${reflections.KnowMe}
    - Bring Value: ${reflections.BringValue}
`;

window.location.href = `mailto:?subject=CX Reflections&body=${encodeURIComponent(emailBody)}`;

// Optional: Display a success message
document.getElementById("successMessage").style.display = "block";
});