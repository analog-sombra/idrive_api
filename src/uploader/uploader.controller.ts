import {
  Controller,
  Post,
  Param,
  UseInterceptors,
  UploadedFile,
  Res,
  Req,
} from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { FileInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';

import express from 'express';
import { existsSync, mkdirSync } from 'fs';

interface response {
  status: boolean;
  data: unknown;
  message: string;
  function: string;
}

@Controller('uploader')
export class UploaderController {
  constructor(private readonly uploaderService: UploaderService) {}

  @Post('upload/:path')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: (req, file, cb) => {
          const destinationPath = `./public/images/${req.params.path}/`;

          if (!existsSync(destinationPath)) {
            mkdirSync(destinationPath, { recursive: true });
          }
          cb(null, destinationPath);
        },
        filename: (req, file, cb) => {
          cb(null, `${new Date().valueOf()}_${file.originalname}`);
        },
      }),
    }),
  )
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Res() response: express.Response,
    @Req() req: express.Request,
    @Param('path') path: string,
  ): void {
    if (!path) {
      const res: any = {
        data: [],
        function: 'uploadFile',
        status: false,
        message: 'Path parameter is missing. Please provide a valid path.',
      };

      response.status(400).send(res);
      return;
    }

    if (!file) {
      const res: response = {
        data: [],
        function: 'uploadFile',
        status: false,
        message: 'Unable to store image',
      };

      response.send(res);
      response.end();
    }
    // const filePath = `/public/images/${path}/${file.filename}`;
    // const filename = `${req.protocol}://${req.get('Host')}${filePath.replace(
    //   /\\/g,
    //   '/',
    // )}`;
    const filePath = `public/images/${path}/${file.filename}`;

    const res: response = {
      data: filePath,
      function: 'uploadFile',
      status: true,
      message: 'image store sussfully',
    };

    response.send(res);
    response.end();
  }
}
