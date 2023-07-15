export type Login = {
  at: string;
  rt: string;
  user: {
    id: string;
    username: string;
    name: string;
    email?: string;
  };
};
