import React, {useEffect} from 'react';
// react router
import { Route, Routes } from 'react-router-dom';

// firebase listener
import { 
  onAuthStateChangedListsner,
  createUserDocumentFromAuth,
} from './utils/firebase.utils';

// redux hook
import { useDispatch } from 'react-redux';
import { setCurrentUser } from './store/user/user.actions';

// components
import Navigation from './routes/navigation/navigation.routes';
import HomePage from './routes/home-page/home-page.routes';
import SignIn from './routes/sign-in/sign-in.routes';
import SignUp from './routes/sign-up/sign-up.routes';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListsner((user) => {
      console.log("user", user.auth)
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    })

    return unsubscribe;
  }, [dispatch])

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
