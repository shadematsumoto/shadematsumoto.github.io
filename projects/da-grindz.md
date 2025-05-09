---
layout: project
type: project
image: img/database-command-line.png
title: "Da Grindz Website"
date: 2025
published: true
labels:
  - Prisma
  - React Nextjs
  - Website Design
summary: "As a team, we created a website to track meals and view vendors at the University of Hawai'i at Manoa."
---

![Command Line](../img/database-command-line.png)

The Bank Database Management System is a C++ program designed for ICS 212: Programming Structure to manage bank records through a user-friendly interface. It employs a linked list data structure to dynamically store and manipulate customer account data, including account numbers, names, and addresses. The system features an interactive menu that enables users to:  

- **Add** new records  
- **Print** all records  
- **Search** for a specific record by account number  
- **Delete** a record from the database  

This project demonstrates the practical application of linked lists in C++ for efficient data management. Additionally, it supports file I/O operations to read and write records, preserving data between sessions. The user interface ensures proper input validation and guides users through data entry. The system is designed to be extensible, with potential enhancements such as record updates and more advanced data management features.  

As a solo project, I was responsible for writing the entire codebase. Throughout development, I gained valuable experience in designing well-structured data management systems that can be easily integrated into other projects. To enhance usability for future developers, I maintained clear syntax, implemented Makefiles, and ensured the codebase was readable and maintainable.  

### **Sample Code – Account Number Input Handling**  

Below is a function that ensures valid account number input, demonstrating input validation and error handling:  

```cpp
void getAccountNum(int &uaccountno)
{
    cout << "\nEnter account number: ";

    cin >> uaccountno;
    while (cin.fail() || uaccountno <= 0)
    {
        cin.clear();
        cin.ignore(10000, '\n'); /* Clear buffer */
        cout << "Invalid input. Please enter a positive integer: ";
        cin >> uaccountno;
    }
    cin.ignore(10000, '\n'); /* Clear buffer */
}
```

This function prevents invalid inputs, ensuring users enter positive integers only before processing the account number.

Source: [User Database](https://github.com/shadematsumoto/User-Database).
