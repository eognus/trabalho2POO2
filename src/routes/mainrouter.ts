import { Router } from "express";
import MainController from "../controllers/maincontroller";

const MainRouter = Router();

MainRouter.get('/', MainController.renderMainPage);

export default MainRouter;