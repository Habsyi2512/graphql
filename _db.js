export const books = [
  {
    id: "book-1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: "book-2",
    title: "1984",
    author: "George Orwell",
  },
  {
    id: "book-3",
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
];

export const members = [
  {
    id: "member-1",
    name: "Muhammad Habsyi Mubarak",
    verified: true,
  },
  {
    id: "member-2",
    name: "John Doe",
    verified: false,
  },
];

export const lendings = [
  {
    id: "lending-1",
    book_id: "book-1",
    member_id: "member-1",
    borrowed_at: "2025-01-12",
    returned_at: "2025-01-14",
  },
  {
    id: "lending-2",
    book_id: "book-2",
    member_id: "member-1",
    borrowed_at: "2025-01-12",
    returned_at: "2025-01-14",
  },
];
