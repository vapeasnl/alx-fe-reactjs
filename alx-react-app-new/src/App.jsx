import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <Header />
      <MainContent />
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />
      <Footer />
    </div>
  );
}

export default App;
