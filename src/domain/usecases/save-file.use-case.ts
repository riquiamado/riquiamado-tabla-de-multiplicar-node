import fs from 'node:fs';

export interface SaveFileUseCase {
  execute(options: Options): boolean;
}

interface Options {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContent,
    fileDestination = 'outputs',
    fileName = 'table'
  }: Options): boolean {
    try {
      fs.mkdirSync(fileDestination, { recursive: true });
      fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);
      console.log('File created');
      return true;
    } catch (error) {
      return false;
    }
  }
}
