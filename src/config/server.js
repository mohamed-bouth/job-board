import app from '../../app.js'
import 'dotenv/config';

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`server running on port ${process.env.BACKEND_PORT}`)
})

