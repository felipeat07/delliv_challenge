-- CreateTable
CREATE TABLE "Pedido" (
    "_id" SERIAL NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "enderecoEntrega" TEXT NOT NULL,
    "statusPedido" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("_id")
);
