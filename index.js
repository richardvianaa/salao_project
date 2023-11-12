(async () => {
    const database = require('./db');
    const servico = require('./servico');

    await database.sync();

    await servico.create({
        Nome: "Primeiro Teste",
        Descrição: "Primeiro teste de descrição"
    })
    await servico.create({
        Nome: "Segundo Teste",
        Descrição: "Segundo teste de descrição"
    })
    await servico.create({
        Nome: "Terceiro Teste",
        Descrição: "Terceiro teste de descrição"
    })
    await servico.create({
        Nome: "Quarto Teste",
        Descrição: "Primeiro teste de descrição"
    })

    const alterServic = await servico.findByPk(2);
    alterServic.Nome = "Arquivo Alterado";
    await alterServic.save();

    servico.destroy(
        {
            where: {
                id: 1
            }
        }
    );

})();