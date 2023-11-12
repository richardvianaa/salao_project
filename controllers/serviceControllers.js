const databases = require('../database/models');

const serviceController = {
    index: async (req, res) => {
        const servicesAll = await databases.Servico.findAll()

        return res.json(servicesAll);
    },
    create: async (req, res) => {
        let { nome_service } = req.body;

        let servico = await databases.Servico.create({
            nome_service
        });
        return res.json(servico);
    }

}

module.exports = serviceController;