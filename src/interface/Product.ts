export interface IProductInput {
  name: string;
  images: [string];

  description: string;
  price: number;
  sku: string;
  isMainCategoryItem: boolean;
  categoryId: string;
  subCatgoryId: string;
  mainCategoryId: string;
  pageTitle: string;
  pageDesc: string;
  tags: string;
}
