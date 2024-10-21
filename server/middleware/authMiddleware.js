import jwt from "jsonwebtoken";
import { User1 } from "../models/User.js";

const secretKey = "secretkey12345645"; // Replace with your actual secret key

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Safely access authorization header
        if (!token) {
            console.log("Authorization header missing");
            return res.status(401).json({ message: "Authorization header is missing" });
        }

        console.log("Received Token:", token); // Log the token for debugging

        jwt.verify(token, secretKey, (err, decoded) => {
            console.log(decoded)
            if (err) {
                console.error("Error verifying token:", err);
                return res.status(401).json({ message: "Invalid token" });
            }

            User1.findById(decoded._id, (err, user) => {
                if (err || !user) {
                    console.error("Error finding user:", err);
                    return res.status(401).json({ message: "User not found" });
                }

                req.user = user; // Attach user information to the request object
                console.log("Authenticated user:", user);
                next();
            });
        });
    } catch (error) {
        console.error("Unexpected error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export default authMiddleware;
