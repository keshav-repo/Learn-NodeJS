const chatRoom = require("./app");

chatRoom.join("Alice");
chatRoom.join("Bob");
chatRoom.join("Charlie");

chatRoom.sendMessage("Alice", "Bob", "Hey Bob, how are you?");
chatRoom.sendMessage("Bob", "Alice", "I'm good, Alice! How about you?");
chatRoom.sendMessage("Alice", "Charlie", "Hi Charlie!");
chatRoom.sendMessage("Charlie", "Alice", "Hello Alice!");

chatRoom.leave("Alice");
chatRoom.leave("Bob");
chatRoom.leave("Charlie");
