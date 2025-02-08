import express from "express"
import { login, logout, signup ,updateProfile , checkAuth} from "../controllers/authControllers.js"
import { protectRoute } from "../middleware/authMiddleware.js"
const router = express.Router()

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)
router.get("/check", protectRoute, checkAuth);
router.put("/update-profile",protectRoute,updateProfile)

export default router;