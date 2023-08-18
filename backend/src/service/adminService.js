const KuranPages = require("../models/Kuran");

const login = (req, res) => {
  res.send("bu bir post isteği");
};

const register = async (req, res) => {
  const cuz = req.body;
  try {
    const data = await KuranPages.create(cuz);
    res.json(data);
  } catch (error) {
    res.json({ message: "err" });
  }
};

const find = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await KuranPages.findOne({_id:id}).exec()
        res.json(data)
    } catch (error) {
        res.json({messaje: "err"})
    }
};

const update = async (req, res) => {
    const KuranPage  = ({id, cuz1} = req.body);
    try {
        const data = await KuranPages.updateOne({_id: KuranPage.id}, {$set: {cuz1:true}}).exec();
        res.json(data)
    } catch (error) {
        res.json({messaje: "err"})
    }
};

const remove = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await KuranPages.deleteOne({_id: id}).exec()
        res.json(data)
    } catch (error) {
        res.json({messaje: "err"})
    }
};



module.exports = {
  login,
  register,
  find,
  update,
  remove,
};
