// For the final project I'd like for you to do a bit of independent research.
// 1.) In a few sentences: what is @types and why can you sometimes have an error underneath your imported
// package when using Typescript?

// 2.) Take a deeper look at enums here: https://www.typescriptlang.org/docs/handbook/enums.html
// and here: https://medium.com/@Alserda/readable-ts-enum-actiontypes-in-react-redux-c105fa0a7c9b
// and write a sentence or two explaining pros and cons of using enums in section 3.

// 3.) Write a sentence on how to find the type definition for the JSX.Element we used in section 5

// 4.) Take a look at Union types: http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types
// and write a few sentences on the caveats of using unions to describe multiple interfaces (like we did in section 7)

// 5.) Why is writing:
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}
// the best way to define deleteTodo in section 8? Try to figure out another way to define deleteTodo
// in your project without any errors!

// Submit your final answers and questions to:
