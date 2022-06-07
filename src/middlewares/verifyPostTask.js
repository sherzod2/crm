module.exports = (req, res, next) => {
  const { groupId, title, desc } = req.body;

  if (!groupId || !title || !desc) {
    return res.send("The information is incomplete");
  }

  if (title.length > 25) {
    return res.send("the title has many character");
  }

  if (desc.length > 350) {
    return res.send("the description has many character");
  }

  req.newTask = { groupId, title, desc };

  next();
};
