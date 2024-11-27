import { redirect } from 'next/navigation';
import React from 'react'

const Redirect = () => {
    redirect('/time');
};

const page = () => {
    Redirect();
    return (
        <div>page</div>
    )
}

export default page