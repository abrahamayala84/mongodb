
const jwt = require('jsonwebtoken');


const generatejwt = (id) => {
    const secret = process.env.SECRET_TOKEN;

    return jwt.sign({
        id: id
     }, secret, {expiresIn: '8h' }
    )

}

const verifyjwt = (token) => {
    const secret = process.env.SECRET_Token;

return jwt.verify({token, secret})

}

module.exports = {
    verifyjwt, generatejwt
}