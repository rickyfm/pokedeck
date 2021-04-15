import { Link } from 'react-router-dom';
import * as styles from './styles';
function Navbar() {

  return (
    <nav css={styles.root}>
      <Link to="/"><img src="https://www.freepnglogos.com/uploads/black-pokemon-logo-transparent-27.png" /></Link>
    </nav>
  );
}

export default Navbar;
