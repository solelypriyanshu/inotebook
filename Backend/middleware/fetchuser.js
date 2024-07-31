const jwt = require("jsonwebtoken");
const JWT_SECRET = "Kuchbhi%bolo";



const fetchUser = async (req, res, next) => {
//Get the user from the jwt token and add an id to request object
    const token = req.header('auth-token');
    if (!token) {
            //401 is access denied
        return res.status(401).json({ error: 'Please authenticate using a valid token' });
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
    } catch (error) {
        return res.status(401).json({ error: 'Please authenticate using a valid token' });
    }
    next();

}
module.exports = fetchUser;