import { useContext, useState } from 'react';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function loginHandler({email, password}) {
        setIsAuthenticating(true);
        try{
            const token = await login(email, password);
            authCtx.authenticate(token);
        } catch (error){ 
            Alert.alert(
                'Fallo de autenticación',
                'No se ah podido iniciar sesión, verifica tus credenciales o intentalo más tarde'
            );
        }
        setIsAuthenticating(false);
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Iniciando Sesión..." />
    }

    return <AuthContent isLogin onAuthenticate={loginHandler} />
} 

export default LoginScreen;