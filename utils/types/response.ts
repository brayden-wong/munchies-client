export type Response<T> = ok<T> | Error;

type ok<T> = {
  status: "ok";
  statusCode: number;
  data: T;
};

type Error = {
  status: "error";
  statusCode: number;
  message: string;
};
