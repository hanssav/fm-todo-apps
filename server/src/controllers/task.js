const {task, user, taskList, taskcategory, category} = require("../../models")

exports.addTask = async (req, res) => {
    try {
        const dataTask = req.body

        const createTask = await task.create(dataTask)

        res.status(200).send({
            status: "success",
            createTask
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getTasks = async (req, res) => {
    try {
        const showTasks = await task.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            showTasks
        })

    } catch (error) {
        // console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getTask = async(req, res) => {
    try {
        const { id } = req.params

        const dataTask = await task.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            dataTask
        })

    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.deleteTask = async (req, res) => {
    try {
        const {id} = req.params

        await task.destroy({
            where: {
                id
            }
        })

        res.status(200).send({
            status: "success",
            message: `Delete task id = ${id} Successfuly`
        })

    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params
        const newDataTask = req.body

        await task.update(newDataTask, {
            where: {
                id
            }
        })

        res.status(200).send({
            status: "success",
            message: `Update data task id ${id} Successfuly`,
            data: newDataTask
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: 'Server Error'
        })
    }
}

exports.getTasksByUser = async (req, res) => {
    try {
        let data = await user.findAll({
            include: {
                model: task,
                as: "task",
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            },
            attributes: {
                exclude: ["status", "password", "createdAt", "updatedAt"]
            }
        })

        data = JSON.parse(JSON.stringify(data))

        console.log(data)

        data = data.map((items) => {
            return {
                ...items
            }
        })

        res.status(200).send({
            status: "success",
            data
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getTaskByUserOne = async (req, res) => {
    try {
        const { id } = req.params

        let data = await user.findOne({
            include: {
                model: task,
                as: "task",
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            },
            attributes: {
                exclude: ["status", "password", "createdAt", "updatedAt"]
            },
            where: {
                id : id
            }
        })

        data = JSON.parse(JSON.stringify(data))

        // console.log(data)

        // data = data.map((items) => {
        //     return {
        //         ...items
        //     }
        // })

        res.status(200).send({
            status: "success",
            data
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getTaskListByTask = async (req, res) => {
    try {
        const { id } = req.params

        let data = await task.findOne({
            include: {
                model: taskList,
                as: "taskList",
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: {
                id: id
            }
        })

        data = JSON.parse(JSON.stringify(data))

        // console.log(data)

        // data = data.map((items) => {
        //     return {
        //         ...items
        //     }
        // })

        res.status(200).send({
            status: "success",
            data
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

//Provess
exports.getTaskCategory = async (req, res) => {
    try {
        let data = await task.findAll({
            include: {
                model: category,
                as: "Category",
                throught: {
                    model: taskcategory,
                    as: "taskcategory",
                    attributes: {
                        exclude: ["idTask", "idCategory", "createdAt", "updateAt"]
                    }
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
        })

        data = JSON.parse(JSON.stringify(data))

        console.log(data)

        data = data.map((items) => {
            return {
                ...items
            }
        })

        res.status(200).send({
            status: "success",
            data
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failde",
            message: "server error"
        })
    }
}

exports.updateStatusTask = async (req, res) => {
    try {
        let { id } = req.params;

        // const data = await task.filter(data => {data.status === "todo"})
        //     .map(data => {
        //         console.log(data)
        //         return (
        //             data
        //         )
        //     })

        let data = await task.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: {
                id: id
            }
        })

        data = JSON.parse(JSON.stringify(data))

        console.log(data[0].status)

        if (data[0].status === "todo") {
            await task.update({
                status: "done"
            }, {
                where: {
                    id: id
                }
            })
        }else if (data[0].status === "done") {
            await task.update({
                status: "todo"
            }, {
                where: {
                    id: id
                }
            })
        } else {
            await task.update({
                status: "todo"
            }, {
                where: {
                    id: id
                }
            })
        }

        let dataUpdate = await task.findOne({
            where: {
                id: id
            }
        })

        res.status(200).send({
            status: "success",
            dataUpdate
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}