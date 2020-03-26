import path from 'path'
import multer from 'multer'
import crypto from 'crypto'

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, raw) => {
        if (err) cb(err)

        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    },
  }),
}
