import { RotateLoader } from 'react-spinners';
import './Loader.scss'

const Loader = () => {
  return (
    <div className="loader">
      <RotateLoader color="#888888" />
    </div>
  );
}

export default Loader