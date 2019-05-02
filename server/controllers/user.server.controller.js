import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.server.model';

export function register(req, res) {
    let newUser = new User(req.body);
    User.findOne({
        username: newUser.username
    }, function(err, user) {
        if (err) throw err;
        if (!user) {

            newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
            newUser.save(function(err, user) {
                if (err) {
                    return res.status(400).send({
                        message: err
                    });
                } else {
                    user.hash_password = undefined;
                    return res.json(user);
                }
            });
        } else {
            return res.status(409).send({
                message: "Username taken"
            })
        }
    })
}

export function signIn(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;
        if (!user) {
            res.status(401).send({message: 'Authentication failed. User not found'});
        } else if (user) {
            if (!user.comparePassword(req.body.password)) {
                res.status(401).send({ message: 'Authentication failed. Wrong password' })
            } else {
                return res.send({token: jwt.sign({ username: user.username, _id: user._id}, 'secret')});
            }
        }
    });
}

export function validateToken(req, res) {
    const token = req.body.token;
    jwt.verify(token, 'secret', function(err, decode) {
        if (err) {
            res.status(404).send();
        } else {
            res.status(200).send(decode);
        }
    });
}
