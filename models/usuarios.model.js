const query = require('../db/db-conexion');
const data = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');


class UserModel{

    tableName = 'users';

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { data, values } = multipleColumnSet(params)
        //sql += ` WHERE ${data}`;

        return await query(sql, [...values]);
    }
}

module.exports = UserModel;