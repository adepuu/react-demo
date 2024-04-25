import './style.css';
import { useState } from 'react'
import reactImage from "../../assets/react.svg";
import Button2 from '../../components/Button2'
import Illustration from '../../components/Illustration'

const Home: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Illustration destinationUrl='vitejs.dev' imageUrl='/vite.svg' />
        <Illustration destinationUrl='react.dev' imageUrl={reactImage} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button2 text='Click!!' type='red'/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
};

export default Home;