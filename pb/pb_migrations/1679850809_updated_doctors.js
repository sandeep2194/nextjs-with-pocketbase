migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0etdp8pf8gseik0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rsc8ci7j",
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
  const collection = dao.findCollectionByNameOrId("0etdp8pf8gseik0")

  // remove
  collection.schema.removeField("rsc8ci7j")

  return dao.saveCollection(collection)
})