migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0etdp8pf8gseik0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3jalsadp",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xngpgws9",
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
  const collection = dao.findCollectionByNameOrId("0etdp8pf8gseik0")

  // remove
  collection.schema.removeField("3jalsadp")

  // remove
  collection.schema.removeField("xngpgws9")

  return dao.saveCollection(collection)
})
