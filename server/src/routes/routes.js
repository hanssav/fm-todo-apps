const express = require("express");

const router = express.Router();

const { addUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user');
const { addCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/category');
const { addTaskList, getTaskLists, getTaskList, updateTaskList, deleteTaskList } = require('../controllers/taskList');
const {
    addTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
    getTasksByUser,
    getTaskByUserOne,
    getTaskListByTask,
    getTaskCategory,
    updateStatusTask } =
    require('../controllers/task');

const {
    register,
    login
} = require("../controllers/auth")

const { auth } = require("../middlewares/auth")

router.post("/adduser", addUser);
router.get("/getusers", getUsers);
router.get("/getuser/:id", getUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

router.post("/addcategory", addCategory);
router.get("/getcategories", getCategories);
router.get("/getCategory/:id", getCategory);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

router.post("/addtasklist", addTaskList);
router.get("/gettasklists", getTaskLists);
router.get("/gettasklist/:id", getTaskList);
router.put("/updatetasklist/:id", updateTaskList);
router.delete("/deletetasklist/:id", deleteTaskList);

router.post("/addtask", addTask);
router.get("/gettasks", getTasks);
router.get("/gettask/:id", getTask);
router.put("/updatetask/:id", updateTask);
router.delete("/deletetask/:id", deleteTask);


router.get("/gettasksbyuser", getTasksByUser);
router.get("/gettaskbyuserone/:id", getTaskByUserOne);
router.get("/gettasklistbytask/:id", getTaskListByTask);
router.get("/gettaskcategory", getTaskCategory);
router.put("/updatestatustask/:id", updateStatusTask);

// route auth
router.post("/register", register) //req done
router.post("/login", login) // req done

module.exports = router;