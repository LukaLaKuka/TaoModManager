export class Mod {
    public path: string;
    public name: string;
    public realname: string;

    constructor({ path, name, realname }) {
        this.path = path;
        this.name = name;
        this.realname = realname;
    }
}