const db = require("../data/dbconfig");
module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db("hobbits");
}

function findById(id) {
  return db("hobbits").where({ id }).first();
}

function insert(hobbit) {
  return db("hobbits")
    .insert(hobbit, "id")
    .then((ids) => ({ id: ids[0] }));
}

function update(hobbit, id) {
  return db("hobbits").where("id", Number(id)).update(hobbit);
}

function remove(id) {
  return db("hobbits").where("id", Number(id)).del();
}
