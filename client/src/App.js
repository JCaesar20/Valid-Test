import './App.css';
import Form from './components/FormComponent.js'
import Topbar from './components/Topbar.js'
import illustrator from './images/fillFormIllustrator.svg'
import { createUseStyles } from 'react-jss'

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Topbar />
      <div className={classes.container}>
        <div className={classes.formContainer}>
          <Form />
        </div>
        <div className={classes.imgContainer}>
          <img src={illustrator} alt="img" width="70%" />
        </div>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  container: {
    display: 'flex'
  },
  formContainer: {
    padding: '1rem', 
    width: '70%', 
    backgroundColor: '#343A40', 
    margin: '1rem', 
    borderRadius: '0.5rem', 
    color: 'white',
    boxShadow: '5px 10px 18px #888888'
  },
  imgContainer: {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  '@media (max-width:641px)': {
    container: {
      flexWrap: 'wrap',
      justifyContent: 'center', 
      alignItems: 'center'
    },
    imgContainer: {
      marginBottom: '1rem'
    }
  }
})

export default App;
