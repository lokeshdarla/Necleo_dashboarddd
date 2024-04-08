import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import { Request, Response } from 'express';
import { Octokit } from 'octokit';
import tar from 'tar';

export async function downloadRepository(req: Request, res: Response): Promise<void> {
  try {
    const owner = req.params.owner;
    const repo = req.params.repo;
    const zipFileName = `${owner}-${repo}.zip`;

    const octokit = new Octokit();

    // Fetch repository archive URL
    const { data: archiveLink } = await octokit.repos.downloadTarballArchive({
      owner,
      repo,
      ref: 'main' // Specify the branch or tag
    });

    // Fetch repository archive file
    const response = await octokit.request('GET ' + archiveLink);

    if (!response.ok) {
      throw new Error('Failed to fetch repository contents from GitHub');
    }

    const tarFilePath = path.resolve(__dirname, 'temp.tar.gz');
    const zipFilePath = path.resolve(__dirname, zipFileName);

    // Save the fetched tar.gz file
    await new Promise<void>((resolve, reject) => {
      const fileStream = fs.createWriteStream(tarFilePath);
      response.body.pipe(fileStream);
      response.body.on('error', reject);
      fileStream.on('finish', resolve);
    });

    // Extract the tar.gz file
    await tar.x({ file: tarFilePath, cwd: __dirname });

    // Create a zip archive
    const output = fs.createWriteStream(zipFilePath);
    const archive = archiver('zip', { zlib: { level: 9 } });

    archive.pipe(output);
    archive.directory(path.resolve(__dirname, 'lokeshdarla-Data_Structures_and_Algorithms-main'), false);
    archive.finalize();

    // Send the zip file as response
    output.on('close', () => {
      res.setHeader('Content-disposition', `attachment; filename=${zipFileName}`);
      res.setHeader('Content-type', 'application/zip');
      fs.createReadStream(zipFilePath).pipe(res);
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
}
