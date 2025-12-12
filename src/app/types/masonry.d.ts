declare module 'masonry-layout' {
  class Masonry {
    constructor(element: string | Element, options?: Masonry.Options);
    layout(): void;
    // Add other methods and properties as needed
  }
  namespace Masonry {
    interface Options {
      itemSelector?: string;
      columnWidth?: string | number;
      percentPosition?: boolean;
      // Add other options as needed
    }
  }
  export = Masonry;
}