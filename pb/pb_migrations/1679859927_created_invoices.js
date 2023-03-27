migrate((db) => {
  const collection = new Collection({
    "id": "bkf9170sb0cefl6",
    "created": "2023-03-26 19:45:27.029Z",
    "updated": "2023-03-26 19:45:27.029Z",
    "name": "invoices",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c1rk7vgv",
        "name": "store",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ntgfz3l6aukphqj",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "rmalki6d",
        "name": "invoice_no",
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
        "id": "k6batj4d",
        "name": "lens",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ug5l5kp7fg2m27q",
          "cascadeDelete": false,
          "minSelect": 1,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "rddm5eto",
        "name": "frames",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ug5l5kp7fg2m27q",
          "cascadeDelete": false,
          "minSelect": 1,
          "maxSelect": null,
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
  const collection = dao.findCollectionByNameOrId("bkf9170sb0cefl6");

  return dao.deleteCollection(collection);
})
