import { JsonHandler } from '@tomhuel/jsonhandler';
import path from 'node:path';
import { CONFIGDIR } from '../../../config/paths';
import { Mod, ModStatus } from '../../entities/Mod';

export class ModRepository {

    private static jsonKey = 'mods';
    private readonly jsonhandler: JsonHandler;

    constructor() {
        this.jsonhandler = new JsonHandler(path.join(CONFIGDIR, 'config'));
    }

    async get(): Promise<Mod[]> {
        let mods = (await this.jsonhandler.getProperty(ModRepository.jsonKey));
        if (Array.isArray(mods)) {
            return mods as Mod[];
        }
        return [];
    }

    async delete(realname: string) {
        let mods = await this.get();
        let modIndex = await this.indexOfRealname(realname);
        mods.splice(modIndex, 1);
        this.jsonhandler.setProperty(ModRepository.jsonKey, mods);
    }

    async add(mod: Mod) {
        let mods: Mod[] = await this.get();
        mods.push(mod);
        this.jsonhandler.setProperty(ModRepository.jsonKey, mods);
    }

    async update(realname: string, mod: Mod) {
        let mods = await this.get();
        let modIndex = await this.indexOfRealname(realname);
        mods[modIndex] = mod;
        this.jsonhandler.setProperty(ModRepository.jsonKey, mods);
    }

    async enableMod(realname: string) {
        await this.setStatus(realname, ModStatus.ENABLED);
    }

    async disableMod(realname: string) {
        await this.setStatus(realname, ModStatus.DISABLED);
    }

    private async setStatus(realname: string, status: ModStatus) {
        let mod = await this.findByRealname(realname);
        mod.status = status;
        this.update(realname, mod);
    }

    public async findByRealname(realname: string): Promise<Mod> {
        let mods = await this.get();
        let mod = mods.find((mod) => {
            return mod.realname === realname;
        });
        if (!mod) throw new Error(`Mod ${realname} not found!`);
        return mod;
    }

    async indexOfRealname(realname: string): Promise<number> {
        let mods = await this.get();
        let modIndex = mods.findIndex((mod) => {
            return mod.realname === realname;
        });
        if (modIndex === -1) throw new Error(`Mod ${realname} not found!`)
        return modIndex;
    }
}