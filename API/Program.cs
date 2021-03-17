using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            using var scope = host.Services.CreateScope();  // get service to parse to seed method
            var services = scope.ServiceProvider;

            try{
                var context = services.GetRequiredService<DataContext>();
                await context.Database.MigrateAsync();  // create database if it doesnt exist ('dotnet ef database update')
                await Seed.SeedUsers(context);

            }catch (Exception ex){
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "[Program.cs] an Error occurred during migration");
            }

            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
