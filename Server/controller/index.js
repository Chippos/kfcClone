const shop = require('./shop.controller')
const singUp = require('./signup.controller')
const signIn = require('./signin.controller');
const order = require('./order.controller')
const findById = require('./productById.controller')
module.exports= {
    shop,
    singUp,
    signIn,
    order,
    findById,
}