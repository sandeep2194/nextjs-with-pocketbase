migrate((db) => {
  const collection = new Collection({
    "id": "847g4f48tlfhxl8",
    "created": "2023-03-26 19:19:36.233Z",
    "updated": "2023-03-26 19:19:36.233Z",
    "name": "utils",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sflh0gsz",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lfcepafs",
        "name": "type",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("847g4f48tlfhxl8");

  return dao.deleteCollection(collection);
})
