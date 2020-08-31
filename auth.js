const auth = require('basic-auth');

const admin = { username: 'admin123', password: '@@admin' };  //change this

module.exports = function (req, res, next) {
    let user = auth(req);
    if (!user || !admin.username || admin.password !== user.pass) {
        res.set('WWW-Authenticate', 'Basic realm="401" ')
        return res.status(401).send('Authentication required');
    }   
    else {
        return res.status(200).send('Authentication Successfully')
    }

    
}
