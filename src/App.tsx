import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
      <main style={{ flex: 1, backgroundColor: '#ffffff' }}>
      </main>

      <footer style={{ backgroundColor: '#f1f1f1', padding: '20px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Francisco Plaza Pizarro</p>
        <p style={{ margin: '5px 0', fontWeight: 'bold' }}>Guillermo Bustamante Rodríguez</p>
        <p style={{ margin: '5px 0', color: '#666' }}>2026 - Cloud Computing</p>
      </footer>
    </div>
  )
}

export default App