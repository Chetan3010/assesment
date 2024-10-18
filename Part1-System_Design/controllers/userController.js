/**
 * @param {Object} userData  - User details to create a new user
 */
const createUser = async (userData) => {
    // Logic for creation of new user
}

/**
 * @param {String} userId - User id ref of user model
 * @param {Object} newUserData - Object of users details to be updated data
 */
const updateUser = async (userId, newUserData) => {
    // Logic for updating user details
}

/**
 * @param {String} userId - User id ref of user model
 * @param {String} productId - Product id ref of product model
 */
const updateCart = async (userId, productId) => {
    // Logic for updating cart
}

/**
 * @param {String} userId - User id ref of user model
 * @param {Object} orderData - Object of order details
 */
const addOrder = async (userId, orderData) => {
    // Logic for adding order to user
}

/**
 * @param {String} userId - User id ref of user model
 */
const retriveOrders = async (userId) => {
    // Logic for retriving user orders
}

module.exports = {
    createUser,
    updateUser,
    updateCart,
    addOrder,
    retriveOrders
}