import { register, signIn, validateToken } from '../controllers/user.server.controller';

export default function(app) {
    app.route('/api/auth/register')
        .post(register);

    app.route('/api/auth/signin')
        .post(signIn);

    app.route('/api/auth/validate')
        .post(validateToken)
}