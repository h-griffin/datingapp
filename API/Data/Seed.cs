using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(UserManager<AppUser> userManager){
            // does users table have users
            if(await userManager.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json"); // string of json text
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);        // make string into object (appuser)
            foreach (var user in users)
            {
                user.UserName = user.UserName.ToLower();
 
                await userManager.CreateAsync(user, "Pa$$w0rd"); // user manager saves changes for us
                
            }
        }
    }
}