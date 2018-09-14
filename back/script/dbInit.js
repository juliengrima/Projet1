const fs = require('fs');
const connection = require('../helpers/db')

fs.readFile('../restaurants.json', (err, data) => {
  if (err) throw err;
  let jsonArray = JSON.parse(data);
  jsonArray.map((element) => {
    return {
      name: element.name,
      address1: element.address1,
      address2: element.address2,
      image: element.image_url,
      to_website: element.to_website,
      note: element.editorial_rating
    }
  })
    .forEach((element) => {
      const sqlQuery = "INSERT INTO list (name, address1, address2, image, to_website, note) VALUES (?,?,?,?,?,?)"
      connection.query(sqlQuery, [element.name, element.address1, element.address2, element.image, element.to_website, element.note], function (error, results, fields) {
        if (error) throw error
        console.log(results);
      })
    })
});