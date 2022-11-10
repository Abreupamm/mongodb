db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.estimatedDocumentCount({}),
});

db.resumoProdutos.find({}, { _id: 0 });