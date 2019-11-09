import {store} from '../util/reducers';
import {changePage} from '../util/actions';

interface Props {
  name: string;
  children?: JSX.Element;
}

function NavItem({name}: Props) {
  const handleItemClick = () => {
    store.dispatch(changePage(name));
  };
  return (
    <li key={name} className="navbar-item" onClick={handleItemClick}>
      <a href="#">{name}</a>
    </li>
  );
}

export default NavItem;
