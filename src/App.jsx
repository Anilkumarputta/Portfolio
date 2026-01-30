import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-700">
        <div className="flex gap-8 mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-24 w-24 drop-shadow-lg hover:scale-110 transition-transform duration-300" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-24 w-24 drop-shadow-lg hover:scale-110 transition-transform duration-300" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-white mb-6">Vite + React + Tailwind</h1>
        <div className="bg-white/20 rounded-xl shadow-lg p-8 mb-6">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 mb-4" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="text-white">
            Edit <code className="bg-black/30 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-white/80 text-lg">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App
