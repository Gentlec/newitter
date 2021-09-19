import React, { useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'nwFirebase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} Newitter</footer>
    </>
    )
}

export default App;