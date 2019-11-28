//@ts-check
const { Router } = require("express");
const { User, Question, UserAnswer, Answer } = require("../../models");
const router = Router();

router.get("/", function showHomePage(req, resp) {
  resp.status(200).send("Ok");
});

router.post("/users", function saveUser(req, resp) {
  const { name, email, gender, education } = req.body;

  User.create({ name, email, gender, education })
    .then(data => {
      resp.status(200).json(data);
    })
    .catch(error => {
      resp.status(500).json({ error });
    });
});

router.get("/users", function saveUser(req, resp) {
  User.findAll()
    .then(data => {
      resp.status(200).json(data);
    })
    .catch(error => {
      resp.status(500).json({ error });
    });
});

router.get("/questions", function renderServey(req, resp) {
  Question.findAll({ include: [{ model: Answer, as: "answers" }] })
    .then(data => {
      resp.status(200).json(data);
    })
    .catch(error => resp.status(500).json({ error }));
});

router.post("/questions", function renderServey(req, resp) {
  Question.create(req.body)
    .then(data => {
      resp.status(200).json(data);
    })
    .catch(error => resp.status(500).json({ error }));
});

router.post("/answers", function renderServey(req, resp) {
  Answer.create(req.body)
    .then(data => {
      resp.status(200).json(data);
    })
    .catch(error => resp.status(500).json({ error }));
});

router.post("/user-answers", async function saveUserAnswers(req, resp) {
  const { answers } = req.body;
  try {
    const data = await UserAnswer.bulkCreate(answers);
    resp.status(200).json(data);
  } catch (error) {
    resp.status(500).json({ error });
  }
});
module.exports = router;
