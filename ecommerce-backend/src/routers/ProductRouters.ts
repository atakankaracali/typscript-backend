import { Router } from "express";
import { ProductController } from "../controllers/ProductControllers";

const router = Router();

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getOneById);
router.post("/", ProductController.create);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.delete);

export default router;
