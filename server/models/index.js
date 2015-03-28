if (!global.hasOwnProperty('db')) {
    var Sequelize = require('sequelize'), sequelize = null;

    if (process.env.HEROKU_POSTGRESQL_BRONZE_URL) {
        sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
            dialect:  'postgres',
            protocol: 'postgres',
            port:     match[4],
            host:     match[3],
            logging:  true //false
        });
    } else {
        sequelize = new Sequelize('database', 'root', 'null', {
            host: 'localhost',
            dialect: 'sqlite',
            storage: './server/dev/db.development.sqlite'
        });
    }

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        User:      sequelize.import(__dirname + '/user')
          // add your other models here
    };
}

module.exports = global.db;
