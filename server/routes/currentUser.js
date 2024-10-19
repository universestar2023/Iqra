import authMiddleware from "../middleware/authMiddleware.js";
import { Router } from "express";
import { User1 } from "../models/User.js";

const router = Router();
// Route to get current user information
router.get("/current-user", authMiddleware, async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User1.findById(userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error("Error in retrieving current user:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
export default router;