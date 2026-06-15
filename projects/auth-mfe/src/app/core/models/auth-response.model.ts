export interface AuthResponse {
  success: boolean;
  token: string;
  user?: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };
}