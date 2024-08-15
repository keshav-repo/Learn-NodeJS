// import ChatRoom from "./ChatRoom";

const ChatRoom = require("./ChatRoom");

const chatRoom = new ChatRoom();

chatRoom.on("join", (username) => {
    console.log(`Welcome, ${username}!`);
});
chatRoom.on("message", (sender, recipient, message) => {
    const recipientListener = chatRoom.users[recipient];
    if (recipientListener) {
        recipientListener(sender, message);
    } else {
        console.log(`User ${recipient} not found.`);
    }
});

chatRoom.on("leave", (username) => {
    console.log(`Goodbye, ${username}. See you next time!`);
});

module.exports = chatRoom;
