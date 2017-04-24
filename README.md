# Bot-Challenge

Steps for running application:

1. Download or clone the project to local machine
2. Extract the files to a working directory
3. Move to working directory
4. Run "node server" on your terminal

Work Flow Explanation:

1. app.js file is the file which contains all routing information. (location : app/app.js)
2. server.js file is used to load all modules requried for this application to run
3. Package.json file contains all the dependencies
4. index.html is used to load all the scripts, css, libraries and controller files
5. ChatBot folder inside app folder contains all the files required for chatbot queries
6. login-signup folder inside app folder contains all the files required for displaying login page
7. Home folder inside app folder contains all files required for displaying queries tabs after logging in
8. All controllers are located under server/controllers

Flow will be like: 

1. user has to register
2. user has to use his email and password to log in to application
3. after logging into application user will be directed to helper dashboard
4. This dashboard contains various links to chatbot which interacts with a human to get information regarding their issuses
5. This conversational api has been built using chatbot java script library
6. While using chatbot library we need to define various patterns for each issue so that bot will interact with human properly
