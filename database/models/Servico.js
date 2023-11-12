module.exports = (Sequelize, DataType) => {
    const Servicos = Sequelize.define('Servico', {
        id_servico: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull: false
          },
        nome_service: {
           type: DataType.STRING,
           allowNull: false
        }
    }, {
        tableName: 'servico',
        timestamps: true
    });

    return Servicos;
};