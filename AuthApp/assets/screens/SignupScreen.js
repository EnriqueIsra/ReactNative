import { useContext, useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const authCtx = useContext(AuthContext);

    async function singupHandler({email, password}) {
        setIsAuthenticating(true);
        try{
            const token = await createUser(email, password);
            authCtx.authenticate(token);
        } catch (error) {
            Alert.alert(
                'Fallo de autenticación',
                'No fue posible registrar el nuevo usuario, revisa tus credenciales o intentalo más tarde'
            );
        }
        setIsAuthenticating(false);
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creando usuario..." />
    }

    return <AuthContent onAuthenticate={singupHandler}/>
} 

export default SignupScreen;