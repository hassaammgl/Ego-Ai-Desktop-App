const close = document.getElementById("mainwinclose");
// const titleInput = document.getElementById("title");
// const inputField = document.querySelector(".chat-input");
// const chatContainer = document.querySelector(".chat-container");
// setButton.addEventListener("click", () => {
//   const title = titleInput.value;
//   window.electronAPI.setTitle(title);

//   console.log(window);
// });

// inputField.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     const userMessage = inputField.value;
//     appendMessage(userMessage, "user-message");
//     // Process user input and generate bot response
//     const botResponse = generateBotResponse(userMessage);
//     appendMessage(botResponse, "bot-message");
//     inputField.value = ""; // Clear input field
//   }
// });

// function appendMessage(message, className) {
//   const messageElement = document.createElement("div");
//   messageElement.classList.add("chat-message", className);
//   messageElement.textContent = message;
//   chatContainer.appendChild(messageElement);
// }

// function generateBotResponse(userInput) {
//   // Your logic to generate bot responses goes here
//   // For now, let's keep it simple:
//   return "I'm just a demo chatbot!";
// }
console.log(window.electronAPI);
console.log(close);
// alert("hi")
close.addEventListener("click", () => {
  window.electronAPI.closeWin();
});
