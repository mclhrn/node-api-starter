/* eslint-disable no-unused-vars */
import ImageService from './image.service'
import { Request, Response } from 'express'

export class Controller {
  all(req: Request, res: Response): void {
    ImageService.all().then(r => res.json(r))
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params.id)
    ImageService.byId(id).then(r => {
      if (r) {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.sendFile(r.name, { root: __dirname });
      }
      else res.status(404).json({ msg: 'Image not found' })
    })
  }
}

export default new Controller()
