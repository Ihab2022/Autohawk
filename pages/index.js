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