# Part 2: Business Logic Implementation

This directory contains the core business logic for our inventory management system.

## Contents

- `index.js`: Main file containing the business logic functions.

## Key Functions

### `process_orders(products, orders, restock_threshold=10)`

This function processes orders and updates stock levels.

Parameters:
- `products`: Object of products and their current stock levels.
- `orders`: Array of orders, where each order is an object of product and quantity.
- `restock_threshold`: Threshold below which to trigger restock alert (default: 10).

Returns:
- Array containing updated stock levels and list of items to restock.

### `restock_items(products, restockList)`

This function restocks items in the inventory.

Parameters:
- `products`: Object of products and their current stock levels.
- `restockList`: Object of products to restock with their quantities.

Returns:
- Updated list of products.


## How to Run

To run the inventory management system:

1. Ensure you have Node.js installed on your system.

2. Navigate to the `Part2-Business_Logic_Implemention` directory in your terminal:

   ```
   cd Part2-Business_Logic_Implemention
   ```

3. Run the following command to execute the script:

   ```
   node index.js
   ```

4. If you want to change some input, you can modify the `products` and `orders` variables in the `index.js` file before running the script.