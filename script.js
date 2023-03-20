
/* window.addEventListener("DOMContentLoaded", function() {
    const welcomeMessages = [
        { name: "Ryan", message: "Welcome Sir Master Ryan!" },
        { name: "Matt", message: "Eyoo Samsquanch has landed!" },
        { name: "Lee", message: "Lanky Box Fanatic in the house!" }
      ];
      
      const userName = prompt("Halt! Who goes there?:");
      
      let message;
      const userExists = welcomeMessages.find((user) => user.name === userName);
      
      if (userExists) {
        message = userExists.message;
      } else {
        message = `Welcome ${userName}!`;
        welcomeMessages.push({ name: userName, message });
      }
      
      const welcomeMessageElement = document.getElementById("welcome-message");
      welcomeMessageElement.innerHTML = message;
  }); */