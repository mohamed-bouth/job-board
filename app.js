import express from "express"
import router from "./src/routes.js"
import cors from "cors"
import 'dotenv/config';
import morgan from "morgan";

const app = express()
app.use(express.json());
app.use(morgan('dev'))
app.use(cors({
    origin : `http://127.0.0.1:${process.env.FRONTEND_PORT}`
}))
app.set('view engine', 'ejs')
app.set('views', './views/admin')
app.use(express.static('views'))

app.use('/api', router)

export default app
