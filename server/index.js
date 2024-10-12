import { config } from "dotenv";
import express from "express";
const app = express();
import cors from "cors";
import connection from "./database/db.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import testRoutes from "./routes/route.js";
import profileRoutes from "./routes/currentUser.js"

// database connection
config();
connection();

// middlewares
app.use(express.json());
app.use(cors());
config();

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/route", testRoutes);
app.use("/api/route",profileRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
