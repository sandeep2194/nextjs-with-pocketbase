migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08b1eidapxqi2bl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "chgzq8nl",
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
  const collection = dao.findCollectionByNameOrId("08b1eidapxqi2bl")

  // remove
  collection.schema.removeField("chgzq8nl")

  return dao.saveCollection(collection)
})
