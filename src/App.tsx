import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button, Card, CardContent, CardHeader, Typography} from "@mui/material";
import ColorModeSelect from "./theme/ColorModeSelect.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Card sx={{px: 4, py: 2}}>
        <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
      <CardContent>
          <h1>Vite + React</h1>
          <div className="card">
              <Button onClick={() => setCount((count) => count + 1)} variant={'outlined'}>
                  count is {count}
              </Button>
              <Typography sx={{ py: 2}}>
                  Edit <code>src/App.tsx</code> and save to test HMR
              </Typography>
              <ColorModeSelect />
          </div>
          <Typography sx={{ py: 2}} variant={'caption'} color={'textSecondary'}>
              Click on the Vite and React logos to learn more
          </Typography>
      </CardContent>
    </Card>
  )
}

export default App
