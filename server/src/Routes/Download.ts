import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import archiver from 'archiver';
import fs from 'fs';
import path from 'path';

const downloadRouter = express.Router();

downloadRouter.get("/", async (req: Request, res: Response) => {
  try {
    const folderPath = '/Users/lokeshnagasaidarla/Developer/webdev/Necleo/server/src/controllers';
    if (!fs.existsSync(folderPath)) {
      throw new Error(`Folder not found: ${folderPath}`);
    }

    const archive = archiver('zip', {
      zlib: { level: 9 }
    });

    archive.pipe(res);

    archive.directory(folderPath, false);

    archive.finalize();

    res.setHeader('Content-disposition', `attachment; filename=${path.basename(folderPath)}.zip`);
    res.setHeader('Content-type', 'application/zip');
  } catch (error) {
    console.error('Error zipping folder:', error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Error zipping folder" });
  }
});

export default downloadRouter;
