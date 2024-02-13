import { Canvas } from '@react-three/fiber'
import './App.css'
import { Environment, OrbitControls } from '@react-three/drei';
import {UI} from './UI.jsx'
import { useState } from 'react'
import { Experience } from './Experience.jsx';
function App() {
  const [section, setSection] = useState(0)
  return (
    <>
      <Canvas camera={{position : [0, 5, 50]}}>
        <Environment preset="sunset" />
        <OrbitControls />
        <Experience />
      </Canvas>

      <UI section={section} onSectionChange={setSection} />

    </>
  )
}

export default App
