const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const comment = req.body.comment;
  const date = Date.parse(req.body.date);

  const newUser = new User({ username, email, comment, date });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id).then(user => {
    user.username = req.body.username;
    user.email = req.body.email;
    user.comment = req.body.comment;
    user.date = Date.parse(req.body.date);

    user
      .save()
      .then(() =>
        res
          .json("Comment updated")
          .catch(err => res.status(4000).json("Error: " + err))
      );
  });
});

module.exports = router;
