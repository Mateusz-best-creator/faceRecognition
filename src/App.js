// react router
import { Route, Routes } from 'react-router-dom';

// components
import Navigation from './routes/navigation/navigation.routes';
import HomePage from './routes/home-page/home-page.routes';
import SignIn from './routes/sign-in/sign-in.routes';
import SignUp from './routes/sign-up/sign-up.routes';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route path='home-page' element={<HomePage />} />
        <Route index={true} element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App;
