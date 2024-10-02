const Contact = require("./modal");

const createContact = async (req, res) => {
  try {
    // const contact = new Contact(req.body);

    const savedContact = await Contact.create(req.body);
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createContact };
