 HEAD
# Contact_Page
Firebase Contact App

This is a Contact Management App developed using React and Vite. The app allows users to store contact details such as name and email address. The app comes with several features, including adding, editing, deleting, searching contacts, as well as notifications for certain actions. The project is designed to be fast, responsive, and efficient.

#Features

1. Add Contact
Users can add a new contact by entering a name and email. The input fields are validated using Yup and Formik to ensure valid entries before submission.

2. Edit Contact
Existing contacts can be updated by selecting a contact and modifying the name or email address. Form validation is applied to ensure correct updates.

3. Delete Contact
Users can delete contacts from the list. Upon deletion, a notification will appear to confirm the successful removal of the contact.

4. Search Contact
Users can search for a specific contact by entering part of the contact's name or email. The search is case-insensitive and works in real-time.

5. Notifications
The app utilizes react-toastify to display notifications for various actions such as:<br><br>

Successful addition, editing, or deletion of a contact.
Validation errors (e.g., invalid email format or missing name).
Notifications are customizable and non-intrusive, ensuring a seamless user experience.

#Technologies Used

React: The UI framework used to build the dynamic interface.<br>
Vite: A fast and optimized development build tool for React projects.<br>
Firebase: Used for potential integration for real-time database or authentication.<br>
Formik: Handles form state management and validation.<br>
Yup: A schema builder for runtime value parsing and validation.<br>
React Icons: Provides a set of customizable icons used throughout the app.<br>
React Toastify: Used to display beautiful and customizable notifications.<br>
TailwindCSS: Provides utility-first CSS for rapid UI development.<br>


#Validation

Form validation is handled with Formik and Yup. The following rules are applied:<br>

Name: Required field.<br>
Email: Required field with valid email format. Users will not be able to submit the form without providing valid information.<br>

#Plugins & Packages

Vite: Vite Official Docs<br>

A fast build tool optimized for front-end development with a modern development server.<br>
Formik: [Formik Official Docs]

A form library that handles form states, validation, and submission effortlessly.<br>
Yup: [Yup Official Docs]

A JavaScript schema builder for form validation.<br>
React Icons: [React Icons Official Docs]

A collection of popular icons from various icon libraries for React projects.<br>
React Toastify: [React Toastify Official Docs]

A library to display customizable notifications and alerts in a React app.<br>
TailwindCSS: [TailwindCSS Official Docs] <br>

A utility-first CSS framework used to create the UI with minimal custom CSS.

#Future Enhancements

Integration with Firebase for persistent data storage.<br>
User authentication for personal contact management.<br>
Enhanced filtering and sorting for a better user experience.<br>
