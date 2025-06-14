import { useState } from 'react';

export default function App() {
  const [prompt, setPrompt] = useState('');
  const [answer, setAnswer] = useState('');

  async function sendPrompt() {
    try {
      const res = await fetch('http://127.0.0.1:3000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer('Error: ' + err.message);
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>TherapistAI</h1>
      <textarea
        rows={4}
        cols={50}
        placeholder="Type your message here…"
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        style={{ fontSize: '1rem', padding: '0.5rem' }}
      />
      <br />
      <button onClick={sendPrompt} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Send
      </button>
      <p style={{ marginTop: '2rem', whiteSpace: 'pre-wrap', fontSize: '1.1rem' }}>
        {answer}
      </p>
    </div>
  );
}
