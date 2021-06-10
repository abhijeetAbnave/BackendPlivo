module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        from: type.INTEGER,
        to: type.INTEGER,
        time: type.INTEGER
    })
}