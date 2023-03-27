migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkf9170sb0cefl6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y34g3i5w",
    "name": "employee",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lx1lehme",
    "name": "doctor",
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
  const collection = dao.findCollectionByNameOrId("bkf9170sb0cefl6")

  // remove
  collection.schema.removeField("y34g3i5w")

  // remove
  collection.schema.removeField("lx1lehme")

  return dao.saveCollection(collection)
})
