import Promise from 'bluebird'
import { l } from '../lib/logger'

interface Image {
  id: number,
  name: string
}

// TODO: Add these to database
const images: Image[] = [
  { id: 0, name: 'images/nodejs.svg' },
  { id: 1, name: 'images/springboot.svg' },
  { id: 2, name: 'images/python.svg' }
]

export class ImageService {
  all(): Promise<Image[]> {
    l.info(images, 'fetch all Images')
    return Promise.resolve(images)
  }

  byId(id: number): Promise<Image> {
    l.info(`fetch Image with id ${id}`)
    return Promise.resolve(images[id])
  }
}

export default new ImageService()
