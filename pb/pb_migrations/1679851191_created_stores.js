migrate((db) => {
  const collection = new Collection({
    "id": "ntgfz3l6aukphqj",
    "created": "2023-03-26 17:19:51.078Z",
    "updated": "2023-03-26 17:19:51.078Z",
    "name": "stores",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6zk8o83c",
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
        "id": "jggrmndr",
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
  const collection = dao.findCollectionByNameOrId("ntgfz3l6aukphqj");

  return dao.deleteCollection(collection);
})
