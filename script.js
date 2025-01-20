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

    // Create the content for the PDF
    const pdfContent = `
    CX Principles Reflection\n
    Primary Function: ${functionValue}
    Primary Customers: ${customerValue}\n
    Reflections:
    - Make It Easy: ${reflections.MakeItEasy}
    - Be Trustworthy: ${reflections.BeTrustworthy}
    - Know Me: ${reflections.KnowMe}
    - Bring Value: ${reflections.BringValue}
    `;

    // Generate a downloadable Blob
    const blob = new Blob([pdfContent], { type: "text/plain;charset=utf-8" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "CX_Reflections.txt"; // Use .txt or convert to PDF with a library if needed
    downloadLink.click();

    // Show success message
    document.getElementById("successMessage").style.display = "block";
});