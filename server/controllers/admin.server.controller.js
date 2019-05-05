import User from '../models/user.server.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export function listUsers(req, res) {
    console.log("Finding all users");
    User.find({}, function(err, users) {
        if (err) throw err;

        const cleanUsers = users.map(user => user.username)
        res.json(cleanUsers);
    })
}

export function findUser(req, res) {
    const query = req.query.user.toLowerCase();
    User.find({
        username_lower: { $regex: query },
    })
        .exec(function(err, users) {
            if (err) throw err;

            const cleanUsers = users.map(user => user.username);
            res.json(cleanUsers);
        })
}

export function registerAdmin() {
    const username = "admin";
    const password = "admin";
    let adminUser = new User({
        username: username,
        password, password,
        username_lower: username
    });

    User.findOne({
        username: adminUser.username
    }, function(err, user) {
        if (err) throw err;
        if (!user) {

            adminUser.hash_password = bcrypt.hashSync(password, 10);
            adminUser.save();
        }
    });
}

export function adminRequired(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] == 'Bearer') {
        jwt.verify(req.headers.authorization.split(' ')[1], 'secret', function (err, decode) {
            if (!err && decode.username == "admin") {
                next();
            } else {
                return res.status(401).json({ message: 'Unauthorized user!'});
            }
        });
    } else {
        return res.status(401).json({ message: 'Unauthorized user!'});
    }
}