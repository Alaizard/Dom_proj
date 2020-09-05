 
// Imports
import dotenv from 'dotenv'

// Load .env
dotenv.config()

// Environment
export const NODE_ENV = process.env.NODE_ENV

// Port
export const PORT = process.env.PORT || 5000


export const DATABASE_USER = "jay"
export const DATABASE_PASSWORD = "Pheonix1992"
export const DATABASE_NAME = "dominate"
export const DATABASE_HOST = '127.0.0.1'