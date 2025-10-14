import { Toaster } from 'sonner';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route path='/login' element={<LoginPage />} /> */}

        </Routes>
        <Toaster position="top-right" richColors />

      </BrowserRouter>

    </>
  )
}

export default App
