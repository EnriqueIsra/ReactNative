import axios from "axios";

const API_KEY = 'AIzaSyDQFB3qB4CaeIGloBqUlcDPk7iAqUJS2Y0'

async function createUser(email, password){
    const response = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true
        }
    );
}