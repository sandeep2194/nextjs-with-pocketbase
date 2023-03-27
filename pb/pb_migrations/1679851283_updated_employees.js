migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e92orxjm",
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
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218")

  // remove
  collection.schema.removeField("e92orxjm")

  return dao.saveCollection(collection)
})
