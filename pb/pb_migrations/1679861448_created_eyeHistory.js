migrate((db) => {
  const collection = new Collection({
    "id": "626s333mk5slb7x",
    "created": "2023-03-26 20:10:48.803Z",
    "updated": "2023-03-26 20:10:48.803Z",
    "name": "eyeHistory",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "w6mguo7w",
        "name": "sph_r",
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
        "id": "mmxhkhwk",
        "name": "sph_l",
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
        "id": "po9goijr",
        "name": "cyl_r",
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
        "id": "9c6jpnv7",
        "name": "cyl_l",
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
        "id": "g4l9afkv",
        "name": "axis_r",
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
        "id": "fbdurt7n",
        "name": "axis_l",
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
        "id": "pyebny8c",
        "name": "prism_r",
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
        "id": "unngutp4",
        "name": "prism_l",
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
        "id": "i39lwcms",
        "name": "type",
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
      },
      {
        "system": false,
        "id": "vm7fdwzi",
        "name": "ht",
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
        "id": "wo1sizk8",
        "name": "nearpd",
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
        "id": "vufmqivf",
        "name": "distpd",
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
  const collection = dao.findCollectionByNameOrId("626s333mk5slb7x");

  return dao.deleteCollection(collection);
})
