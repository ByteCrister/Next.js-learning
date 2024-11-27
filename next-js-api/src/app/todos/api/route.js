export const GET = async () => {
    return Response.json({ todos });
};

export const POST = async (request) => {
    try {
        // Parse the request body once
        const body = await request.json();
        // console.log(body);

        // Validate the required fields
        if (!body.title || typeof body.title !== "string") {
            return new Response(
                JSON.stringify({ error: "Invalid title" }),
                { status: 400 }
            );
        }

        // Create a new todo
        const newTodo = {
            id: todos.length + 1,
            title: body.title,
            completed: false,
        };

        todos.push(newTodo);

        return new Response(
            JSON.stringify({
                message: "Created new todo",
                todos,
            }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ error: "Invalid request" }),
            { status: 500 }
        );
    }
};

const todos = [
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Walk the dog", completed: true },
    { id: 3, title: "Complete project report", completed: false },
    { id: 4, title: "Call mom", completed: true },
    { id: 5, title: "Schedule a doctor appointment", completed: false },
    { id: 6, title: "Read a book for 30 minutes", completed: true },
    { id: 7, title: "Pay utility bills", completed: false },
    { id: 8, title: "Plan weekend activities", completed: false },
    { id: 9, title: "Organize the garage", completed: true },
    { id: 10, title: "Prepare for Monday meeting", completed: false },
];