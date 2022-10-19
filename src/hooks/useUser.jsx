import { useContext } from 'react';
import UserContext from '../hooks/useUserProvider';

function UseUser() {
    return useContext(UserContext);
}

export default UseUser;