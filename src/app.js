import express from 'express'
import mongoose from 'mongoose'
import { ApolloServer } from 'apollo-server-express'
import resolvers from './resolvers'
import typeDefs from './typeDefs'
import 'dotenv/config'

const startServer = async () => {
  const app = express()

  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  server.applyMiddleware({ app })

  await mongoose.connect(
    process.env.DB_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
    () => {
      console.log('Connected to Db')
    }
  )

  app.listen({ port: 5000 }, () => console.log(`Server on => http://localhost:5000${server.graphqlPath}`))
}

startServer()
