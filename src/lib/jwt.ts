import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET!;
export function signAuthToken(payload: object, expiresIn = '7d') {
  return jwt.sign(payload, SECRET, { expiresIn });
}
