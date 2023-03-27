migrate((db) => {
  const collection = new Collection({
    "id": "l6fexxsig0bs218",
    "created": "2023-03-26 17:05:03.087Z",
    "updated": "2023-03-26 17:05:03.087Z",
    "name": "employees",
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
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218");

  return dao.deleteCollection(collection);
})
