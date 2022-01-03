//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/todo');

//CREATE
router.post("/language", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/languages", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/language/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/language/:id", (req, res) => {
    
    controller.update(req, res);

});

//DELETE
router.delete("/language/:id", (req, res) => {
    
    controller.delete(req, res);

});

//COMPLETED
router.post("/language/:id/done", (req, res) => {

    controller.done(req, res);

});

router.post("/language/:id/undone", (req, res) => {

    controller.undone(req, res);

});

module.exports = router;