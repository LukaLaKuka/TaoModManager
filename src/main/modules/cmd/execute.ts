import { execFile, spawn } from "child_process";
import path from "path";

export async function execute(execPath) {
    const dir = path.dirname(execPath);
    const filename = path.basename(execPath);

    console.log(`Executing ${filename} at ${dir}`);

    execFile(filename, { cwd: dir });
}

export async function spawnProcess(path, detached: boolean = false, workingDir: string | undefined = undefined) {
    try {
        const options = workingDir ? { cwd: workingDir } : {};
        console.log(`Executing ${path} ${workingDir ? `at ${workingDir}` : ''}`);
        let child = spawn(path, [], { ...options, detached });
        child.unref();
    } catch (error: any) {
        console.error('Error executing file:', error.message);
        if (error.stdout) {
            console.error('stdout:', error.stdout.toString());
        }
        if (error.stderr) {
            console.error('stderr:', error.stderr.toString());
        }
    }
}