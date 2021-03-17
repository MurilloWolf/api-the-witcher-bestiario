import moongose, { SchemaType } from 'mongoose'

const Monster = new moongose.Schema({
    id: String,
    name: String,
})

export default moongose.model("monster", Monster);