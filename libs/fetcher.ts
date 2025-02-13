export function fetcher(query: any) {
  // console.log("fetcher query", query);
  return fetch('https://code-word-list.witus.online/api/graphql', { // production api
  // return fetch('http://localhost:3000/api/graphql', { // localhost api
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => {
      // console.log('fetcher json.data :>> ', json.data);
      return json.data;
    })
}
