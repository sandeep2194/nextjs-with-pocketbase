migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("jlwhzifno67skp6");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "jlwhzifno67skp6",
    "created": "2023-03-26 17:17:02.685Z",
    "updated": "2023-03-26 19:43:07.848Z",
    "name": "references",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hndijkyc",
        "name": "doctor",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "0etdp8pf8gseik0",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "wmz84fry",
        "name": "customer",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "08b1eidapxqi2bl",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "wjyi5ex1",
        "name": "employee",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "l6fexxsig0bs218",
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
