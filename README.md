Hello, this application was to help give users a random password, in case they werent sure what to use, or if they want a strong password. Let's get started, you'll see how easy it is!

Once you run the program, you will need to enter a command. In case you miss some information, or input it wrong. The default systems will help to give you a password. Here is an example on a password set to 10 characters, and disabled symbols.

node index.js length=10 symbols=false

Note in this command, the length is set to 10, while symbols are set to false. The default settings makes a 8 character password, that includes symbols. If you give it a option that just isnt possible, such as length=abc, youll be set with the default character length. This will aslo work if you give a impossible value for symbols. If you set the password to 26 characters or above, this will go through the max characters of 25. You will then be given a 25 character password.

Each command must start with node index.js
If the command ends there, you will be prompted with a password of 8 characters without symbols.

Thank you for using this application. Make sure to stay safe on the web.