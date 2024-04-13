import { User } from "./user.types";

export interface ApiResponse {
  results: User[];
  info: {
      seed: string;
      results: number;
      page: number;
      version: string;
  };
}
