const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


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
            match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please enter a valid e-mail address']
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


const User = model('User', UserSchema);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

model.exports = User;