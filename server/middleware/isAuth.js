const jwt = require("jsonwebtoken")

isAuth =(req, res, next) =>{
    try {
        const token = req.headers.token;
        jwt.verify(token, '!cL)bF9(ZLD/6)y<');
        req.userId = jwt.decode(token);
        next();
    } catch (e) {
        console.log(e);
    }
}

module.exports = isAuth