migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vlz3fv9n",
    "name": "last_name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218")

  // remove
  collection.schema.removeField("vlz3fv9n")

  return dao.saveCollection(collection)
})
