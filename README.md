# React Tanstack - React Query

## React Query

- React Query is a library that helps you fetch, cache and update data in your React applications.

- React Query is often used to fetch data from an API and store it in a cache, so that the data can be used in multiple components without having to refetch it.

- React Query is built on top of the React Hooks API, and it provides a set of hooks that you can use to fetch and manage data in your React applications.

## Query vs Mutation

### Query

- A query is a request to fetch data from an API.

- A query is read-only, meaning that it does not modify the data on the server.

- A query is typically used to fetch data that is displayed in a component.

### Mutation

- A mutation is a request to modify data on the server.

- A mutation is typically used to create, update or delete data.

- A mutation is not read-only, meaning that it modifies the data on the server.

## useQuery

- The `useQuery` hook is used to fetch data from an API and store it in a cache.

Destructuring the useQuery hook:

```javascript
const { data, error, isLoading, isFetching, isError, isSuccess } = useQuery(queryKey, queryFn, options);
```

### QueryFn

- A queryFn is a function that is used to fetch data from an API.

- If an error occurs while fetching the data, the queryFn should throw an error, which will be caught by React Query and stored in the cache.

- It retries the queryFn a few times before giving up.

- The queryFn can be an async function that returns a Promise, or a synchronous function that returns the data directly.'

Example:

```javascript
queryFn: async (obj) => {
   console.log(obj);
  return "data";
}
```

output:

```javascript
{ queryKey: ['posts'], ... }
```

### QueryKey

- A queryKey is a unique identifier for a query.

- The queryKey is used to store the data in the cache and to retrieve the data from the cache.

- The queryKey is typically a string that represents the query, but it can also be an array of strings or numbers.

Example:

/posts - queryKey: 'posts'
/posts/1 - queryKey: ['posts', 1]
/posts/1/comments - queryKey: ['posts', 1, 'comments']
/posts?authorId=1 - queryKey: ['posts', { authorId: 1 }]
/posts?authorId=1&category=react - queryKey: ['posts', { authorId: 1, category: 'react' }]

### Query Properties

postQuery.data
postQuery.error
postQuery.isLoading
postQuery.isFetching
postQuery.isError
postQuery.isSuccess

## useMutation

- The `useMutation` hook is used to send a mutation to the server.

Destructuring the useMutation hook:

```javascript
const { mutate, mutateAsync, data, error, isLoading, isSuccess, isError } = useMutation(mutationFn, onMutate, onSuccess, onError, onSettled, options);
```

### MutationFn

- A mutationFn is a function that is used to send a mutation to the server.

- If an error occurs while sending the mutation, the mutationFn should throw an error, which will be caught by React Query and stored in the cache.

- The mutationFn can be an async function that returns a Promise, or a synchronous function that returns the data directly.

Example:

```javascript
mutationFn: async (obj) => {
  console.log(obj);
  return "data";
}
```

output:

```javascript
{ queryKey: ['posts'], ... }
```

### Mutation Properties

postMutation.mutate
postMutation.data
postMutation.error
postMutation.isLoading
postMutation.isSuccess
postMutation.isError

### Invalidating Queries

- When a mutation is successful, you can invalidate queries that are affected by the mutation.

- Invalidating a query will cause the query to refetch the data from the server.

- You can invalidate a query by calling the `invalidateQueries` function with the queryKey of the query that you want to invalidate.

Example:

```javascript
import { useMutation, queryClient } from 'react-query';

// ... code

const queryClient = new QueryClient();

// ... code

const postMutation = useMutation(createPost, {
  onSuccess: () => {
    queryClient.invalidateQueries('posts');
  }
});

// ... code
```
