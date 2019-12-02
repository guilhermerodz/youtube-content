import User from '../models/User';

class TestController {
  async test(req, res) {
    const user = await User.findById(req.userId);

    return res.send(user.email);
  }
}

export default new TestController();
