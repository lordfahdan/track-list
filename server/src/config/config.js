module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'trackerlist',
        user: process.env.DB_USER || 'trackerlist',
        password: process.env.DB_PASS || 'trackerlist',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tracketlist.sqlite'
        }
    }
}