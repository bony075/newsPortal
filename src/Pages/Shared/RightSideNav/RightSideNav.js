
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {  FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => { 
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
             })
        .catch(e=>console.error(e))
    }
    
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handelGoogleSignIn} className='mb-2'><FaGoogle></FaGoogle> Sign in Google</Button>
                <Button variant="secondary"><FaGithub></FaGithub> Sign in git hub</Button>
            </ButtonGroup>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>


        </div>
    );
};

export default RightSideNav;