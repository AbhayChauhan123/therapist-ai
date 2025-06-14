import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('Loading…');

  useEffect(() => {
    fetch('http://127.0.0.1:3000/')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('Error: ' + err.message));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>TherapistAI</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
