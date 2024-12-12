import Toolbar from './components/Toolbar';
import './App.css'
import './styles.css'

function App() {

  // The goal of this is to demonstrate interactive functionality 
  // using event handling functions
  // there are multiple ways of defining functions that we pass as props
  // this first example is using an anonymous arrow function

  function movieAlert () {
    alert('Playing!!');
    // you would put further functionality in here
    // actually making a movie play, which would be more lines of code.
  }

  function fileAlert () {
    alert('Uploading!');
  }

  //  ==================== This is one way
  // using a named function and passing that in
  return (
    <>
      <Toolbar onPlayMovie={movieAlert} onUploadImage={fileAlert}/>
    </>
  )

  //  ==================== This is one way
  //    using an anonymous arrow function
  //    it really only works well if you have a one or two line function
  //      after that, you may want to consider a named function for readability
  // return (
  //   <>
  //     <Toolbar 
  //       onPlayMovie={() => alert('Playing!!')}
  //       onUploadImage={() => alert('Uploading!')}
  //     />
  //   </>
  // )
}

export default App
