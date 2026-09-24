// Finds the button with the ID "student-button" in the HTML
// and stores it in the studentButton variable.
const studentButton = document.getElementById("student-button");

// Finds the element with the ID "student-message" in the HTML
// and stores it in the studentMessage variable.
const studentMessage = document.getElementById("student-message");

// Checks that both the button and the message were successfully found
// before trying to use them.
if (studentButton && studentMessage) {

    // Adds a click event to the student button.
    // The function inside will run every time the button is clicked.
    studentButton.addEventListener("click", function () {

        // Checks whether the student message is currently being displayed.
        // "block" means the message is visible.
        if (studentMessage.style.display === "block") {

            // Hides the student message by changing its display style to "none".
            studentMessage.style.display = "none";

            // Changes the button's text back to "Learn More".
            studentButton.textContent = "Learn More";

        } else {

            // Shows the message by changing its display style to "block".
            studentMessage.style.display = "block";

            // Changes the button's text to "Hide Information".
            studentButton.textContent = "Hide Information";

        }

    });

}