const { Schema, model } = require('mongoose');

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            trim: true,
            required: 'Username is Required'
        },

        email: {
            type: String,
            unique: true,
            required: 'Must use valid e-mail',
            match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
        }
    }
)
thoughts

Array of _id values referencing the Thought model

friends

Array of _id values referencing the User model (self-reference)

const User = model('User', UserSchema);

model.exports = User;