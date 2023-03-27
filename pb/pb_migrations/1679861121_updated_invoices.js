migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkf9170sb0cefl6")

  // remove
  collection.schema.removeField("qxp4wtir")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cb6onycn",
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
  const collection = dao.findCollectionByNameOrId("bkf9170sb0cefl6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxp4wtir",
    "name": "customer",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("cb6onycn")

  return dao.saveCollection(collection)
})
