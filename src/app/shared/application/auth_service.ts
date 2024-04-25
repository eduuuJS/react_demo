
export class AuthService {

    static login() {
        localStorage.setItem('authState', 'true');
    }

    static logout() {
        localStorage.removeItem('authState');
    }

    static getAuthState() : boolean {
        return localStorage.getItem('authState') === 'true';
    }
}