// ========================================
// NJIT COLLEGE RECRUITMENT WEBSITE
// CUSTOM JAVASCRIPT
// ========================================


// Get the button and message from the HTML
const studentButton = document.getElementById("student-button");
const studentMessage = document.getElementById("student-message");


// Make sure the elements exist before adding the event
if (studentButton && studentMessage) {

    studentButton.addEventListener("click", function () {

        // Check whether the message is currently visible
        if (studentMessage.style.display === "block") {

            // Hide the message
            studentMessage.style.display = "none";

            // Change the button text
            studentButton.textContent = "Learn More";

        } else {

            // Show the message
            studentMessage.style.display = "block";

            // Change the button text
            studentButton.textContent = "Hide Information";

        }

    });

}