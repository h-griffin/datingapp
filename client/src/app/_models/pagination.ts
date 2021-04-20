export interface Pagination {
  currentPage : number;
  itemsPerPage: number;
  totalItems: number;
  totalPAges: number;
 }

// PaginatedResult<Members[]>  array of members
 export class PaginatedResult<T>{
  result: T;
  pagination: Pagination;
  }


