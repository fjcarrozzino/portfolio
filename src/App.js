import './App.css';
import Card from './Components/Cards/Card';
import Footer from './Components/Footer/Footer';
import Presentation from './Components/Presentation/Presentation';
import { projects } from './projects';

function App() {

  const renderCards = () => {
    return projects.map( p => <Card key={p.title} title={p.title} description={p.description} flip={p.flip} demo={p.demo} git={p.git} images={p.images} keywords={p.keywords} />)
  }

  return (
    <div className="App">
      <div className='app-presentation'>
        <Presentation/>
      </div>
      <div className='app-card'>
        {renderCards()}
      </div>
      <div className='app-footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
