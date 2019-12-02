import User from '../models/User';

export default (...roles) => async (req, res, next) => {
  if (!req.userId)
    return res
      .status(500)
      .send('roleMiddleware needs to be used after authMiddleware');

  const user = await User.findById(req.userId);

  if (!user) return res.status(404).send('User not found');

  if (!user.roles.find(role => roles.includes(role)))
    return res.status(401).send('You do not have permission');

  req.user = user;

  next();
};
