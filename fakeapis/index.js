const db = require('./db.json');
const dataset_nutrition = require('./dataset_nutrition.json');
// Something more

module.exports = () => ({
  db: db,
  dataset_nutrition: dataset_nutrition
});