# todolist

## Overview
The todolist is a modern web application that allows users to manage their tasks effectively. This application provides features for adding, editing, deleting, and marking tasks as complete, along with priority levels and due dates. The intuitive interface makes it easy to keep track of tasks and their statuses.

## Features
- Task Management: Add, edit, and delete tasks with ease.
- Priority Levels: Assign priority to each task (Low, Medium, High).
- Categories: Categorize tasks into Work, Personal, and Shopping.
- Due Dates: Set due dates for tasks to keep track of deadlines.
- Task Completion: Mark tasks as complete and view them visually differentiated.
- Responsive Design: A user-friendly interface that works well on both desktop and mobile devices.

## Technologies Used
- HTML: Structure of the web application.
- CSS: Styling and layout, utilizing **Bootstrap** for responsiveness.
- JavaScript: 
  - Client-side scripting for dynamic functionality.
  - Local storage for persistent task management.
- Font Awesome: For attractive icons.

## Installation
To set up the Enhanced To-Do List on your local machine, follow these steps:

1. Clone the Repository:
   ```bash
   git clone https://github.com/ishagaikwad07/todolist-v1.git
2. Navigate to the Project Directory:
   ```bash
   cd todolist-v1
3. Open the Application: Open index.html in your preferred web browser.

##Usage

*Adding a Task:
Enter the task description in the input field.
Select the priority and category from the dropdown menus.
Set a due date (optional).
Click the "Add Task" button to add the task to your list.

*Editing a Task:
Click the "Edit" button next to the task you want to modify.
The task description will populate the input field for editing. After making changes, the task will be updated.

*Completing a Task:
Click the "Complete" button to mark a task as completed. The task will be visually updated to indicate its completed status.

*Deleting a Task:
Click the "Delete" button to remove a task from your list.

*View Task List:
The task list displays all added tasks along with their details, including priority, category, due date, and completion status.

Local Storage
The application utilizes local storage to save tasks, ensuring that tasks persist even after refreshing the page. Each task is stored as an object with properties like text, priority, category, due date, and completion status.
