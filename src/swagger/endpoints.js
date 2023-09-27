module.exports = function (router) {
  router.get("/show", async (req, res, next) => {
    try {
      const user = await listRouteHandler(req, res);
      res.json({ listagem: user });
    } catch (error) {
      next(error);
    }
  });

  router.post("/auth", async (req, res) => {
    const { username, password } = req.body;
    const authenticationResult = await loginRouteHandler(
      req,
      res,
      username,
      password
    );
    if (authenticationResult.success) {
      const token = authenticationResult.token;
      req.session.username = username;
      res.cookie("token", token);
      return res.redirect("/");
    } else {
      return;
    }
  });

  router.post("/logout", (req, res) => {
    req.session.destroy();
    return res.sendStatus(204);
  });

  router.post("/registrar", async (req, res) => {
    const { username, name, email } = req.body;
    const password = req.body.password;
    await registerRouteHandler(req, res, username, name, email, password);
  });

  router.post("/esqueci-senha", async (req, res) => {
    const { email } = req.body;
    await forgotPasswordRouteHandler(req, res, email);
  });

  router.post("/reset", async (req, res) => {
    const { token, email } = req.query;
    const { password, cPass } = req.body;
    await resetPasswordRouteHandler(req, res, email, password, cPass, token);
  });

  router.get("/show", async (req, res, next) => {
    try {
      const Invent = await showEstoqueHandle(req, res);
      res.json({ listagem: Invent });
    } catch (error) {
      next(error);
    }
  });

  router.get("/show/:id", async (req, res, next) => {
    const id = req.params.id;
    try {
      const Invent = await showByIdEstoqueHandle(req, res, id);
      res.json({ listagem: Invent });
    } catch (error) {
      next(error);
    }
  });
};
