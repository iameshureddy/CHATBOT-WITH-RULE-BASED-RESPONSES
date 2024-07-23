const rules = {
    "hello": "Hi there! How can I help you today?",
    "hi": "Hi there! How can I help you today?",
    "bye": "Goodbye! Have a great day!",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I am a chatbot created to assist you.",
    "who created you": "I was created by a team of developers.",
    "what can you do": "I can answer your questions and assist with various tasks.",
    "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "what is the weather today": "I'm not equipped to provide weather updates, but you can check your local forecast online.",
    "thank you": "You're welcome!",
    "you're welcome": "No problem!",
    "good morning": "Good morning! How can I assist you today?",
    "good night": "Good night! Sweet dreams!",
    "what time is it": "I'm not able to provide the current time. Please check your device.",
    "what is the date today": "Please check your device for the current date.",
    "can you help me": "Sure! What do you need help with?",
    "i need assistance": "I'm here to help! What do you need assistance with?",
    "what is your purpose": "My purpose is to assist and provide information.",
    "where are you from": "I exist in the digital world, created by developers.",
    "what is 2 + 2": "2 + 2 is 4.",
    "tell me a fun fact": "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "who are you": "I am a chatbot designed to assist you.",
    "tell me a story": "Once upon a time, in a land far, far away...",
    "what's your favorite color": "I don't have preferences, but I can say that many people love blue.",
    "do you have any hobbies": "I don't have hobbies, but I enjoy helping you.",
    "what is your favorite movie": "I don't watch movies, but I hear 'The Matrix' is quite popular.",
    "do you have any pets": "I don't have pets, but I can tell you a lot about them!",
    "what's your favorite food": "I don't eat, but I know pizza is a favorite for many people.",
    "how old are you": "I don't have an age, but I'm as old as my latest update.",
    "what is love": "Love is a complex set of emotions and beliefs associated with strong feelings of affection.",
    "define happiness": "Happiness is a state of well-being and contentment.",
    "where do you live": "I live in the cloud, accessible from anywhere with an internet connection.",
    "can you drive": "I can't drive, but I can help you find directions!",
    "what's your favorite song": "I don't listen to music, but I know 'Bohemian Rhapsody' is a classic.",
    "tell me a quote": "Sure! 'The only limit to our realization of tomorrow is our doubts of today.' - Franklin D. Roosevelt",
    "do you like reading": "I don't read for leisure, but I can provide information from texts.",
    "can you dance": "I can't dance, but I can help you find some great dance music!",
    "do you have a family": "I don't have a family, but I consider all users as friends.",
    "what's the meaning of life": "That's a profound question! Many say it's about finding happiness and purpose.",
    "can you cook": "I can't cook, but I can share some great recipes!",
    "what's your favorite book": "I don't read books, but many people enjoy 'To Kill a Mockingbird'.",
    "are you real": "I am a real program, but not a living being.",
    "do you believe in ghosts": "I don't have beliefs, but many cultures have stories about ghosts.",
    "what's your favorite sport": "I don't play sports, but I can tell you about many of them.",
    "can you swim": "I can't swim, but I can tell you about swimming techniques.",
    "do you have friends": "I don't have friends, but I interact with many users.",
    "what's your favorite season": "I don't experience seasons, but many people love spring."
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const messagesDiv = document.getElementById('messages');

    let response = "I'm not sure how to respond to that.";

    for (const rule in rules) {
        if (userInput.includes(rule)) {
            response = rules[rule];
            break;
        }
    }

    const userMessage = document.createElement('div');
    userMessage.className = 'message';
    userMessage.textContent = "User: " + userInput;
    messagesDiv.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'message';
    botMessage.textContent = "Bot: " + response;
    messagesDiv.appendChild(botMessage);

    document.getElementById('user-input').value = '';
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}