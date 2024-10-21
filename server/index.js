import { config } from "dotenv";
import express from "express";
const app = express();
import cors from "cors";
import connection from "./database/db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import testRoutes from "./routes/route.js";


// database connection
config();
connection();

// middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Allow only your frontend origin
    methods: ['GET', 'POST'], // Allowed HTTP methods
    credentials: true // Allow credentials like cookies to be sent
 }));
config();

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/route", testRoutes);


const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
