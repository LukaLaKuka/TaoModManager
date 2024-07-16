export interface decompressedFile {
    mode: number;
    mtime: Date;
    path: string;
    type: 'file' | 'directory';
    data: Buffer;
}