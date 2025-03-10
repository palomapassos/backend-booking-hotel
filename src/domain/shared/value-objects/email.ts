export default class Email {
    readonly value: string;

    private constructor(email: string) {
        this.value = email;
    }

    static create(email: string) {
        return new Email(email);
    }

    validate() {
        return !!this.value
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
}
