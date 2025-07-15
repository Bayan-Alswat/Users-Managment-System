# User Management System

This project is a simple web application designed for managing user data. It allows you to add new users, display all existing users from a database, and dynamically toggle each user's status (between 0 and 1) directly on the webpage.

## Features

* **Add Users:** A straightforward form to input user's name and age.
* **Display Users:** All users are shown in an organized table.
* **Dynamic Status Toggle:** A "Toggle" button for each record to switch the `status` value between 0 and 1.
* **Instant Updates:** Changes are reflected on the webpage immediately without needing a page refresh.

## Technologies Used

* **HTML:** For the basic structure of the webpage, form, and table.
* **CSS:** For styling and visual presentation of the front-end.
* **JavaScript :** Handles front-end logic, asynchronous data transfer , and dynamic page updates.
* **PHP:** As the backend scripting language to process data requests and interact with the database.
* **MySQL:** For storing and managing user data.





### Database Setup

1. **Open MySQL administration tool:** Navigate to `http://localhost/phpmyadmin/` in web browser.
2. **Create a new database:** Name it `user_data`.
3. **Create the `users` table:** Inside the `user_data` database, execute the following SQL query:

```sql
CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
age INT NOT NULL,
status INT DEFAULT 0
);
```


### Run the Application

* Ensure the Apache and MySQL servers are running.
* Open web browser and navigate to the following address:
  `http://localhost/project.b/`

