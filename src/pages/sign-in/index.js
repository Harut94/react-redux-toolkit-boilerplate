import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../store/slices/auth/auth-async-actions';

const SignIn = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState();

    useEffect(() => {
        console.log(state);
    }, []);

    return (
        <div >
            <div style={{marginTop: '5px '}}>
                <input />
            </div>
            <div>
                <input />
            </div>
            {/* <button>sign in</button> */}
            <button onClick={() => dispatch(signInAction({ token: 'token' }))}>sign in</button>
        </div>
    );
};

export default SignIn;