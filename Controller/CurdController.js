const CURD = require("../Model/Schema");

// =================================

const Create = async (req, res) => {
  try {
    const { name, email, age, mobile, work, address, description } = req.body;
    const NewUser = await CURD.findOne({ email: email });

    if (
      !name ||
      !email ||
      !age ||
      !mobile ||
      !work ||
      !address ||
      !description
    ) {
      res.status(400).json({ message: "Please Fill All The Fields" });
    } else if (NewUser) {
      res
        .status(409)
        .json({ message: "You Are Already Exist Add New Email Id" });
    } else {
      const NewCurd = new CURD({
        name,
        email,
        age,
        mobile,
        work,
        address,
        description,
      });
      await NewCurd.save();
      res.status(201).json({ message: "User Register Successfully" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// =================================

const Read = async (req, res) => {
  try {
    const AllCurd = await CURD.find({});
    res.status(200).json(AllCurd);
  } catch (error) {
    res.status(404).json(error);
  }
};

// =================================

const FetchData = async (req, res) => {
  try {
    const { id } = req.params;
    const AllCurd = await CURD.findById({ _id: id });
    res.status(200).json(AllCurd);
  } catch (error) {
    res.status(404).json(error);
  }
};

// =================================

const EditData = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;
    const AllCurd = await CURD.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    res.status(200).json(AllCurd);
  } catch (error) {
    res.status(404).json(error);
  }
};

// =================================

const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    const AllCurd = await CURD.findOneAndDelete({ _id: id });
    res.status(200).json({ AllCurd, message: " Deleted Successfully" });
  } catch (error) {
    res.status(404).json(error);
  }
};

// ------------------------------
module.exports = { Read, Create, FetchData, EditData, Delete };
