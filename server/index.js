import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Routers.
import itemRoutes from './routes/items.js';
import orderRoutes from './routes/orders.js';
import tableRoutes from './routes/tables.js';
import paymentIntent from './routes/paymentIntent.js'

// Start new Express application.
const app = express();

// Middleware.

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);
app.use('/tables', tableRoutes);
app.use('/paymentintent', paymentIntent)

// MongoDB
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)))
  .catch((error) => console.log(error.message));