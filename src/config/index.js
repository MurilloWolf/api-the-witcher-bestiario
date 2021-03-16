import dotenv from 'dotenv'

dotenv.config();
export const port = process.env.PORT
export const dbPassword = process.env.DB_PASSWORD
export const dbUserName = process.env.DB_USERNAME
export const dbCollection = process.env.DB_COLLECTION
