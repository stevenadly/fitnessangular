import { User } from './user.model';
import { UserAuth } from './user-auth.model';
import { Subject } from 'rxjs';

export class AuthService {

    authChange = new Subject<boolean>();
    private user: User;

    registerUser(userAuth: UserAuth) {
        this.user = {
            email: userAuth.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authChange.next(true);
        debugger;
    }
    
    
    login(userAuth: UserAuth) {
        this.user = {
            email: userAuth.email,
            userId: Math.round(Math.random() * 1000).toString()
        };
        this.authChange.next(true);
    }
    
    logout() {
        this.user = null;
        this.authChange.next(false);
    }


    getUser() {
        return { ... this.user };
    }

    isAuth() {
        return this.user != null;
    }
}