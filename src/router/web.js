import express from "express";
import homeController from "../controller/homeController";
//dat lich kham benh BE
import userLogin from "../controller/LoginUser";

const router = express.Router();

const innitWebRouter = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/crud", homeController.getCrudPage);

  router.get("/display-crud", homeController.displayCrudPage);

  router.get("/edit-crud?", homeController.editCrudPage);

  router.post("/post-crud", homeController.postCrudPage);

  router.post("/put-crud", homeController.putCrudPage);

  router.get("/delete-crud", homeController.deleteCrudPage);

  //dat lich kham benh BE
  router.post("/api/login", userLogin.handlerLogin);

  router.get("/api/all/getUser", userLogin.getAllUserLogin);
  //lấy hết tất cả các router
  return app.use("/", router);
};

module.exports = innitWebRouter;
