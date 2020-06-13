import { compareSync, hashSync } from 'bcryptjs'

export const genPwd = (pwd: string): string => {
  return hashSync(pwd)
}

export const comparePwd = (pwd: string, hash: string): boolean => {
  return compareSync(pwd, hash)
}
