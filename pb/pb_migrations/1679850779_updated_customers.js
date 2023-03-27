migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08b1eidapxqi2bl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nmmqptir",
    "name": "address",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6vho1o6fim5sdqq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("08b1eidapxqi2bl")

  // remove
  collection.schema.removeField("nmmqptir")

  return dao.saveCollection(collection)
})
