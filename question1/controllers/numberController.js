exports.calculate = (req, res, next) => {
  res.status(200).json({
    status: "success",
    id: req.params.id,
  });
};
