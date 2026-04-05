Skill-11: React API Integration
Fetching Data Using Fetch API, Axios and Local JSON
====================================================

Student   : Ch. Venkata Sai Nikesh
ID        : 2400080138
Section   : 51
GitHub    : https://github.com/NIkesh7474/FSAD-Skill-11

--------------------------------------------------
AIM
--------------------------------------------------
To build a React application that fetches and displays
data from three different sources:

  1. Local JSON file       (public/users.json)
  2. Public REST API       (JSONPlaceholder)
  3. Fake API              (DummyJSON via axios)

A Dashboard component navigates between all three
components using React Router Links.

--------------------------------------------------
WHAT IS THIS PROJECT?
--------------------------------------------------
This project shows how a React frontend can get data
from different sources and display it dynamically.

Part A - Local JSON
  Reads a users.json file stored in the public folder.
  Uses fetch() to load the file.
  Shows: ID, Name, Email, Phone

Part B - Public REST API
  Calls https://jsonplaceholder.typicode.com/users
  Uses fetch() to get real API data.
  Shows: ID, Name, Email, Phone

Part C - Fake API with Axios
  Calls https://dummyjson.com/posts
  Uses axios library instead of fetch().
  Has a Refresh button to reload data.
  Has a dropdown filter to filter posts by User ID.

Part D - Dashboard Navigation
  Home page with 3 buttons.
  Each button opens a different component.
  Uses React Router (BrowserRouter, Routes, Route, Link).

--------------------------------------------------
KEY CONCEPTS USED
--------------------------------------------------
useState
  - Stores data, loading state, error state
  - Updates UI automatically when data changes

useEffect
  - Runs fetch/axios call when component first loads
  - Empty [] dependency means run only once

fetch()
  - Built-in browser function to call APIs
  - Used in LocalUserList and UserList

axios
  - Third-party library for API calls
  - Cleaner syntax than fetch()
  - Used in FakePostList

React Router
  - BrowserRouter wraps the whole app
  - Routes defines all paths
  - Route maps path to component
  - Link navigates without page reload

--------------------------------------------------
PROJECT FILES
--------------------------------------------------
FullStack-Skill-11/
  public/
    users.json              - Local JSON with 5 user records

  src/
    App.jsx                 - Main app with BrowserRouter and Routes
    App.css                 - Global CSS styling for all components
    Dashboard.jsx           - Home page with 3 navigation buttons
    LocalUserList.jsx       - Part A: fetch() from local JSON file
    UserList.jsx            - Part B: fetch() from JSONPlaceholder API
    FakePostList.jsx        - Part C: axios from DummyJSON + filter

  package.json              - Project config with all dependencies
  README.md                 - Project documentation

--------------------------------------------------
TECH STACK
--------------------------------------------------
Technology        Version    Purpose
----------------  ---------  ------------------------------
React             18.2.0     Frontend UI library
React Router DOM  6.22.0     Client-side navigation routing
Axios             1.6.7      HTTP library for API calls
fetch()           Built-in   Browser API for HTTP requests
CSS               -          Styling and layout

--------------------------------------------------
ROUTES
--------------------------------------------------
URL path     Component        Data Source
-----------  ---------------  --------------------------------
/            Dashboard        Navigation home page
/local       LocalUserList    public/users.json via fetch()
/users       UserList         jsonplaceholder.typicode.com
/posts       FakePostList     dummyjson.com/posts via axios

--------------------------------------------------
EXPECTED OUTPUT
--------------------------------------------------
Dashboard (http://localhost:3000)
  +------------------------------------------+
  |    React API Integration Dashboard        |
  |    Choose a data source to explore        |
  |                                           |
  | [Local Users] [Users API] [Fake Posts]    |
  +------------------------------------------+

Local Users (http://localhost:3000/local)
  +----+---------+------------------+------------+
  | ID | Name    | Email            | Phone      |
  +----+---------+------------------+------------+
  |  1 | Adithya | adithya@mail.com | 9876543210 |
  |  2 | Ravi    | ravi@mail.com    | 9123456780 |
  |  3 | Priya   | priya@mail.com   | 9988776655 |
  |  4 | Kiran   | kiran@mail.com   | 9871234560 |
  |  5 | Sneha   | sneha@mail.com   | 9001122334 |
  +----+---------+------------------+------------+

Users API (http://localhost:3000/users)
  +----+------------------+----------------------+----------------+
  | ID | Name             | Email                | Phone          |
  +----+------------------+----------------------+----------------+
  |  1 | Leanne Graham    | Sincere@april.biz    | 1-770-736-8031 |
  |  2 | Ervin Howell     | Shanna@melissa.tv    | 010-692-6593   |
  |  3 | Clementine Bauch | Nathan@yesenia.net   | 1-463-123-4447 |
  | .. | ...              | ...                  | ...            |
  +----+------------------+----------------------+----------------+

Fake Posts (http://localhost:3000/posts)
  Filter by User: [All Users v]  [Refresh]
  - His mother had always taught him
    He was 30 something sitting in a nice enough place...
  - He wondered if it would matter
    It probably doesn't matter what you put in the box...

--------------------------------------------------
HOW TO RUN
--------------------------------------------------
Step 1 - Create React App (first time only)
  npx create-react-app react-api-integration
  cd react-api-integration

Step 2 - Install extra packages
  npm install axios react-router-dom

Step 3 - Replace files
  - Copy all files from src/ folder into your src/
  - Copy users.json into your public/ folder
  - Replace package.json with the given one

Step 4 - Start the app
  npm start

Step 5 - Open browser
  http://localhost:3000

--------------------------------------------------
TASKS COMPLETED
--------------------------------------------------
Task A-1  - users.json created with 5 records
Task A-1  - LocalUserList with fetch() + loading/error
Task B-2  - UserList fetching from JSONPlaceholder
Task C-3  - FakePostList with axios + Refresh button
Task D-4  - Dashboard with 3 navigation Links
Task D-5  - App.jsx with BrowserRouter and Routes
Task D-6  - Dropdown filter by userId in FakePostList
Task D-7  - CSS styling applied to all components
Task 8    - Project pushed to GitHub

--------------------------------------------------
GIT COMMANDS TO PUSH TO GITHUB
--------------------------------------------------
Step 1 - Go into the React project folder
  cd C:\Users\HP\react-api-integration

Step 2 - Initialize git
  git init

Step 3 - Stage all files
  git add .

Step 4 - Commit with message
  git commit -m "Skill11: React API Integration - Fetch, Axios, Local JSON"

Step 5 - Add remote origin
  git remote add origin https://github.com/NIkesh7474/FSAD-Skill-11

Step 6 - Rename branch to main
  git branch -M main

Step 7 - Push to GitHub
  git push -u origin main --force

Note: When asked for password, enter your
      Personal Access Token (not GitHub password)

IMPORTANT: Make sure you are INSIDE the project folder.
Run "dir" to confirm you can see src/ and package.json
before running git commands.

--------------------------------------------------
