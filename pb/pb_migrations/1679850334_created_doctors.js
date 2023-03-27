migrate((db) => {
  const collection = new Collection({
    "id": "0etdp8pf8gseik0",
    "created": "2023-03-26 17:05:34.846Z",
    "updated": "2023-03-26 17:05:34.846Z",
    "name": "doctors",
    "type": "auth",
    "system": false,
    "schema": [],
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
  const collection = dao.findCollectionByNameOrId("0etdp8pf8gseik0");

  return dao.deleteCollection(collection);
})
