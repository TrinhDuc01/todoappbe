
import toDoService from "../service/todoService";

const toDoController = {
    getToDoList: async (req, res) => {
        let rows = await toDoService.getToDoList();
        // console.log(rows);
        return res.status(200).json(rows)
    },
    createNewToDo: async (req, res) => {
        await toDoService.createNew(req.body);
        console.log(req.body)
        return res.status(200).json(req.body)
    },
    deleteToDo: async (req, res) => {
        await toDoService.deleteToDo(req.body);
        console.log(req.body)
        return res.status(200).json(req.body)
    },
    updateToDo: async (req, res) => {
        await toDoService.updateToDo(req.body);
        console.log(req.body)
        return res.status(200).json(req.body)
    }
}

export default toDoController;