import React, { Component } from 'react';
import Homepage from './pages/home';
/*Component Imports*/
import Footer from './components/footer';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main className="App-main">
          <Homepage />
        </main>
        <section className="col-lg-12 page-footer bg-dark font-small teal pt-4 pb-4">
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
