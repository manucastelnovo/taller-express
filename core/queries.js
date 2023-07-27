export const GET_TODOS_QUERIES = 'SELECT * FROM public.todos'

export const POST_TODO_QUERY = ' INSERT INTO public.todos (name,description) VALUES ($1,$2) RETURNING *;'