export const userFieldsValidate = (req, res, next) => {
  const { firstName, middleName, paternalLastName, maternalLastName, dateOfBirth, email, cellphone } = req.body;
  if (!firstName || !middleName || !paternalLastName || !maternalLastName || !dateOfBirth || !email || !cellphone) {
    return res.status(500).json({ status: "Rejected", payload: "All fields are required" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(500).json({ status: "Rejected", payload: "Email invalid" });
  }
  next();
};
