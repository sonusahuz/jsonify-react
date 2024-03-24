// sidebar
export const sidebarData = [
  {
    id: "1",
    title: "Users",
    href: "/users",
    links: [
      { id: "1", label: "Get all users", href: "/users/#get-all-products" },
      {
        id: "2",
        label: "Get a single user",
        href: "/users/#get-a-single-product",
      },
      { id: "3", label: "Search users", href: "/users/#search-users" },
      {
        id: "4",
        label: "Limit & Skip users",
        href: "/users/#limit-skip-users",
      },
      { id: "5", label: "Add a user", href: "/users/#add-a-user" },
      { id: "6", label: "Update a user", href: "/users/#update-a-user" },
      { id: "7", label: "Delete a user", href: "/users/#delete-a-user" },
    ],
  },
  {
    id: "2",
    title: "Products",
    href: "/products",
    links: [
      {
        id: "1",
        label: "Get all products",
        href: "/products/#get-all-products",
      },
      {
        id: "2",
        label: "Get a single product",
        href: "/products/#get-a-single-product",
      },
      { id: "3", label: "Search products", href: "/products/#search-products" },
      {
        id: "4",
        label: "Limit & Skip products",
        href: "/products/#limit-skip-products",
      },
      { id: "5", label: "Add a product", href: "/products/#add-a-product" },
      {
        id: "6",
        label: "Update a product",
        href: "/products/#update-a-product",
      },
      {
        id: "7",
        label: "Delete a product",
        href: "/products/#delete-a-product",
      },
    ],
  },
  {
    id: "3",
    title: "Todos",
    href: "/todos",
    links: [
      { id: "1", label: "Get all todos", href: "/todos/#get-all-todos" },
      {
        id: "2",
        label: "Get a single todo",
        href: "/todos/#get-a-single-todo",
      },
      {
        id: "4",
        label: "Limit & Skip todos",
        href: "/todos/#limit-skip-todos",
      },
      { id: "5", label: "Add a todo", href: "/todos/#add-a-todo" },
      { id: "6", label: "Update a todo", href: "/todos/#update-a-todo" },
      { id: "7", label: "Delete a todo", href: "/todos/#delete-a-todo" },
    ],
  },
  {
    id: "4",
    title: "Posts",
    href: "/posts",
    links: [
      { id: "1", label: "Get all posts", href: "/posts/#get-all-posts" },
      {
        id: "2",
        label: "Get a single post",
        href: "/posts/#get-a-single-post",
      },
      { id: "3", label: "Search posts", href: "/posts/#search-posts" },
      {
        id: "4",
        label: "Limit & Skip posts",
        href: "/posts/#limit-skip-posts",
      },
      { id: "5", label: "Add a post", href: "/posts/#add-a-post" },
      { id: "6", label: "Update a post", href: "/posts/#update-a-post" },
      { id: "7", label: "Delete a post", href: "/posts/#delete-a-post" },
    ],
  },
  {
    id: "5",
    title: "Recipes",
    href: "/recipes",
    links: [
      { id: "1", label: "Get all Recipes", href: "/recipes/#get-all-recipes" },
      {
        id: "2",
        label: "Get a single Recipe",
        href: "/recipes/#get-a-single-recipe",
      },
      { id: "3", label: "Search Recipes", href: "/recipes/#search-recipes" },
      {
        id: "4",
        label: "Limit & Skip Recipes",
        href: "/recipes/#limit-skip-recipes",
      },
      { id: "5", label: "Add a Recipe", href: "/recipes/#add-a-recipe" },
      { id: "6", label: "Update a Recipe", href: "/recipes/#update-a-recipe" },
      { id: "7", label: "Delete a Recipe", href: "/recipes/#delete-a-recipe" },
    ],
  },
  {
    id: "6",
    title: "Quotes",
    href: "/quotes",
    links: [
      { id: "1", label: "Get all quotes", href: "/quotes/#get-all-quotes" },
      {
        id: "2",
        label: "Get a single quote",
        href: "/quotes/#get-a-single-quote",
      },
      {
        id: "4",
        label: "Limit & Skip quotes",
        href: "/quotes/#limit-skip-quotes",
      },
      { id: "5", label: "Add a quote", href: "/quotes/#add-a-quote" },
      { id: "6", label: "Update a quote", href: "/quotes/#update-a-quote" },
      { id: "7", label: "Delete a quote", href: "/quotes/#delete-a-quote" },
    ],
  },
];

