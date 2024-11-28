import { jwtVerify, SignJWT } from "jose";
import { SessionPayload } from "./definition";

const secretKey = process.env.SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);
export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1hr")
    .sign(key);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    return `${error}`;
  }
}
// export async function createSession(id: number) {
//   const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

//   const;
// }
