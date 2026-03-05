declare global {
  namespace App {
    interface PageData {
      meta?: {
        title?: string;
        author?: string;
        description?: string;
        image?: string;
      };
    }
  }
}

export {};
