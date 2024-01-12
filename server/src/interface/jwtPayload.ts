import { JwtPayload as BaseJwtPayload } from "jsonwebtoken";

export interface JwtPayload extends BaseJwtPayload {
  id: number;
  fullName: string;
  lastName: string;
  email: string;
}
