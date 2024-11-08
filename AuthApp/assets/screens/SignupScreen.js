import { useState } from "react";

import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    async function singupHandler({email, password}) {
        setIsAuthenticating(true);
        try{
            await createUser(email, password);
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