export const dataArray2 = [
  {
    id: "1",
    href: "/api/products",
    label: "/api/products",
    count: "50 products",
  },
  { id: "2", href: "/api/users", label: "/api/users", count: "50 users" },
  { id: "3", href: "/api/todos", label: "/api/todos", count: "50 todos" },
  { id: "4", href: "/api/recipes", label: "/api/recipes", count: "50 recipes" },
  { id: "5", href: "/api/posts", label: "/api/posts", count: "50 posts" },
  { id: "6", href: "/api/quotes", label: "/api/quotes", count: "50 quotes" },
];

export const dataArray3 = [
  {
    id: "1",
    method: "POST",
    label: "/api/products",
    description: "add a product",
  },
  {
    id: "2",
    method: "PUT",
    label: "/api/products/1",
    description: "update a product",
  },
  {
    id: "3",
    method: "DELETE",
    label: "/api/product/1",
    description: "delete a product",
  },
];

export const dataArray = [
  {
    id: "1",
    method: "GET",
    href: "/api/products",
    label: "/api/products",
    description: "get all products",
  },
  {
    id: "2",
    method: "GET",
    href: "/api/products/1",
    label: "/api/products/1",
    description: "get single product",
  },
  {
    id: "3",
    method: "GET",
    href: "/api/products/search?q=Laptop",
    label: "/api/products/search?q=Laptop",
    description: "search products",
  },
  {
    id: "4",
    method: "GET",
    href: "/api/products?limit=10&skip=10",
    label: "/api/products?limit=10&skip=10",
    description: "limit and skip products",
  },
];

