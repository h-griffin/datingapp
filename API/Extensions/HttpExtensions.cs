using Microsoft.AspNetCore.Http;
using API.Helpers;
using System.Text.Json;

namespace API.Extensions
{
    public static class HttpExtensions
    {
        public static void AddPaginationHeader(this HttpResponse response, int currentPage, int itemsPerPage, int totalItems, int totalPages){
            // pass props in same order as helper expects
            var PaginationHeader = new PaginationHeader(currentPage, itemsPerPage, totalItems, totalPages);
            
            var options = new JsonSerializerOptions{
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            };
            
            // custom header
            response.Headers.Add("Pagination", JsonSerializer.Serialize(PaginationHeader, options));

            // cors
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
    }
}