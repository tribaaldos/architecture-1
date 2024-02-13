import { Canvas } from '@react-three/fiber'
import './App.css'
import { Environment, OrbitControls } from '@react-three/drei';
import { Casa } from './components/Casa';
import UI from './UI';
import { useState } from 'react'
function App() {
  const [section, setSection] = useState(0)
  return (
    <>
      <Canvas camera={{position : [0, 5, 50]}}>
        <Environment preset="sunset" />
        <mesh>
          <boxGeometry args={[500, 1, 500]} />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls />
        <Casa />
      </Canvas>

      <UI section={section} onSectionChange={setSection} />

    </>
  )
}

export default App
