import { Sequelize } from "Sequelize";

class Database {
    constructor() {
        this.init()
    }
    init() {
        this.db = new Sequelize({
            database: "jogo",
            host: "localhost",
            username: "root",
            password: "",
            dialect: "mysql",
        })
    }
}

export default new Database()