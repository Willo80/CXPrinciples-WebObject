document.getElementById("submitBtn").addEventListener("click", function () {
    const functionValue = document.getElementById("Function").value;
    const customerValue = document.getElementById("Customers").value;

    const reflections = {
        MakeItEasy: document.getElementById("MakeItEasy").value.trim(),
        BeTrustworthy: document.getElementById("BeTrustworthy").value.trim(),
        KnowMe: document.getElementById("KnowMe").value.trim(),
        BringValue: document.getElementById("BringValue").value.trim()
    };

    // Validate all fields
    if (!functionValue || !customerValue ||
        !reflections.MakeItEasy ||
        !reflections.BeTrustworthy ||
        !reflections.KnowMe ||
        !reflections.BringValue) {
        alert("Please complete all fields before submitting.");
        return;
    }

    // Format email content
    const emailBody = 
`Primary Function: ${functionValue}
Primary Customers: ${customerValue}

Reflections

Make It Easy:
${reflections.MakeItEasy}

Be Trustworthy:
${reflections.BeTrustworthy}

Know Me:
${reflections.KnowMe}

Bring Value:
${reflections.BringValue}`;

    // Trigger email with subject and body
    window.location.href = `mailto:?subject=My CX Reflections&body=${encodeURIComponent(emailBody)}`;

    // Display success message
    document.getElementById("successMessage").style.display = "block";
});
