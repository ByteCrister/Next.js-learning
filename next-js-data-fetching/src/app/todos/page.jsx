import React from 'react'
import Link from 'next/link';

import getTodos from '@/services/getTodos'

const page = async () => {
    const todos = await getTodos();
    if (!todos) return <span className='text-red-600 text-base text-center'>No todos found!!</span>
    return (
        <div className='p-4 flex flex-col justify-center items-center'>
            <h1>Todos</h1>
            <div className='grid grid-cols-5 gap-2'>

                {
                    todos.map((todo) => {
                        return <div key={todo.id} className='border-2 border-stone-400'>
                            <h2>ID: {todo.id}</h2>
                            <h3>Title : {todo.title}</h3>
                            <button className='bg-amber-600 rounded px-2 py-1 text-gray-100'><Link href={`/todos/${todo.id}`}>View More</Link></button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default page