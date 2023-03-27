migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ug5l5kp7fg2m27q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nnqtb4w9",
    "name": "store",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ntgfz3l6aukphqj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ug5l5kp7fg2m27q")

  // remove
  collection.schema.removeField("nnqtb4w9")

  return dao.saveCollection(collection)
})
