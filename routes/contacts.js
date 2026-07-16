const router = require("express").Router();

const { ObjectId } = require("mongodb");
const { getDB } = require("../db/connect");


// GET all contacts
// #swagger.tags = ['Contacts']
// #swagger.description = 'Get all contacts'
router.get("/", async (req, res) => {

    const contacts = await getDB()
        .collection("contacts")
        .find()
        .toArray();

    res.status(200).json(contacts);

});


// GET contact by ID
// #swagger.tags = ['Contacts']
// #swagger.description = 'Get contact by ID'
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

// POST
// #swagger.tags = ['Contacts']
// #swagger.description = 'Create a new contact'
router.post("/", async (req, res) => {

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await getDB()
        .collection("contacts")
        .insertOne(contact);

    res.status(201).json({
        id: response.insertedId
    });

});

// PUT
// #swagger.tags = ['Contacts']
// #swagger.description = 'Update a contact'
router.put("/:id", async (req, res) => {

    const id = new ObjectId(req.params.id);

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = await getDB()
        .collection("contacts")
        .replaceOne(
            { _id: id },
            contact
        );

    if (response.modifiedCount > 0) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }

});

// DELETE
// #swagger.tags = ['Contacts']
// #swagger.description = 'Delete a contact'
router.delete("/:id", async (req, res) => {

    const id = new ObjectId(req.params.id);

    const response = await getDB()
        .collection("contacts")
        .deleteOne({ _id: id });

    if (response.deletedCount > 0) {
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;