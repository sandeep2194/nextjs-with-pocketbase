migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("08b1eidapxqi2bl");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "08b1eidapxqi2bl",
    "created": "2023-03-26 17:05:56.624Z",
    "updated": "2023-03-26 17:12:59.588Z",
    "name": "customers",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fnzp8sxp",
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
        "id": "chgzq8nl",
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
        "id": "nmmqptir",
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
