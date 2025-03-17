export const handleSaveError = (error, req, next) => {
  error.status = 400;
  next();
};

export function handleUpdateSettings(next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
}
