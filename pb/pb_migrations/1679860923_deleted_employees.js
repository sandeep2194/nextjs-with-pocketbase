migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l6fexxsig0bs218");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "l6fexxsig0bs218",
    "created": "2023-03-26 17:05:03.087Z",
    "updated": "2023-03-26 17:21:23.870Z",
    "name": "employees",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "s7poadh8",
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
        "id": "vlz3fv9n",
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
        "id": "lpoqoxbb",
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
        "id": "e92orxjm",
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
