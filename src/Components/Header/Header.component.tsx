import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
	return (
		<ul>
			<li>
				<Link to={'/home'}>Home</Link>
			</li>
			<li>
				<Link to={'/about'}>About</Link>
			</li>
			<li>
				<Link to={'/login'}>Login</Link>
			</li>
		</ul>
	);
};

export default Header;
