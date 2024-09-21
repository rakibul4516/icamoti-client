
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import LoginAuth from './pages/auth/login'
import RegisterAuth from './pages/auth/register'
import AdminPanel from './components/admin-panel/layout'
import AdminProducts from './pages/admin-panel/products'
import AdminFeatures from './pages/admin-panel/features'
import AdminDashboard from './pages/admin-panel/dashboard'
import AdminOrders from './pages/admin-panel/orders'
import NotFoundPage from './pages/not-found'
import ShoppingPage from './components/shopping-page/layout'
import ShoppingAccount from './pages/shopping-page/account'
import ShoppingHome from './pages/shopping-page/home'
import ShoppingCheckout from './pages/shopping-page/checkout'
import ShoppingListing from './pages/shopping-page/listing'
import CheckAuth from './components/common/CheckAuth'
import UnauthPage from './pages/unauth-page'
function App() {

  const isAuthenticated = false;
  const user = null;
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* main routes  */}
      <Routes>
        {/* authentication routes  */}

        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path='login' element={<LoginAuth />} />
          <Route path='register' element={<RegisterAuth />} />
        </Route>
        {/* admin routes  */}
        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminPanel />
          </CheckAuth>
        }>
          <Route path='products' element={<AdminProducts />} />
          <Route path='features' element={<AdminFeatures />} />
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='orders' element={<AdminOrders />} />
        </Route>
        {/* shopping routes  */}
        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingPage />
          </CheckAuth>
        }>
          <Route path='account' element={<ShoppingAccount />} />
          <Route path='home' element={<ShoppingHome />} />
          <Route path='checkout' element={<ShoppingCheckout />} />
          <Route path='listing' element={<ShoppingListing />} />
        </Route>
        {/* not found route  */}
        <Route path='*' element={<NotFoundPage />} />
        <Route path='unauth-page' element={<UnauthPage />} />
      </Routes>
    </div>
  )
}

export default App
