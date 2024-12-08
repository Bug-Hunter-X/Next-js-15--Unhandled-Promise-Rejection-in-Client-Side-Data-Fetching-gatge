```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error if the fetch fails
  const data = await fetch('/api/data');
  const json = await data.json();
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  try {
    // Simulate a network error
    await new Promise((resolve) => setTimeout(resolve, 5000));
    // This will cause an error if the fetch fails
    const data = await fetch('https://rickandmortyapi.com/api/character');
    const json = await data.json();
    res.status(200).json(json);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
```