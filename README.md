## ======= SECTION 1 =======
- API project
- walking skeleton 
    - put data in database
    - make api to get data
    - make angular app to query api and get data
    - display in browser

- learning goals
    - use dotnet cli
    - api controllers and endpoints
    - entity framework
    - api project structure
    - config and env variables
    - source control (github)

- check if dotnet sdk is installed
    - `> $ dotnet --info `
- template : ASP.NET Core Web API 
    - `dotnet new sln`
    - `dotnet new webapi -o API`
    - add project into solution
    - `dotnet sln add API`

- extensions
    - c# by omnisharp
    - c# extensions by joskreativ
    - autosave

- get to project folder
    - `cd API`
- build application (http & https)
    - `dotnet run`
- trust cetificate for sdk (https)
    - cancel server
    - `dotnet dev-certs https --trust`
    - `dotnet run`
    - 5001 cant be found (api project)
        - look at controller: json shows for localhost:5001/weatherforecast (default from template)
    - controller end point (httpGet)

- **appsettings.Development.json**
    - change "Microsoft" log level from warning to information

- **Stratup.cs** 
    - configure services "dependency injection" - give other parts of application acess

- **properties/launchsettings.json**
    - `"launchBrowser": false,`

- `dotnet watch run` shows file changes

- creating entity
    - add get set properties to **Entities/AppUser.cs**

- entity framework
    - ORM object relational mapper
    - translates SQL commands to update tables in database
    - features
        - querying
        - change tracking
        - saving (db)
        - concurrency (others usin gdb)
        - transactions
        - caching
        - built in conventions 
        - migrations (schema)

- adding entity framework to project
- extensions
    - nuget gallery by pcislo
        - install Microsoft.EntityFrameworkCore.Sqlite by Microsoft
        - adds < package reference > in API.csproj

- add data/datacontext.cs
    - create constructor
    
- add AddDbContext in ConfugureServices in Startup.cs
    - sql lite connection string ok to be public in files.
    - 