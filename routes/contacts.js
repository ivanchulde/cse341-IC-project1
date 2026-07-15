const router = require("express").Router();

const { ObjectId } = require("mongodb");
const { getDB } = require("../db/connect");


// GET todos
router.get("/", async (req, res) => {

    const contacts = await getDB()
        .collection("contacts")
        .find()
        .toArray();

    res.status(200).json(contacts);

});


// GET uno por ID
router.get("/:id", async (req, res) => {
    
    const id = new ObjectId(req.params.id);


    const contact = await getDB()
        .collection("contacts")
        .findOne({
            _id: id
        });


    if (!contact) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }


    res.status(200).json(contact);

});


module.exports = router;