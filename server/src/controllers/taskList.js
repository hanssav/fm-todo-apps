const {taskList} = require("../../models")

exports.addTaskList = async (req, res) => {
    try {
        const taskListData = req.body

        const createTaskList = await taskList.create(taskListData)

        console.log(createTaskList)
        res.status(200).send({
            status: "success",
            createTaskList
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getTaskLists = async (req, res) => {
    try {
        const showData = await taskList.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            showData
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getTaskList = async(req, res) => {
    try {
        const { id } = req.params

        const dataTaskList = await taskList.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            dataTaskList
        })

    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.deleteTaskList = async (req, res) => {
    try {
        const {id} = req.params

        await taskList.destroy({
            where: {
                id
            }
        })

        res.status(200).send({
            status: "success",
            message: `Delete task List id = ${id} Successfuly`
        })

    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.updateTaskList = async (req, res) => {
    try {
        const { id } = req.params
        const newTaskList = req.body

        await taskList.update(newTaskList, {
            where: {
                id
            }
        })

        res.status(200).send({
            status: "success",
            message: `Update data task List id ${id} Successfuly`,
            data: newTaskList
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: 'Server Error'
        })
    }
}