const { ExpressError, BadRequestError, NotFoundError } = require("../utils/errors")

class GiftExchange {

    static pairs(names) {

        if (!names) {
            throw new BadRequestError()
        }

            let namesCopy = [...names]

            if (namesCopy.length % 2 === 1) {
                throw new BadRequestError("Number of names cannot be odd");
            }
            
    
            let tuples = []
    
            while (namesCopy.length) {
                
                let index = Math.floor(Math.random() * namesCopy.length)
                let name1 = namesCopy[index]
                namesCopy.splice(index, 1)
    
                index = Math.floor(Math.random() * namesCopy.length)
                let name2 = namesCopy[index]
                namesCopy.splice(index, 1)

                tuples.push([name1, name2])
            }

            return tuples
    }

    static traditional(names) {
        if (!names) {
            throw new BadRequestError()
        }

        let namesCopy = [...names]
        let traditional = []
        let giftGiving = []

        while (namesCopy.length) {
            let index = Math.floor(Math.random() * namesCopy.length)
            let name = namesCopy[index]
            namesCopy.splice(index, 1)

            traditional.push([name])
        }

        for (let i=0;i<traditional.length;i++) {
            if (i === traditional.length-1) {
                giftGiving.push(`${traditional[i]} is giving a gift to ${traditional[0]}`)
            } else {
                giftGiving.push(`${traditional[i]} is giving a gift to ${traditional[i+1]}`)
            }
        }

        return giftGiving
    }


}

module.exports = GiftExchange