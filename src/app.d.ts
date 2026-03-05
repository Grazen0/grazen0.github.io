declare module 'reading-time/lib/reading-time';
declare module 'markdown-it-texmath';
declare module 'markdown-it-implicit-figures';
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
