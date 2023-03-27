migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08b1eidapxqi2bl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fnzp8sxp",
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
  const collection = dao.findCollectionByNameOrId("08b1eidapxqi2bl")

  // remove
  collection.schema.removeField("fnzp8sxp")

  return dao.saveCollection(collection)
})
