using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Helpers


{
    public class PagedList<T> : List<T> // T takes nay type of entity (member dto users etc)
    {
        public PagedList(IEnumerable<T> items, int count, int pageNumber, int pageSize)
        {
            CurrentPage = pageNumber;
            TotlaPages = (int) Math.Ceiling(count / (double) pageSize); // count 10, page size 5 = 2 pages from query
            PageSize = pageSize;
            TotalCount = count;
            AddRange(items); // acces to items inside paged list
        }

        public int CurrentPage { get; set; }
        public int TotlaPages { get; set; }
        public int PageSize { get; set; }   
        public int TotalCount { get; set; } // how many femal users

        public static async Task<PagedList<T>> CreateAsync(IQueryable<T> source, int pageNumber, int pageSize){
            var count = await source.CountAsync();
            var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();
            return new PagedList<T>(items, count, pageNumber, pageSize);
        }
    }
}