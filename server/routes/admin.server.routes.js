import { findUser, listUsers, adminRequired } from '../controllers/admin.server.controller';

export default function(app) {
    app.route('/api/admin/find')
        .get(adminRequired, findUser);

    app.route('/api/admin/list')
        .get(adminRequired, listUsers);
}