export class AppRoutesNamed{
    static readonly ROOT = "/";
    static readonly AUTH = "/auth/*";
    static readonly SIGNIN = "sign-in";
    static readonly SIGNUP = "sign-up";
    static readonly DASHBOARD = "/dashboard/*";
    static readonly USERS = "users";
    static readonly ARTICLES = "articles";
    static readonly SALES = "sales";
}

export class AppRoutesNamedFullPath{
    static readonly SIGNIN = "/auth/sign-in";
    static readonly SIGNUP = "/auth/sign-up";
    static readonly USERS = "/dashboard/users";
    static readonly ARTICLES = "/dashboard/articles";
    static readonly SALES = "/dashboard/sales";
}