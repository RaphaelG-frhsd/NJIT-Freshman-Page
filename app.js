
const studentButton = document.getElementById("student-button");
const studentMessage = document.getElementById("student-message");

if (studentButton && studentMessage) {

    studentButton.addEventListener("click", function () {

        
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