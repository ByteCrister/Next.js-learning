import React from 'react';
import getTodosByID from '@/services/getTodosByID';

export const generateMetadata = async ({ params }) => {
  const todo = await getTodosByID((await params).id);
  return {
    title: todo.title,
    description: todo.title,
    keywords: [todo.title.split(' ')]
  }
};

const page = async ({ params }) => {
  const id = (await params).id;

  const todo = await getTodosByID(id);

  if (!todo) {
    return <h1>No todo found!!</h1>;
  }

  return (
    <div>
      <h2>Title: {todo.title}</h2>
    </div>
  );
};

export default page;