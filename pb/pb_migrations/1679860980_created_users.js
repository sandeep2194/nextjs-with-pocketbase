migrate((db) => {
  const collection = new Collection({
    "id": "q5ks4i4b2ap2vs2",
    "created": "2023-03-26 20:03:00.493Z",
    "updated": "2023-03-26 20:03:00.493Z",
    "name": "users",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s2mdn4zq",
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
        "id": "zoi1nvii",
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
        "id": "hqhpsfgg",
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
      },
      {
        "system": false,
        "id": "nlkadamq",
        "name": "role",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q5ks4i4b2ap2vs2");

  return dao.deleteCollection(collection);
})
