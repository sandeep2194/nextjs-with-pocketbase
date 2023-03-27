migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("626s333mk5slb7x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m8w3cbe2",
    "name": "customer",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "q5ks4i4b2ap2vs2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("626s333mk5slb7x")

  // remove
  collection.schema.removeField("m8w3cbe2")

  return dao.saveCollection(collection)
})
