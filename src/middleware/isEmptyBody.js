import { HttpError } from "../helpers/index.js";

const isEmptyBody = (req, res, next) => {
  const keys = Object.keys(req.body);
  if (keys.length === 0) {
    return next(HttpError(400, "Required fields"));
  }
  next();
};

export default isEmptyBody;
