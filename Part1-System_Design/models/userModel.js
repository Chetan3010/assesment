const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    orders: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Order'
            }
        ]

    }
})

userSchema.pre('save', async (next) => {

    if (!this.isModified('password')) return next()

    // Logic for hashing/encrypt the password
})

/**
 * 
 * @param {String} password - simple string non-encrypted password to compare with encrypted password (this.password)
 */
userSchema.methods.comparePassword = async (password) => {
    // Logic to compare hashed/encrypted password
}

module.exports = mongoose.model('user', userSchema)