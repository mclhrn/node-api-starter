/* eslint-disable no-unused-vars */
import UserService from './user.service'
import { Request, Response } from 'express'

export class Controller {
  all(req: Request, res: Response): void {
    UserService.all().then(r => res.json(r))
  }

  byId(req: Request, res: Response): void {
    const id = Number.parseInt(req.params.id)
    UserService.byId(id).then(r => {
      if (r) res.json(r)
      else res.status(404).json({ msg: 'User not found' })
    })
  }

  create(req: Request, res: Response): void {
    UserService.create(req.body.name).then(r =>
      res.status(201)
        .location(`/api/v1/users/${r.id}`)
        .json(r)
    )
  }
}

export default new Controller()
