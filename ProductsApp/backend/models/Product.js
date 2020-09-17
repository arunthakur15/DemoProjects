const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Product = new Schema({
   name: {
      type: String
   },
   cost: {
      type: Number
   },
   quantity: {
      type: Number
   },
   price: {
      type: Number
   }
}, {
   collection: 'product'
})

module.exports = mongoose.model('Product', Product)