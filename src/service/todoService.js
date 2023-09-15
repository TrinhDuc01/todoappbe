const db = require("../models");

const toDoService = {
    getToDoList: async () => {
        let toDoList = [];
        toDoList = await db.ToDo.findAll();
        return toDoList;
    },
    createNew: async (data) => {
        try {
            await db.ToDo.create({
                ...data
            })
        }
        catch (err) {
            console.log(err)
        }
    },
    deleteToDo: async (data) => {
        console.log(data)
        try {
            await db.ToDo.destroy({
                where: {
                    id: data.id
                }
            });
        }
        catch (err) {
            console.log(err)
        }
    },
    updateToDo: async (data) => {
        try {
            await db.ToDo.update({ status: 1 }, {
                where: {
                    id: data.id,
                },
            });
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = toDoService;