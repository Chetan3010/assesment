
/**
 * Process orders and Update stocks levels
 * @param {Object} products - Objects of products and their current stock levels.
 * @param {Array} orders - Array of orders, where each order is object of product and quantity.
 * @param {number} [restock_threshold=10] - Threshold below to trigger restock alert.
 * 
 * @returns {Array} - Returns array of updated stock levels and list of restock items.
 * @throws {Error} - If input parameters are invalid.
*/
function process_orders(products, orders, restock_threshold = 10) {
    if (!products || typeof products !== 'object') {
        throw new Error('Invalid products input. Expected non-null object.');
    }
    if (!Array.isArray(orders)) {
        throw new Error('Invalid orders input. Expected array.');
    }

    let restockAlert = new Set()

    for (const order of orders) {
        if (typeof order !== 'object') {
            console.error('Invalid order format. Skipping.');
            continue;
        }
        for (const [product, quantity] of Object.entries(order)) {
            if (!(product in products)) {
                console.error(`${product} is not a valid product!`);
                continue;
            }

            if (products[product] < quantity) {
                console.error(`Product ${product} is currently out of stock!`)
                continue;
            }

            products[product] -= quantity

            if (products[product] < restock_threshold) {
                restockAlert.add(product)
            }
        }
    }

    return [products, Array.from(restockAlert)];
}

/**
 * Restock items in the inventory.
 * @param {Object} products - Objects of products and their current stock levels.
 * @param {Object} restockList - Objects of products to restock with their quantities.
 * @returns {Object} - Updated list of products.
 * @throws {Error} - If input parameters are invalid.
 */
function restock_items(products, restockList) {
    if (!products || typeof products !== 'object') {
        throw new Error('Invalid products input. Expected non-null object.');
    }
    if (!restockList || typeof restockList !== 'object') {
        throw new Error('Invalid restockList input. Expected non-null object.');
    }

    for (const [product, quantity] of Object.entries(restockList)) {
        if (!(product in products)) {
            console.error(`${product} is not a valid product in inventory!`);
            continue;
        }

        if (quantity <= 0) {
            console.error(`Invalid quantity for ${product}. Must be a positive number.`)
            continue;
        }

        products[product] += quantity
    }

    return products;
}

function main() {
    // Initial Inventory
    let inventory = {
        shirt: 13,
        tshirt: 20,
        jeans: 23,
        hoddie: 15,
        jacket: 2,
        cargo: 12
    }

    // Sales orders
    let orders = [
        {
            shirt: 2, jeans: 1, jacket: 1
        },
        {
            hoddie: 1, tshirt: 3, jeans: 1, cargo: 1
        },
        {
            cargo: 1, tshirt: 2, jacket: 2
        }
    ]

    // Processing orders
    try {
        const [updatedInventory, restockAlerts] = process_orders(inventory, orders)
        console.log("Updated Inventory -> ", updatedInventory);
        console.log("Restock Alerts -> ", restockAlerts);

        const restockItems = { jacket: 5, jeans: 3, tshirt: 7 }

        const finalInventory = restock_items(updatedInventory, restockItems)
        console.log("Updated Inventory after restock -> ", finalInventory);

    } catch (error) {
        console.error('Error occurred:', error.message);
    }
}

main()