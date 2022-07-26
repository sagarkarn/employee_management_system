import Cookies from "js-cookie";
import Repo from "./Repo";

export default class AuthRepo extends Repo {
    token;
    constructor(token) {
        super(token);
        this.token = token;
    }

    async user() {
        //await fetch(this.url + "/sanctum/csrf-cookie");
        let headers = {
            Authorization: `Bearer ${this.token}`,
            "X-CSRF-Token": Cookies.get("laravel_session"),
            Accept: "application/json",
        };
        const response = await fetch(this.url + "/user", {
            method: "GET",
            headers: headers,
        });

        let body = await response.text();

        return {
            status: response.status,
            result: body,
        };
    }

    async login(email, password) {
        await fetch("sanctum/csrf-cookie");
        //alert(Cookies.get("XSRF-TOKEN"));
        const response = await fetch(this.url + "/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        return {
            status: response.status,
            result: await response.json(),
        };
    }
}
