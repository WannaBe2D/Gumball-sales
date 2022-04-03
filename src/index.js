import express from 'express';
import cors from 'cors';
import db from '../src/db/db.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import groupRouter from "./routers/groupRouter.js";
import categoryRouter from "./routers/categoryRouter.js";
import productRouter from "./routers/productRouter.js";
import salesRouter from "./routers/salesRouter.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 5000;
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions))
app.use(express.static(__dirname + '/frontend'));

app.use('/group', groupRouter)
app.use('/category', categoryRouter)
app.use('/product', productRouter)
app.use('/sales', salesRouter)

app.get('/', async(req, res) => {
    res.sendFile(join(__dirname, 'frontend/index.html'));
});

app.listen(PORT, async () => {
    await db.read()
    db.data = db.data || { groups: [], category: [], products: [], sales: [] }
    await db.write()
    console.log(`server start in ${PORT} port`);
})