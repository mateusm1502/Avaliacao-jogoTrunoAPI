import database from "../config/database.js";

class jogo {
    constructor() {
        this.model = database.db.define("jogo", {
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

export default new jogo().model