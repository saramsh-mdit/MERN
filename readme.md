# React Router Intro

Use to map url to pages or navigate

- / -> homepage

- /about - > aboutpage

- /blog - > blogpage

# Steps

1. Dependencies

`npm install react-router-dom`  
`yarn add react-router-dom`

2. Define Router
   createBrowserRconst navigate = useNavigate(); 
   navigate("/home");outer
   
   ```jsx
   // define route
   const router = createBrowserRouter([
     {
       path: "/",
       element: <HomePage />,
     },
     {
       path: "/blog",
       element: <BlogPage />,
       children: [
         {
           path: ":blogId",
           element: <BlogDetailsPage />,
         },
       ],
     },
   ]);
   ```

3. Provide Routes
   RouterProvider - > router
   
   ```jsx
   // to use it
   const App = () => <RouterProvider router={router}>
   ```
   
   

Use`<Outlet/>`for nested routes

# To Navigate

- Link `<Link to="/about>About</Link>`

- NavLink `<NavLink to="/about>About</NavLink>`

- useNavigate Hook

```jsx
const navigate = useNavigate(); 

navigate("/home");
```

# To Read Params

useParams Hook

```jsx
// To Create Params
path: "/blog/:blogId";

// To Read Prams
const { blogId } = useParams();
```
