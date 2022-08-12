import {categorias} from './data/categorias'
import {productos} from './data/productos'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
      await prisma.categoria.createMany({
        data: categorias
      })  
      await prisma.producto.createMany({
        data: productos
      })  
    } catch (error) {
        console.log(error)
    }
}

main()
// seed -> ingreso masivo de registros en una base de datos
// npm i ts-node
// "prisma":{"seed":"ts-node prisma/seed.ts"}
// npx prisma db seed
