import kingdomFeatures from '../data/kingdomFeatures.json'
import advisorsData from '../data/advisors.json'

const kingdomFeaturesData = new Map()
for (let item in kingdomFeatures) {
    kingdomFeaturesData.set(item, kingdomFeatures[item])
}

function GenerateKingdom(kingdomName) {
    let kingdom = {}
    //Create Kingdom assets
    //Create Initial Advisors
    kingdom['features'] = generateFeatures(kingdomName)
    kingdom['advisors'] = generateAdvisors()

    return kingdom
}

const generateFeatures = (kingdomName) => {
    // Generate the location of the kingdom
    const location = generateLocation(kingdomFeaturesData)

    // Get the geography, climate, and natural resources from the Map
    const geography = kingdomFeaturesData.get(location).geography
    const climate = kingdomFeaturesData.get(location).climate
    const naturalResources = kingdomFeaturesData.get(location).naturalResources

    // Return the kingdom object
    return {
        name: kingdomName,
        location: location,
        geography: geography,
        climate: climate,
        naturalResources: naturalResources,
    }
}

const generateLocation = (data) => {
    const locations = Array.from(data.keys())
    const index = Math.floor(Math.random() * locations.length)
    return locations[index]
}

const generateAdvisors = () => {
    let obj = {
        governor: null,
        commander: null,
        spy: null,
        diplomat: null,
    }
    const namesCopy = [...advisorsData.peasent]
    const keys = Object.keys(obj)

    keys.forEach((key) => {
        const randomIndex = Math.floor(Math.random() * namesCopy.length)
        const randomName = namesCopy[randomIndex]
        obj[key] = randomName
        namesCopy.splice(randomIndex, 1)
    })
    return obj
}

function GenerateDescription(kingdom) {
    let description = `Welcome to the kingdom of ${kingdom.name}! Located in the ${kingdom.location} region, this kingdom is known for its ${kingdom.geography} landscape and ${kingdom.climate} climate.`

    if (kingdom.naturalResources.length > 1) {
        description += ` The kingdom is rich in natural resources, including ${kingdom.naturalResources.join(
            ', '
        )}.`
    } else {
        description += ` The kingdom is rich in ${kingdom.naturalResources[0]}.`
    }

    description += ` ${generateCastle(kingdom)}`

    return description
}

function generateCastle(kingdom) {
    let castle = ''
    let location = kingdom.location
    let geography = kingdom.geography
    let climate = kingdom.climate
    let naturalResources = kingdom.naturalResources

    switch (location) {
        case 'coastal':
            castle +=
                'This castle is located on the coast, with breathtaking views of the ocean. '
            break
        case 'inland':
            castle +=
                'This castle is located inland, surrounded by lush green forests and rolling hills. '
            break
    }

    switch (geography) {
        case 'flat':
            castle +=
                'The surrounding landscape is flat, making it easy to defend against invaders. '
            break
        case 'hilly':
            castle +=
                'The surrounding landscape is hilly, with strategic high points that offer a view of the surrounding area. '
            break
        case 'mountainous':
            castle +=
                'The surrounding landscape is mountainous, with rugged peaks that make it difficult to approach. '
            break
    }

    switch (climate) {
        case 'temperate':
            castle +=
                'The climate is temperate, with mild winters and warm summers. '
            break
        case 'desert':
            castle +=
                'The climate is dry and arid, with hot days and cool nights. '
            break
    }

    if (naturalResources.includes('fishing')) {
        castle +=
            'The kingdom is rich in seafood, and the castle has its own fish market. '
    }
    if (naturalResources.includes('mining')) {
        castle +=
            'The kingdom is rich in minerals, and the castle has its own blacksmith to create weapons and armor. '
    }
    if (naturalResources.includes('agriculture')) {
        castle +=
            'The kingdom is rich in fertile land, and the castle has its own gardens to grow fruits and vegetables. '
    }

    return castle
}

export { GenerateKingdom, GenerateDescription }
