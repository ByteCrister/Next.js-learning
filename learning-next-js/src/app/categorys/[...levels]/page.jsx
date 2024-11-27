import React from 'react'

const page = async ({ params }) => {
    console.log({ params });
    const levels = await params.levels
    if (levels.length === 1) return <div>{levels[0]}</div>
    if (levels.length === 2) return <div>{levels[1]}</div>
    if (levels.length === 3) return <div>{levels[2]}</div>
    return (
        <div>
            Category Details
        </div>
    )
}

export default page