import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';




function App() {
  return (<>
    <section className="todoapp">
      <Header/>
      <Main />
      <Footer/>
    </section>
    <footer className="info">
      <p>Double-click to edit a todo</p>
      {/* <!-- Remove the below line ↓ --> */}
      <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    
    </footer>
  </>
    
  );
}

export default App;
