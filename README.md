# Profile Management Application

## Live Demo

You can view the live application at the following link: [Profile Management Application](https://profile-management-6m9j.vercel.app/profile-form).

## Overview

The Profile Management Application allows users to create and manage their profiles. Users can input their name, email, and age. The data is stored in local storage, ensuring that it persists even after refreshing the page. The application also provides features for validating user input and displaying error messages when the input is invalid.

## Features

- **Profile Creation and Update**: Users can create a new profile or update an existing one.
- **Data Persistence**: Profile data is saved in local storage, so it remains available across page refreshes.
- **Input Validation**: The application checks that the name is at least 3 characters long and that the email is in a valid format.
- **Error Handling**: Users receive feedback if they enter invalid data.
- **Context API**: The application uses React Context to manage the global state for profile data.
- **Navigation Bar**: A navigation bar is included for easy access to different parts of the application.
- **Profile Display**: Users can view their profile information and navigate back to the form to make updates.


## Component Overview

### Components

- **Atoms**
  - **UserInput**: A reusable input component that takes in label, value, and change handler as props.

- **Molecules**
  - **ProfileForm**: A form that allows users to input their name, email, and age. It includes validation and error messages.
  - **ProfileDisplay**: Displays the user's profile information retrieved from local storage.

- **Organisms**
  - **Navbar**: The navigation bar that allows users to navigate between the profile form and profile display.

### Contexts

- **ProfileContext**: Manages the global state of the user's profile data, providing access to the profile data and the ability to update it throughout the application.

