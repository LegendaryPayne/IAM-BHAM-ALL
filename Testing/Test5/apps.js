friends = {
    friends1: [
        "jimmie",
        "lee",
        "payne"
    ],
    friends2: [
        "jimmie",
        "lee",
        "payne"       
    ],
    friends3: [
        "jimmie",
        "lee",
        "payne"       
    ],
}

let r = Object.values(friends).map(element => {
    x = element.map(testing => {
        return testing.toUpperCase()
    })
    return x
})

console.log(r)