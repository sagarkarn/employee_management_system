import Cookies from "js-cookie";
import Repo from "./Repo";

export default class EmployeeRepo extends Repo {
    #token;
    constructor(token) {
        super(token);
        this.#token = token;
    }

    async getAll() {
        await fetch("sanctum/csrf-cookie");
        let headers = {
            Authorization: `Bearer ${this.#token}`,
            "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
            Accept: "application/json",
        };

        const response = await fetch(this.url + "/employee", {
            method: "GET",
            headers: headers,
        });
        let body = await response.json();
        console.log("employee all ", body);
        return {
            status: response.status,
            result: body,
        };
    }

    async getById(id) {
        let headers = {
            Authorization: `Bearer ${this.#token}`,
            Accept: "application/json",
        };
        const response = await fetch(this.url + "/employee/" + id, {
            method: "GET",
            headers: headers,
        });
        let body = await response.json();
        // let body = await response.text();
        // console.log(body);
        return {
            status: response.status,
            result: body,
        };
    }

    async store(data) {
        await fetch(this.base_url + "/sanctum/csrf-cookie");

        let headers = {
            Authorization: `Bearer ${this.#token}`,
            Accept: "application/json",
            "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        };

        const response = await fetch(this.url + "/employee/store", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data),
        });

        return await response.json();
        console.log(body);
    }
}
