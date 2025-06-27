# Reflection Questions
## 1. How did event.preventDefault() help in handling form submission?
- by preventing default submission behaviors, you have more control over how the browser handles input data and data submission and validation, refreshing, etc.

## 2. What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
  - HTML5 validation handles simple validation tasks, while javascript allows for more customizable and complex validation and validation messages.  HTML5 should be used where simple validation and return messages are all you need, while Javascript for handling errors differnetly, such as using an error span to display the message, comparing values such as password and confirm password.  A good mix of both creates a more robust and performant app.
    
## 3. Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
- When the script is loaded, it checks to see if localstorage has a key-value pair it can pull, and if it does it fills out the username portion with that username.  If not, it leaves it blank.  Upon saving a form, localstorage sets a key-value pair under username.  Local storage should not be used for sensitive data due to the persistent nature of it, as any weaknesses or exploits could allow access to such data.
  
## 4. Describe a challenge you faced in implementing the real-time validation and how you solved it.
- I did not find this very difficult.  Blur seemed very straightforward and easy to use with a proper mix of custon validation messages and applying these to the error span. 

## 5. How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
- Proper use of logic flow with if-else statements.  I ensured that custom error messages were both concise and clear on the input to which they were attached.
