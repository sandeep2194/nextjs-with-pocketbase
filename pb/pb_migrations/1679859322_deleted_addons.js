migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ebts14p8fc7la4y");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "ebts14p8fc7la4y",
    "created": "2023-03-26 17:23:20.492Z",
    "updated": "2023-03-26 17:23:20.493Z",
    "name": "addons",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "abafpfwt",
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
        "id": "oqjmvozk",
        "name": "price",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
})
