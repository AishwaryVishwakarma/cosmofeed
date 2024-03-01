declare interface Page {
  params: {
    [key: string]: string;
  };
  searchParams: {
    [key: string]: string | undefined;
  };
}
