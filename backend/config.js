export default {
  PORT: process.env.PORT || 5000,
  Pizza_DB: process.env.MONGODB_URL || "mongodb://localhost/PizaShopDB",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
};
