import moongose from 'mongoose'

const Monster = new moongose.Schema({

    name: { type: String, required: true },
    otherNames: [String],
    type: String,
    description: { type: String, required: true },
    image: { type: String, required: true },
    occurrences: { type: String, require: true },
    weakness: [String],
    drops: {
        making: [String],
        alchemical: [String],
        others: [String]

    },
    missions: [String] || String
})

export default moongose.model("monster", Monster);