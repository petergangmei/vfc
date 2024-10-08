//generate a generic footer component, import Link and navigate to account page when click on About in the footer
import { Link, useNavigate } from'react-router-dom';
import { useDispatch } from 'react-redux';
import { apiRequestSuccess } from '../redux/features/slices/apiSlice';

const Footer = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(apiRequestSuccess(null));
    }
    return (
        <footer className="bg-gray-900 text-white text-sm py-6 mt-10">
            <div className="container mx-auto flex items-center justify-between">
                <div>
                    <p className="ms-5">{new Date().getFullYear()} @ voice for change. All rights reserved.</p>
                </div>
                <div>
                    <ul className="flex items-center">
                        <li className="mr-4">
                        <Link to="/about" onClick={handleClick} className="hover:text-gray-300">
                        About
                        </Link>
                        </li>
                        {/* <li className="mr-4">
                            <a href="#" className="hover:text-gray-300">Contact</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;