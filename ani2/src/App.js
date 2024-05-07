import {motion} from 'framer-motion';
import {useState} from 'react';

function App() {

  const[isOpen, setIsOPen] = useState(false);

  return (
    <div className="App">
      <motion.div transition={{layout:{duration: 1, type: "spring"} }}
      layout 
      onClick={() => setIsOPen(!isOpen)}
      className="card"
      style={{borderRadius: "1rem", boxShadow: '0px 10px 30px rgba(0,0,0,0.5)' }}>
        <motion.h2 layout="position" >Motion Card</motion.h2>
        {isOpen && (
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{duration:2 }}

        className="expand">
          <p>Expandable Card Animation</p>
          <p>Expandable Card Animation enhances user interfaces by introducing interactive, expandable cards that unfold with smooth, intuitive animations. This feature allows users to tap or click on a compact card to reveal additional information, details, or actions, seamlessly expanding content in place.</p>
          <button>hide</button>
        </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
