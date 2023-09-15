import express from "express";
import toDoController from "../controller/todoController";

const router = express.Router();

const initApiRoutes = (app) => {
    router.get("/to-do-list", toDoController.getToDoList);
    router.post("/add-todo", toDoController.createNewToDo);
    router.delete("/delete-todo", toDoController.deleteToDo);
    router.put("/update-todo", toDoController.updateToDo);

    return app.use("/api/v1", router);
}

export default initApiRoutes;