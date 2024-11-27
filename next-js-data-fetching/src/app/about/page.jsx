import React from 'react';

const page = async () => {
    // Use fetch with revalidate
    const res = await fetch('http://localhost:3000/time',
        { next: { revalidate: 10 } },
        // {cache: 'no-store'}
    );
    const data = await res.json();
    const time = data?.time;

    return (
        <div className='h-screen flex justify-center items-center text-amber-600 font-semibold text-lg'>
            Time: {time || ""}
        </div>
    );
};

export default page;