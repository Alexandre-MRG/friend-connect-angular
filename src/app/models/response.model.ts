import { User } from "./user.model";

export interface ApiResponse {
  results: User[];
  info: {
      seed: string;
      results: number;
      page: number;
      version: string;
  };
}
