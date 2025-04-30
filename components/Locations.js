import React from 'react'

const Locations = ({ locations }) => {
    if (!locations) {
        return <>Loading...</>
    }
    return (
        <div>
            {/* <div>{JSON.stringify(locations)}</div> */}

            {locations?.map((data, index) => (
                <h4 key={index + data.id * 425}>{data.location}</h4>
            ))}
        </div>
    )
}

export default Locations