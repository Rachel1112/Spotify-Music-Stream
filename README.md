# Music streaming service interface

This project is a web application that provides a music streaming service. It is built using the MERN (MongoDB, Express.js, React, and Node.js) technology stack. The front-end of the application is developed using React, Ant Design for UI components, and Axios for making API requests. The back-end is built with Node.js and utilizes Mongoose as the object data modeling (ODM) library for MongoDB.


## Getting Started

### Prerequisites

Before you can run the project, you must have the following installed:

- Node.js

  - You can download Node.js from the official website at [https://nodejs.org](https://nodejs.org/). Choose the appropriate version for your operating system, and follow the instructions for installation.

  - Once Node.js is installed, you can verify the installation in the terminal and running the following command:

    ```
    node -v
    ```

- MongoDB

  - Download MongoDB: download the MongoDB Community Server from the official website (https://www.mongodb.com/try/download/community) and follow the installation instructions for your operating system.

  - Create data directories: MongoDB stores data in a directory specified by the `dbpath` option. By default, this directory is `/data/db` on Linux and macOS. However, you can specify a different directory using the `--dbpath` command-line option or by setting it in the configuration file. If the data directory `/data/db` doesn't exist, you need to create it manually.

  - Start the MongoDB server: After installing MongoDB, you can start the server using the `mongod` command. You can change the port using the `--port` option.

  - Connect to the server: 
    
    Open a terminal (such as cmd on Windows) to move to the installation directory of MongoDB, like:
    `````
    cd C:\Program Files\MongoDB\Server\6.0\bin
    `````
    
    Run the following command to connect to the database:
    `````
    mongod --dbpath <your-mongodb-data-directory>    # ...\data\db
    `````

    You can connect to the MongoDB server using the `mongo` command. Open another terminal and run this command.

    ```
    mongo
    ```

    By default, the `mongo` command connects to the server running on `localhost:27017`. If you're connecting to a remote server, you need to specify the host and port using the `--host` and `--port` options.

  - MongoDB Compass

    MongoDB Compass is a GUI tool for MongoDB that allows you to easily explore and manipulate your data. You can find its detailed information at https://www.mongodb.com/products/compass.

### Installation

1. In the `FrontEnd` folder and the `BackEnd` folder, install dependencies separately:

```
npm install
```

2. Configure the environment variables for the back-end. In the `BackEnd` directory, create a `.env` file and add the following:

```
MONGO_URI=<your-mongodb-uri>
```

​		Replace `<your-mongodb-uri>` with the URI of your MongoDB database(usually mongodb://localhost:27017).

3. Start the server. In the `BackEnd` directory, run:

```
npm run start
```

4. Start the client. In the `FrontEnd` directory, run:

```
npm install jquery
npm run start
```
Make sure the jQuery script is fully loaded into your browser!!! Or you will encounter compilation problems the first time, please close the FrontEnd port and try again.


5. Registration requirements
```

To register an account in the web database:
For email: Please enter 4 to 20 characters in English and numbers that conform to the mailbox format and end with a .com
          Format: "number" + @ + "vocabulary" + ".com" (e.g., 4567@qq.com)
For username: Please enter 4 to 20 characters consisting of English and numbers, and the number cannot be preceded. (e.g., CS2201)
For password: Please enter 8 to 20 characters consisting of English and numbers. (e.g., cs732great)

```
**Note**: If you still have the error "MongoError: connect ECONNREFUSED 127.0.0.1:27017" when registering, you can go to the `\BackEnd\models` directory.
Find the `music.js` and `user.js` documents.
Modify the code:
```
var url = "mongodb://localhost:27017/music";
```
To:
```
var url = "mongodb://127.0.0.1:27017/music";
```
This might help you solve the problem.

6. Change user permissions

After login into the website, we can only audition songs. Now we need a Spotify member account.

(1) Find the **player** at the website's bottom.

(2) Click the **logo** in the upper right corner. We will jump to Spotify's official website.

(3) Click on the upper right corner of the Spotify official website. Use the following **email** and **password** to log in:

```
Email: 956774414@qq.com
Password: cs732123321
```

(4) Return to our website. Now we can listen to the whole song. 


# Interface usage

## '/search' method: get
Query song information
- After entering keywords into the search box, click the "search" button. The web page will display all search results.

## '/login' method: get
The user is logged in, and encryption is used.
- Call the information in the MongoDB database. If the information is correct, allow the user to log in and jump to the music playback interface.

## '/register' method: post
Registered user
- Let users register information. The program will generate an encrypted token.

## '/music' method: post
New solo song
- After searching for songs, click the "add" button. The music will be added to the playlist.
- Then click the "play" button in the playlist. The song will be illustrated in the player.
- The user can drag the progress bar and click Pause/Start button to control playback.

## '/music' method: delete
Delete the song data in the playlist according to the song id.



