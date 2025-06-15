export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>AutoHawk</h1>
      <p style={{ marginBottom: '20px' }}>
        America’s easiest used car marketplace
      </p>

      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '10px',
          maxWidth: '500px',
          background: '#f9f9f9',
          marginTop: '40px',
        }}
      >
        <h2 style={{ marginBottom: '10px' }}>Find your car</h2>

        <label>Make:</label>
        <select style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
          <option>Toyota</option>
          <option>Ford</option>
          <option>BMW</option>
        </select>

        <label>Model:</label>
        <select style={{ width: '100%', padding: '10px', marginBottom: '20px' }}>
          <option>Choose model</option>
        </select>

        <button
          style={{
            width: '100%',
            padding: '12px',
            background: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
          }}
        >
          Search
        </button>
      </div>
    </main>
  );
}
