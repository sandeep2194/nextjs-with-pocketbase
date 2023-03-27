migrate((db) => {
  const collection = new Collection({
    "id": "08b1eidapxqi2bl",
    "created": "2023-03-26 17:05:56.624Z",
    "updated": "2023-03-26 17:05:56.624Z",
    "name": "customers",
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
  const collection = dao.findCollectionByNameOrId("08b1eidapxqi2bl");

  return dao.deleteCollection(collection);
})
