const mongoService = require("./mongo");
function addRoutes(App) {
  App.post(`/api/users`, async (req, res) => {
    const newUser = req.body;
    try {
      const respond = await mongoService
        .connect()
        .then((db) => db.collection("users").insertOne(newUser));
      return res.json(respond);
    } catch (e) {
      return res.status(500).send("couldnt add sorry");
    }
  });
  App.get(`/api/admin/users`, async (req, res) => {

    try {
      const respond = await mongoService
      .connect()
      .then(db => db.collection("users").find({}).toArray());
      return res.json(respond);
    } catch (e) {
      return res.status(500).send("couldnt show users sorry");
    }
  });
}
module.exports = addRoutes;
