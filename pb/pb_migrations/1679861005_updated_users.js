migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("q5ks4i4b2ap2vs2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cc2i1djp",
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
  const collection = dao.findCollectionByNameOrId("q5ks4i4b2ap2vs2")

  // remove
  collection.schema.removeField("cc2i1djp")

  return dao.saveCollection(collection)
})
