const express = require('express');

const router = express.Router();
const Language = require('../model/Language');

router.post('/addCan', (req, res) => {
  const NewLanguage = new Language(
    req.body.candidate,
  );
  NewLanguage.save()
    .then(() => {
      res.json({
        message: 'New Candidate Added!',
      });
    });
});

router.get('/can', async (req, res) => {
  try {
    const landata = await Language.find({});
    if (landata) {
      res.json(landata);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

router.put('/addvote/:id', async (req, res) => {
  try {
    const landata = await Language.findById(req.params.id);
    if (landata) {
      const id = landata._id;
      const updates = { votes: landata.votes + 1 };
      const options = {
        new: true,
      };

      Language.findByIdAndUpdate(id, {
        $set: updates,
      }, options, (err, data) => {
        if (data) {
          res.json({ message: 'Thanks for voting' });
        }
        if (err) {
          res.json({ message: err });
        }
      });
    }
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
