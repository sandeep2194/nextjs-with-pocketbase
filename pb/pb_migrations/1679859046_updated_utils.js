migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847g4f48tlfhxl8")

  collection.name = "attributes"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("847g4f48tlfhxl8")

  collection.name = "utils"

  return dao.saveCollection(collection)
})
