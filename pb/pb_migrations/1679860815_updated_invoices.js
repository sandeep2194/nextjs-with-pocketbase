migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkf9170sb0cefl6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlkmpz92",
    "name": "notes",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b8987te4",
    "name": "addons",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ug5l5kp7fg2m27q",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bkf9170sb0cefl6")

  // remove
  collection.schema.removeField("wlkmpz92")

  // remove
  collection.schema.removeField("b8987te4")

  // remove
  collection.schema.removeField("qxp4wtir")

  return dao.saveCollection(collection)
})
