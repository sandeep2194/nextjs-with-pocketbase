migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lpoqoxbb",
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
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218")

  // remove
  collection.schema.removeField("lpoqoxbb")

  return dao.saveCollection(collection)
})
