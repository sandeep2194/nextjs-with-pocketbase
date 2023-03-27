migrate((db) => {
  const collection = new Collection({
    "id": "9a6f6wgc39m76zl",
    "created": "2023-03-26 19:47:01.779Z",
    "updated": "2023-03-26 19:47:01.779Z",
    "name": "receipts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pvrf72qe",
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
        "id": "u2cra1jc",
        "name": "subtotal",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ckoguocy",
        "name": "deposit",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "hd2rywya",
        "name": "tax",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9a6f6wgc39m76zl");

  return dao.deleteCollection(collection);
})
