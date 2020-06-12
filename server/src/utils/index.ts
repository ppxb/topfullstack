import { compare, genSalt, hash } from 'bcryptjs'

export const genPsd = (str: string) => {
  return new Promise((resolve, reject) => {
    genSalt(10, (err, salt) => {
      if (err) reject(err)
      hash(str, salt, (err, hash) => {
        if (err) reject(err)
        resolve(hash)
      })
    })
  })
}

export const comparePwd = (psd: string, hash: string) => {
  return new Promise((resolve, reject) => {
    compare(psd, hash, (err, isMatch) => {
      if (err) reject(err)
      resolve(isMatch)
    })
  })
}
