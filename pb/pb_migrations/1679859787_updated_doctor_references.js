migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlwhzifno67skp6")

  collection.name = "references"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wjyi5ex1",
    "name": "employee",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "l6fexxsig0bs218",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlwhzifno67skp6")

  collection.name = "doctor_references"

  // remove
  collection.schema.removeField("wjyi5ex1")

  return dao.saveCollection(collection)
})
