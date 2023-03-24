export const PAGE_URL = "http://localhost:3000/";

export interface UserInterface {
  name: string;
  id: number;
  userRole: number;
}
export const delay = (time: number) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export enum Sizes {
  xs = "w-1/5",
  sm = "w-2/5",
  md = "w-3/5",
  lg = "w-4/5",
  xl = "w-screen",
  fl = "w-full",
}