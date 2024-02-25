# introduction
This is a small project to better understand react. The project is composed of a list of cards/templates holding some of the commmon words an urban dictionary has. The concepts I aimed to understand in the making of this project were : 1. components in react 2. props in react 3. looping through data in react : 

# U/I
The library used was Vite and the plan was to create a user interface that display urban/ street words and still add functionality by adding a search button and a "addNewWords" button.

# Content
Header component: Displays a header section.

Body component: Represents individual data items.

App component: Main component that orchestrates the rendering of the header and the data cards.

The data is looped through using the .map() method, rendering individual Card components for each data item.

# BUG
The search functionality is still a bug currently working on, it displays my whole list of words which I dont want it to. I wanted the search button to display the card intented at the top for ease of reading by the client.

# Contribution
How to Run:
Clone this repository.
Install dependencies using npm install.
Run the project using npm run dev.