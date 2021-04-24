const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MealTypeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    mealtype_id: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('MealType', MealTypeSchema);