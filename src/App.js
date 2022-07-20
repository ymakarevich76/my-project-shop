import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Product } from './pages/Product';

import { NotFound } from './pages/NotFound';

import { ContextProvider } from './context';

function App() {
    return (
        <>
            <ContextProvider>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='about' element={<About />} />
                        <Route path='product/:id' element={<Product />} />
                        <Route element={NotFound}/>
                    </Route>
                </Routes>
            </ContextProvider>
        </>
    );
}

export default App;
