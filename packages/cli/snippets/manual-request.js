const listExample = async (z, bundle) => {
  const customHttpOptions = {
    url: 'https://example.com/api/v2/recipes.json',
    headers: {
      'my-header': 'from zapier',
    },
  };
  const response = await z.request(customHttpOptions);

  const recipes = response.data;
  // You can do any custom processing of recipes here...
  return recipes;
};

const App = {
  // ...
  triggers: {
    example: {
      // ...
      operation: {
        // ...
        perform: listExample,
      },
    },
  },
};
