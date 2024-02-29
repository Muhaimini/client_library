declare module "response/user-profile" {
  interface User {
    id: string;
    identityId: string;
    name: string;
    address: string;
    contact: string;
    type: UserType;
    createdAt: Date;
    updatedAt: Date;
  }

  type UserType = "librarian" | "member";
}
