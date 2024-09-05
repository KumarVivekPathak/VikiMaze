import './App.css';
import ImageGenerator from './components/ImageGenerator/imageGenerator';

function App() {
  return (
    <div className="App">
     <div className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#FFD700] mt-10 m-auto">
      Welcome to{' '}
      <span className="text-[#DE1B89] font-semibold underline decoration-wavy decoration-[#DE1B89] hover:decoration-none transition duration-300 ease-in-out">
        Vikimaze
      </span>
</div>



     <ImageGenerator />
    </div>
  );
}

export default App;
