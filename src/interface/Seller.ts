export interface ISeller {
  id: string;

  first_name:string;
  last_name:string;
  email:string;
  phone:string;
  postcode:string;
  country:string;
  county:string;
  address:string;
}

export interface ISellerStrore {
  sellers: [] | ISeller[];
  loading: boolean;
  hasMore: boolean;
  setLoading: (data: boolean) => void;
  getSeller: (page: number) => void;
}

export interface ISellersResponsce {
  message: string;
  paginatedData: {
    currentPage: number;
    totalItems: number;
    totalPages: number;
    sellers: ISeller[];
  };
}