// users page
export const usersArray = [
  {
    id: "get-all-users",
    method: "GET",
    label: "Get all users",
    href: "/api/users",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/users')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "get-a-single-user",
    method: "GET",
    label: "Get a single user",
    href: "/api/users/1",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/users/1')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "search-users",
    method: "GET",
    label: "Search users",
    href: "/api/users/search?q=Sheldon",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/users/search?q=Sheldon')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "limit-skip-users",
    method: "GET",
    label: "Limit and Skip users",
    href: "/api/users?limit=10&skip=5",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/users?limit=10&skip=5')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "add-a-user",
    method: "POST",
    label: "Add a user",
    href: "/api/users",
    className: "bg-green-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/users', {
  method: 'POST',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "update-a-user",
    method: "PUT",
    label: "Update a user",
    href: "/api/users/1",
    className: "bg-orange-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/users/1', {
  method: 'PUT',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "delete-a-user",
    method: "DELETE",
    label: "Delete a user",
    className: "bg-red-600 text-white font-medium px-4 rounded mr-2",
    href: "/api/users/1",
    code: `fetch('//jsonifyreact.vercel.app/api/users/1', {
  method: 'DELETE'
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
];

// tdoos page
export const todosArray = [
  {
    id: "get-all-todos",
    method: "GET",
    label: "Get all todos",
    href: "/api/todos",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/todos')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "get-a-single-todo",
    method: "GET",
    label: "Get a single todo",
    href: "/api/todos/1",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/todos/1')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "limit-skip-todos",
    method: "GET",
    label: "Limit and Skip todos",
    href: "/api/todos?limit=10&skip=5",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/todos?limit=10&skip=5')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "add-a-todo",
    method: "POST",
    label: "Add a todo",
    href: "/api/todos",
    className: "bg-green-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/todos', {
  method: 'POST',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "update-a-todo",
    method: "PUT",
    label: "Update a todo",
    href: "/api/todos/1",
    className: "bg-orange-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/todos/1', {
  method: 'PUT',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "delete-a-todo",
    method: "DELETE",
    label: "Delete a todo",
    className: "bg-red-600 text-white font-medium px-4 rounded mr-2",
    href: "/api/todos/1",
    code: `fetch('//jsonifyreact.vercel.app/api/todos/1', {
  method: 'DELETE'
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
];

// posts page
export const postsArray = [
  {
    id: "get-all-posts",
    method: "GET",
    label: "Get all posts",
    href: "/api/posts",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/posts')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "get-a-single-post",
    method: "GET",
    label: "Get a single post",
    href: "/api/posts/1",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/posts/1')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "search-posts",
    method: "GET",
    label: "Search posts",
    href: "/api/posts/search?q=mother",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/posts/search?q=mother')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "limit-skip-posts",
    method: "GET",
    label: "Limit and Skip posts",
    href: "/api/posts?limit=10&skip=5",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/posts?limit=10&skip=5')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "add-a-post",
    method: "POST",
    label: "Add a post",
    href: "/api/posts",
    className: "bg-green-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/posts', {
  method: 'POST',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "update-a-post",
    method: "PUT",
    label: "Update a post",
    href: "/api/posts/1",
    className: "bg-orange-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/posts/1', {
  method: 'PUT',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "delete-a-post",
    method: "DELETE",
    label: "Delete a post",
    className: "bg-red-600 text-white font-medium px-4 rounded mr-2",
    href: "/api/posts/1",
    code: `fetch('//jsonifyreact.vercel.app/api/posts/1', {
  method: 'DELETE'
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
];

// products page
export const productsArray = [
  {
    id: "get-all-products",
    method: "GET",
    label: "Get all products",
    href: "/api/products",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/products')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "get-a-single-product",
    method: "GET",
    label: "Get a single product",
    href: "/api/products/1",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/products/1')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "search-products",
    method: "GET",
    label: "Search products",
    href: "/api/products/search?q=Laptop",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/products/search?q=Laptop')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "limit-skip-products",
    method: "GET",
    label: "Limit and Skip products",
    href: "/api/products?limit=10&skip=5",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/products?limit=10&skip=5')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "add-a-product",
    method: "POST",
    label: "Add a product",
    href: "/api/products",
    className: "bg-green-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/products', {
  method: 'POST',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "update-a-product",
    method: "PUT",
    label: "Update a product",
    href: "/api/products/1",
    className: "bg-orange-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/products/1', {
  method: 'PUT',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "delete-a-product",
    method: "DELETE",
    label: "Delete a product",
    className: "bg-red-600 text-white font-medium px-4 rounded mr-2",
    href: "/api/products/1",
    code: `fetch('//jsonifyreact.vercel.app/api/products/1', {
  method: 'DELETE'
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
];

// quotes page
export const quotesArray = [
  {
    id: "get-all-quotes",
    method: "GET",
    label: "Get all quotes",
    href: "/api/quotes",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/quotes')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "get-a-single-quote",
    method: "GET",
    label: "Get a single quote",
    href: "/api/quotes/1",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/quotes/1')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },

  {
    id: "limit-skip-quotes",
    method: "GET",
    label: "Limit and Skip quotes",
    href: "/api/quotes?limit=10&skip=5",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/quotes?limit=10&skip=5')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "add-a-quote",
    method: "POST",
    label: "Add a quote",
    href: "/api/quotes",
    className: "bg-green-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/quotes', {
  method: 'POST',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "update-a-quote",
    method: "PUT",
    label: "Update a quote",
    href: "/api/quotes/1",
    className: "bg-orange-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/quotes/1', {
  method: 'PUT',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "delete-a-quote",
    method: "DELETE",
    label: "Delete a quote",
    className: "bg-red-600 text-white font-medium px-4 rounded mr-2",
    href: "/api/quotes/1",
    code: `fetch('//jsonifyreact.vercel.app/api/quotes/1', {
  method: 'DELETE'
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
];

// recipes page

export const recipesArray = [
  {
    id: "get-all-recipes",
    method: "GET",
    label: "Get all Recipes",
    href: "/api/recipes",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/recipes')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "get-a-single-recipe",
    method: "GET",
    label: "Get a single Recipe",
    href: "/api/recipes/1",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/recipes/1')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "search-recipes",
    method: "GET",
    label: "Search Recipes",
    href: "/api/recipes/search?q=Pasta",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/recipes/search?q=Pasta')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "limit-skip-recipes",
    method: "GET",
    label: "Limit and Skip Recipes",
    href: "/api/recipes?limit=10&skip=5",
    className: "bg-blue-400 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/recipes?limit=10&skip=5')
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "add-a-recipe",
    method: "POST",
    label: "Add a Recipe",
    href: "/api/recipes",
    className: "bg-green-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/recipes', {
  method: 'POST',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "update-a-recipe",
    method: "PUT",
    label: "Update a Recipe",
    href: "/api/recipes/1",
    className: "bg-orange-500 text-white font-medium px-4 rounded mr-2",
    code: `fetch('//jsonifyreact.vercel.app/api/recipes/1', {
  method: 'PUT',
  // Add body data here
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
  {
    id: "delete-a-recipe",
    method: "DELETE",
    label: "Delete a Recipe",
    className: "bg-red-600 text-white font-medium px-4 rounded mr-2",
    href: "/api/recipes/1",
    code: `fetch('//jsonifyreact.vercel.app/api/recipes/1', {
  method: 'DELETE'
})
  .then((res) => res.json())
  .then((data) => console.log(data))`,
  },
];
