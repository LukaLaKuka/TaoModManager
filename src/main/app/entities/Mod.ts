export class Mod {
    public path: string;
    public name: string;
    public realname: string;
    public status: ModStatus;

    constructor({ path, name, realname, status }) {
        this.path = path;
        this.name = name;
        this.realname = realname;
        this.status = status;
    }

    async modFromJson(mod: Mod) {
        return new Mod(mod);
    }
}

export enum ModStatus {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED',
}