// const { read, write } = require("../utills/FS");
const { sign } = require("../utils/jwt");

const GET = (_, res) => {
  try {
    res.render("login");
  } catch (err) {
    throw new Error(err);
  }
};

const POST = (req, res) => {
  try {
    const {
      user: { username, role },
    } = req;

    res.cookie("access_token", sign({ username, role }), {
      // maxAge: 60 * 60 * 24,
    });

    if (role == "admin") {
      return res.redirect("/admin");
    } else if (role == "/teacher") {
      return res.redirect("teacher");
    } else {
      return res.redirect("/student");
    }
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  GET,
  POST,
};
