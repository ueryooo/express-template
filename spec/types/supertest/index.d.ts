import { IUser } from "@models/user";
import "supertest";

declare module "supertest" {
  export interface Response {
    headers: Record<string, string[]>;
    body: {
      error: string;
      users: IUser[];
    };
  }
}
