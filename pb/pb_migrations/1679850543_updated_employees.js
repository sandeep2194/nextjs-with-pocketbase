migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s7poadh8",
    "name": "first_name",
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
  collection.schema.removeField("s7poadh8")

  return dao.saveCollection(collection)
})
