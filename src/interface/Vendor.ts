import { ICategory } from './Catgory';
export interface VendorInput {
  store_name: string
  full_name_of_vendor: string
  email: string
  phone: string
  address: string
  county: string
  country: string
  postcode: string
  location: string
  description: string
  social_media: string
  meta_title: string
  meta_desc: string
  meta_tags: string
  policies: string
  vendor_logo: string
  userId: string|null
  categoryId: string|null
  pageTitle: string
  pageDesc: string
  tags: string
}

export interface IVendor {
  id:string
  store_name: string
  full_name_of_vendor: string
  email: string
  phone: string
  address: string
  county: string
  country: string
  postcode: string
  location: string
  description: string
  social_media: string
  meta_title: string
  meta_desc: string
  meta_tags: string
  policies: string
  vendor_logo: string
  userId: string
  categoryId: string
  pageTitle: string
  pageDesc: string
  tags: string
  createdAt: string
  updatedAt: string
  category:ICategory
}

export interface IVendorStrore {
  vendors: [] | IVendor[]
  loading: boolean
  hasMore: boolean
  setLoading: (data: boolean) => void
  getVendor: (page: number) => void
}

export interface IVendorsResponsce {
  message: string
  paginatedData: {
    currentPage: number
    totalItems: number
    totalPages: number
    vendors: IVendor[]
  }
}