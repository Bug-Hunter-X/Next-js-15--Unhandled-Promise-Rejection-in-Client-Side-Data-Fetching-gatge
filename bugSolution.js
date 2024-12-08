```javascript
// pages/about.js
import { Suspense } from 'react';

async function fetchData() {
  const data = await fetch('/api/data');
  const json = await data.json();
  return json;
}

export default function About() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchData().then(setData).catch(setError);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```