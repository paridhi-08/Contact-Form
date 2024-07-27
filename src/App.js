import { Bounce, ToastContainer } from 'react-toastify';
import Form from './components/Form';
import 'react-toastify/dist/ReactToastify.css';



function App() {



  return (
    <div>
     <Form/>
     <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      theme="colored"
     />
    </div>

   
  );
}

export default App;
