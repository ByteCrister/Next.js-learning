import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log('server session: ' + JSON.stringify(session, null, 2));
  return (
    <div>about page</div>
  )
}

export default page