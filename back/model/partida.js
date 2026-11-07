import database from "../config/database.js";

class partida {
    constructor() {
        this.model = database.db.define("partida", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            descricao: {
                type: database.db.Sequelize.STRING,
            },
            
            data: {
                type: database.db.Sequelize.DATEONLY,
            },

            vencedor: {
                type: database.db.Sequelize.STRING,
            }
        })
    }
}

export default new partida().model