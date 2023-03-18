import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState ,useEffect} from 'react';

export function useAuthStatus(){
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    useEffect(() => {
      return () => {
        const auth = getAuth();
        console.log(auth);
        onAuthStateChanged(auth, (user) =>{
            if (user) {
                setLoggedIn(true);
            }
            setCheckingStatus(false);
        });
      };
    }, []);

  return { loggedIn, checkingStatus };
}
