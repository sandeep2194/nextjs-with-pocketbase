migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ntgfz3l6aukphqj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pfowtdrs",
    "name": "currency",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "847g4f48tlfhxl8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cnaw2lx7",
    "name": "language",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "847g4f48tlfhxl8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ntgfz3l6aukphqj")

  // remove
  collection.schema.removeField("pfowtdrs")

  // remove
  collection.schema.removeField("cnaw2lx7")

  return dao.saveCollection(collection)
})
