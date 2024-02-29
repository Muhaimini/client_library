declare module "response/books" {
  interface Book {
    id: string;
    isbn: string;
    title: string;
    author: string;
    publishedAt: Date;
    quantity: number;
    totalBorrowed: number;
    createdAt: Date;
    updatedAt: Date;
    genre: Genre;
  }

  interface Genre {
    id: string;
    label: string;
  }
}
