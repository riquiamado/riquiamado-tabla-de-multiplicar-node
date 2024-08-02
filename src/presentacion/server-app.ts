import { CreateTable } from '../domain/usecases/create-table.useCases';
import { SaveFile } from '../domain/usecases/save-file.use-case';

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName: string;
  fileDestination: string;
}

export class ServerApp {
  constructor() {}

  static run({ base, limit, showTable,fileName,fileDestination }: RunOptions) {
    console.log('Server is running on port 3000');
    const table = new CreateTable().execute({ base, limit });

    const wasCreated = new SaveFile().execute({ fileContent: table, fileDestination, fileName});

    if (showTable) {
      console.log(table);
    }

    wasCreated ? console.log('File created') : console.log('File not created');
  }
}
