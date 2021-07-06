# 301 Entrance Exam

**Instructions:**
Make sure before starting to:

Turn off any means of communication (phone, Slack and Email).

Start your screen recording.

You are not allowed to use previous projects, notes , or GitHub.

You can use Google search engine.

Use the console to debug.

Use the reset.css provided in the slack message

******************************************************

#### Exam:
Create a new repository on your Github and name it 'movie-list'.

Build a one-page website using HTML, CSS, and Vanilla Javascript. The wire-frame of the targeted page is attached to Slack.

You will be building a simple webpage "My Movie list" which contains all of the movies that you like.

- As a user, I would like to be able to add new movies so I can track the movies I have in my list. 
    - Create a form in order to add the **movie name** and **movie category** and **issue year**. 
    - The category should have a predefined list that contains the following categories: 
        - Action
        - Adventure
        - Animation
        - Comedy
        - Detective
        - Fantasy
        - History
        - Horror
        - Musical
        - Pirate
        - Romantic
        - SCI-FI
        - War
        - Western

- As a user, I would like to view all of my Movies that I already added so that I can quickly view my movies in my list. 
- Whenever you add a movie using the form, you should use the local storage in order to get all the movies from it and render them using **DOM**.
- As a user, I would like to see along side the movies information, the movie name, issue year, and image. The movie images can be found in the folder directory img.

**Stretch Goals**
- As a user, I would like to delete any chosen movie so I can handle the movies in my list. - When you press on the 'X' button, the movie should be deleted from the rendered DOM and the local storage.

- As a user, I would like to have the option to clear the whole rendered DOM. There will be a button when clicked it will clear the local Storage and the rendered DOM.

******************************************************
Do this work on the '**main**' branch.
Create an HTML file and convert the wireframe into HTML structure.

Create a CSS file to apply the style.

> Used font is "Roboto" -> [Google Font](https://fonts.google.com/).

Used colors are: 
- ![#39A2DB](https://via.placeholder.com/15/39A2DB/000000?text=+) `#39A2DB`
- ![#053742](https://via.placeholder.com/15/053742/000000?text=+) `#053742`
- ![#E8F0F6](https://via.placeholder.com/15/E8F0F6/000000?text=+) `#E8F0F6`

Table head, footer color:
- ![#A2DBFA](https://via.placeholder.com/15/A2DBFA/000000?text=+) `#A2DBFA`
- ![#77ACF1](https://via.placeholder.com/15/77ACF1/000000?text=+) `#77ACF1`

Buttons:
- ![#a10909](https://via.placeholder.com/15/a10909/000000?text=+) `#a10909`
- ![#71c7ec](https://via.placeholder.com/15/71c7ec/000000?text=+) `#71c7ec`

Create a js file to handle the functionality.

Handle adding the movies to the HTML using the DOM and local storage.
Handle getting the movies from the local storage and rendering them.
Handle removing the selected movies from the list.

******************************************************

#### Grades Rubric:
HTML (5 Marks) 
- Header (1)
- Form (4)

CSS (25 Marks): 
- Header (5) 
- form (10) 
- rendered DOM (10)

Linting (5 Marks):
- ESLint (5)

JavaScript (55 Marks): 
- Constructor, properties and prototypes (15)
- Event listener and retrieving form data: (10)
- Store data to local storage (5)
- Check and load data from local storage (10)
- Render the DOM (15) 

General (10 Marks):
- Code style (naming conventions, indentation ..) (5)
- Deploying on GitHub Pages (5)

**Stretch Goals** 
- Remove the chosen item from the list (10)
- Create table head (5)

P.S.: you MUST use constructor and local storage in order to solve this problem PLUS when you refresh the page, all the data should be persistent.

******************************************************

#### Submission Instructions:
- Submit the link of your GitHub repo.
- Submit your live URL after deploying your site with GitHub pages.
- After completing the exam, do NOT commit or push anything to your repo.