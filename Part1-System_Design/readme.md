# Part 1: E-Commerce System Design

This project is a simple e-commerce system design that includes user management, product management, order processing, and payment processing.

## Project Structure

The project is organized into the following main directories:

- `models/`: Contains MongoDB schema definitions
- `controllers/`: Contains the business logic stubs for each entity

## Models

1. **User Model** (`models/userModel.js`)
   - Stores user information including username, email, password, and order history
   - Includes methods for password hashing and comparison

2. **Product Model** (`models/productModel.js`)
   - Defines product attributes such as name, description, price, stock, category, and images

3. **Order Model** (`models/orderModel.js`)
   - Represents user orders, including references to user, products, quantities, and order status

4. **Payment Model** (`models/paymentModel.js`)
   - Manages payment information including order reference, transaction ID, amount, payment method, and status

## Controllers

1. **User Controller** (`controllers/userController.js`)
   - Handles user-related operations like creation, updating, cart management, and order retrieval

2. **Product Controller** (`controllers/productController.js`)
   - Manages product operations including creation, retrieval, updating, and deletion

3. **Order Controller** (`controllers/orderController.js`)
   - Responsible for order creation and status updates

4. **Payment Controller** (`controllers/paymentController.js`)
   - Handles payment operations such as creation, retrieval, updating, and cancellation

## Class Diagram

A class diagram illustrating the relationships between the different entities in the system should be included here. This diagram would visually represent how the User, Product, Order, and Payment models are interconnected.

<img src="system_design.png" alt="Class Diagram" style="background-color: white;" />