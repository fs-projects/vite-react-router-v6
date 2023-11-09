import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home.tsx'
import { About } from './components/About.tsx'
import { Navbar } from './components/Navbar.tsx'
import { OrderSummary } from './components/OrderSummary.tsx'
import { NewProducts } from './components/NewProducts.tsx'
import { FeaturedProducts } from './components/FeaturedProducts.tsx'
import { Products } from './components/Products.tsx'
import { NoMatch } from './components/NoMatch.tsx'
import { Users } from './components/Users.tsx'
import { UserDetails } from './components/UserDetails.tsx'
import { Admin } from './components/Admin.tsx'
import { AuthProvider } from './components/auth.tsx'
import { Login } from './components/Login.tsx'
import { Profile } from './components/Profile.tsx'
import { RequireAuth } from './components/RequireAuth.tsx'

const LazyAbout = React.lazy(() => import('./components/About.tsx'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/profile'
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path='about'
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
