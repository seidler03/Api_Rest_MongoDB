import express  from "express"
import db from "./config/dbConnect.js"
import livro from "./models/Livro.js"
import routes from "./routes/index.js"

db.on("erro", console.log.bind(console, "erro de conexão"))
db.once("open",() =>{
    console.log('Conexão com o banco feita com sucesso')
})

const app = express()
app.use(express.json())
routes(app);

export default app