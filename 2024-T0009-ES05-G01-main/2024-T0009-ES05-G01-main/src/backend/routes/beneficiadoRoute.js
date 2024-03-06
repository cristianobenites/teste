import { Router } from "express";
import beneficiadoController from "../controllers/beneficiadoController.js";
import { validaPermissoes } from "../middlewares/permissaoMiddleware.js";

const router = new Router();

router
  .get(
    "/beneficiados",
    validaPermissoes(["prof", "lider", "admin"]),
    beneficiadoController.getAll,
  )
  .get(
    "/beneficiados/:id",
    validaPermissoes(["prof", "lider", "admin"]),
    beneficiadoController.getById,
  )
  .post(
    "/beneficiados",
    validaPermissoes(["prof", "lider"]),
    beneficiadoController.create,
  )
  .put(
    "/beneficiados/:id",
    validaPermissoes(["prof", "lider"]),
    beneficiadoController.update,
  )
  .post(
    "/beneficiados/delete/:id",
    validaPermissoes(["lider"]),
    beneficiadoController.delete,
  )
  .get(
    '/beneficiados/ongs/:id',
    validaPermissoes(['admin', 'lider', 'professor']), 
    beneficiadoController.getAllByOng
  );

export default router;
