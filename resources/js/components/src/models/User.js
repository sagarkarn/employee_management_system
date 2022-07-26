class User {
    constructor(
        id,
        name,
        email,
        emailVerifiedAt,
        password,
        rememberToken,
        createdAt,
        updatedAt
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.emailVerifiedAt = emailVerifiedAt;
        this.password = password;
        this.rememberToken = rememberToken;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    get id() {
        return this.id;
    }
    get name() {
        return this.name;
    }
    get email() {
        return this.email;
    }

    get emailVerifiedAt() {
        return this.emailVerifiedAt;
    }
    get password() {
        return this.password;
    }
    get rememberToken() {
        return this.rememberToken;
    }
    get createdAt() {
        return this.createdAt;
    }
    get updatedAt() {
        return this.updatedAt;
    }
}
