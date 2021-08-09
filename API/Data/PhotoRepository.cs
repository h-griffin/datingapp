using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly DataContext __context;
        public PhotoRepository(DataContext _context)
        {
            __context = _context;

        }


        public async Task<Photo> GetPhotoById(int id)
        {
            return await __context.Photos
               .IgnoreQueryFilters()
               .SingleOrDefaultAsync(x => x.Id == id);
        }

        public async Task<IEnumerable<PhotoForApprovalDto>> GetUnapprovedPhotos()
        {
            return await __context.Photos
                .IgnoreQueryFilters()
                .Where(p => p.IsApproved == false)
                .Select(u => new PhotoForApprovalDto{
                    Id = u.Id,
                    Username = u.AppUser.UserName,
                    Url = u.Url,
                    IsApproved = u.IsApproved
                }).ToListAsync();
        }

        public void RemovePhoto(Photo photo)
        {
            __context.Photos.Remove(photo);
        }
    }
}