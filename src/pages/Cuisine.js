import { useLocation } from 'react-router-dom';
import RenderList from '../layout/RenderList';
function Cuisine(props) {
  const location = useLocation();
  const query = location.pathname.split('/')[2];

  return <RenderList query={query} resultTitle={query + ' cuisine '} />;
}
export default Cuisine;
