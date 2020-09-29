import React, { useState, useEffect } from "react"

const RandomPerson = ({ results }) => {
    // const [person, setPerson] = useState()
    // useEffect(() => {
    //     fetch(`https://randomuser.me/api?results=${results}`)
    //         .then(x => x.json())
    //         .then(x => setPerson(x))
    // }, [results])
    return (
        <div>
            RandomPerson
            {/* <pre>{JSON.stringify(person, null, 2)}</pre> */}
        </div>
    )
}

export default RandomPerson
