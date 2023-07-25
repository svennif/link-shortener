import React, { useState } from 'react';
import axios from 'axios';
import ClipboardJS from 'clipboard';

function App() {
  new ClipboardJS('.copy-short-link');
  const [input, setInput] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copy, setCopy] = useState(false);

  async function shortenUrl() {
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      setShortUrl(res.data.result.full_short_link);
    } catch (error) {
      console.error();
    }
  }

  return (
    <>
      <form onSubmit={(e) => { e.preventDefault(); shortenUrl(); }}>
        <label htmlFor="long-url">Insert your URL</label>
        <input
          type="text"
          name="long-url"
          id="long-url"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button type="submit">Shorten</button>
      </form>

      {shortUrl && (
        <div>
          <input
            type="text"
            id='shortened-link'
            className="shortened-link"
            value={shortUrl}
            readOnly
          /></div>
      )}
      <button type='button' className="copy-short-link" data-clipboard-target="#shortened-link" onClick={() => setCopy(true)}>
        {copy ? "Copied" : "Copy"}
      </button>
    </>
  )
}

export default App;
