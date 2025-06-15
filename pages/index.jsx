export default function Home() {
  return (
    <main style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>AutoHawk</h1>
      <p style={{ marginBottom: '20px' }}>America’s easiest used car marketplace</p>

      <div style={{
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '500px',
        background: '#f9f9f9'
      }}>
        <h2 style={{ marginBottom: '10px' }}>Find your car</h2>

        <label>Make:</label>
        <select style={{ width: '100%', padding: '10px', marginBottom: '15px' }}>
          <option>Toyota</option>
          <option>Ford</option>
          <option>BMW</option>
        </select>

        <label>Model:</label>
        <select style={{ width: '100%', padding: '10px', marginBottom: '15px' }}>
          <option>Choose model</option>
        </select>

        <button style={{
          width: '100%',
          padding: '12px',
          background: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          Search
        </button>
      </div>
    </main>
  );
}
export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ color: '#003366' }}>AutoHawk</h1>
      <p>America’s easiest used car marketplace</p>
      <p>Buy. Sell. Drive.</p>
      <div style={{ marginTop: '40px' }}>
        <input placeholder="Search by make or model..." style={{ padding: '10px', width: '300px', fontSize: '16px' }} />
        <button style={{ padding: '10px 20px', marginLeft: '10px', backgroundColor: '#ff0000', color: 'white', border: 'none' }}>Search</button>
      </div>
    </div>
  );
}
