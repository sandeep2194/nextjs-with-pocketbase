migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0etdp8pf8gseik0");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "0etdp8pf8gseik0",
    "created": "2023-03-26 17:05:34.846Z",
    "updated": "2023-03-26 17:13:29.637Z",
    "name": "doctors",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3jalsadp",
        "name": "first_name",
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
        "id": "xngpgws9",
        "name": "last_name",
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
        "id": "rsc8ci7j",
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
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
