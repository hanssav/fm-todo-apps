const {category} = require("../../models")

exports.addCategory = async (req, res) => {
    try {
        const dataCateogry = req.body

        const createdCategory = await category.create(dataCateogry)

        res.status(200).send({
            status: "success",
            createdCategory
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getCategories = async (req, res) => {
    try {
        const showCategory = await category.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            showCategory
        })

    } catch (error) {
        // console.log(error)
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.getCategory = async(req, res) => {
    try {
        const { id } = req.params

        const dataCategory = await category.findOne({
            where: {
                id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.status(200).send({
            status: "success",
            dataCategory
        })

    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const {id} = req.params

        await category.destroy({
            where: {
                id
            }
        })

        res.status(200).send({
            status: "success",
            message: `Delete category id = ${id} Successfuly`
        })

    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "server error"
        })
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const dataCategoryUpdate = req.body

        await category.update(dataCategoryUpdate, {
            where: {
                id
            }
        })

        res.status(200).send({
            status: "success",
            message: `Update data category id ${id} Successfuly`,
            data: dataCategoryUpdate
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            status: "failed",
            message: 'Server Error'
        })
    }
}