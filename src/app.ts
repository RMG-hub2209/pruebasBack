import express from 'express';
import cors from 'cors';
import genIpRoutes from "./routes/genIpRoutes";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({
    origin: '*'
}));

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
app.use('/', genIpRoutes);

