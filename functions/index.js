const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

exports.gradeExam = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(405).send("Method Not Allowed");
    }

    const answers = req.body.answers;
    const answerKey = {
      q1: "Serine",
      q2: "276",
      q3: "Reducing environment",
      q4: "Anabolic regulation",
      q5: "Trp",
      q6: "Trypsinizing cells",
      q7: "Interacts pre-ribosome exit",
      q8: "0.05",
      q9: "I, II, III",
    };

    let score = 0;
    let total = Object.keys(answerKey).length;

    for (let key in answerKey) {
      if (answers[key] === answerKey[key]) {
        score++;
      }
    }

    res.json({ score, total });
  });
});
