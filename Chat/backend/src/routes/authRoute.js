import express from "express"
import { login, logout, signup ,updateProfile , checkAuth} from "../controllers/authControllers.js"
import { protectRoute } from "../middleware/authMiddleware.js"
const router = express.Router()

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.put("/update-profile",protectRoute,updateProfile)
router.put("/check",protectRoute,checkAuth) 

export default router;