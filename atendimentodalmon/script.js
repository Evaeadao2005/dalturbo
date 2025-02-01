let step = 0;
let userName = "";
let userDevice = "";
let userPlan = "";
let userTVBrand = "";
let discountPrice = 0;

const chatBox = document.getElementById("chat-box");

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Bom dia!";
  if (hour < 18) return "Boa tarde!";
  return "Boa noite!";
}

function addMessage(message, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addTypingMessage() {
  const typingMessage = document.createElement("div");
  typingMessage.classList.add("message", "bot", "typing");
  typingMessage.textContent = "Digitando...";
  chatBox.appendChild(typingMessage);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingMessage() {
  const typingMessages = document.querySelectorAll(".typing");
  typingMessages.forEach(msg => msg.remove());
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const userInput = input.value.trim();
  if (!userInput) return;

  addMessage(userInput, "user");
  input.value = "";

  processBotResponse(userInput);
}

function processBotResponse(userInput) {
  addTypingMessage();

  setTimeout(() => {
    removeTypingMessage();

    if (step === 0) {
      userName = userInput;
      addMessage(`${getGreeting()} Certo, ${userName}. Qual dispositivo você usará? (Ex: Celular Android, iPhone, TV Smart, TV Box, etc.)`, "bot");
      step++;
    } else if (step === 1) {
      userDevice = userInput.toLowerCase();
      if (userDevice.includes("tv") && !userDevice.includes("box")) {
        addMessage("Qual
