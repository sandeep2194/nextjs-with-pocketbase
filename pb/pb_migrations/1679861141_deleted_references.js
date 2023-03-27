migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sx30saq2rvw1t9k");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "sx30saq2rvw1t9k",
    "created": "2023-03-26 20:04:19.094Z",
    "updated": "2023-03-26 20:04:19.094Z",
    "name": "references",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o8k5uris",
        "name": "invoice",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "bkf9170sb0cefl6",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "dsjomunm",
        "name": "user",
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
