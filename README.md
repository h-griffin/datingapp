# Dating app 
![tools](API/assets/tools.png)

## about app
- asp.net c# API
- angular typescript Client
- 

# ======= SECTION 1 =======
### API project
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

### set up & run application
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

### adding entity framework to project

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

- add extensions
    - nuget gallery by pcislo
        - install Microsoft.EntityFrameworkCore.Sqlite by Microsoft
        - adds < package reference > in API.csproj

- add data/datacontext.cs
    - create constructor
    
- add AddDbContext in ConfugureServices in Startup.cs
    - appsettings.development.json 
        - sql lite connection string ok to be public in files.
        - name of file to store database - "Data source=datingapp.db"
    
- install notnet-ef
- `dotnet tool install --global dotnet-ef --version 5.0.1`
- `dotnet ef migrations add InitailCreate -o Data/Migrations`
- error for Microsoft.EntityFrameworkCore.Design
- run again added migrations file
    - **initial create .cs**
    - create table called users
        - two columsn
            - id - integer primary/auto increment
            - username

## create database
- stop api runnung 
- `dotnet ef database update`

- sql extension SQLite by alexcvzz
- command shift p 
    - use sql lite open database
    - sqlite explorer pannel view
    - right click on users
        - new query insert
        - write queries
            - highlight adn right click, run queries
            - rightclick users, show table

## finsihing walking skeleton
-  adding new controller
    - add endpoints - users & user
- making code asynchronus & scalable
    - async Task & await
- saving changes into source control
    - use github


# ========= SECTION 2 =========
## learning goals
    - use angular cli
    - how to create angular app
    - algular project files
    - angular bootstrap process
    - using angular http client service
    - run angular app over https
    - add packages with npm
        - font awesome
        - bootstrap

## create angular app client (angular cli)
- inside datingapp dir
- `npm install -g @angular/cli@7.1.0`
- `ng new client --skip-tests --style=css`
    - yes strict (should have said no)
    - yes angular routing
- cd client
- `ng serve`

- contents
    - angular apps are single page
    - <app-root> class
    - typescript decorator (@Component) - normal class can be used as componenet

- interpilation : give data from component to template view
    - set variable in comp and use with double braces {{}}

## vs code extensions to use angular
- angular language service by angular
- angular snippets by john papa
- bracket pair colorizer 2 by conraadS

## HTTP requests in angular component
- add angular module **app.module.ts**
    - imports :[ HttpClientModule ]

- http naturally async req 
    - angular component constructor too early for async req
    - use initilization lifecycle

- typescript gives typesafety unless you use `any` as user property;
- observable : how Typescript handles asynchronus code
- subscribe : 

## adding cors in API
- cross origin rescource sharing
- blocks all front end request from any api not in same origin (local ports are different)
- must supply header to specify its ok

- add service for cors
    - configure services -order doesnt matter
    - configure - must be between routing and endpoints, and before use auth

## display users in client
- li component : doesnt display without the content, displays for dynamic content
- curly braces in html

## adding bootstrap and fontawesome
- using jquery to adjust messes with angular 
- use angular bootstrap (ngx botostrap)
- `ng add ngx-bootstrap`
- `npm install font-awesome`

## using https in mac OSX
- set up angular to use ssl
- take certificate and key from file (development only cert)
- double click cert, expand trust, always trust
- turn on ssl
```
serve{
"sslCert": "./ssl/server.crt",
"sslKey": "./ssl/server.key",
"ssl": true,
```

- https cors error, must allow https

- .gitignore ssl folder (cert and key)

# ========= SECTION 3 =========

## learning goals
- basic authentication and storing passwords
- inheritance in c# (DRY do not repeat yourself)
- using c# debugger
- using data transfer objects (DTOs)
- validation
- JSON web tokens (JWTs)
- using services in c#
- middle ware
- extension methods - DRY

## where do i start
- requirements
- users should
    - log in 
    - register
    - view other users
    - message other users

## storing passwords in the database
- **X** storing in clear text
- use ssl to encrypt 
```
id  user  password
1   bob   pass
2   tom   passowrod
3   jane  pw
```

- **X** use a password hasher
- hash is the same
- protects full database execpt the one passowrd
```
id  user  password
1   bob   324234 <
2   tom   355334
3   jane  324234 <
```

- **√** hash and salting password
- scrambles the hash
- protects people that use same password
```
id  user  password   passwordSalt
1   bob   324234 <  436463 <
2   tom   355334    646868 
3   jane  324234 <  323534 < 
```

## update user entity
- add properties
- create new migration
    - stop API
    - `dotnet ef migrations add UserPasswordAdded`
    - `dotnet ef database update`
- byte property shows as 'blob' this is ok

## new controller to manage login/registration
- create Base Api controller
- users controller now derives from baseapicontroller instead of base controller

## create account controller and register users
- create account controller
- HMAC - built in disposal

- register user test (postman)
    - 404 restart server (added new controller)

- why?
    - user : 500
    - user string : 200 

## using the debugger
- mac vscode
    - breakpoint at register user
    - exe - windows // dll - mac

- api controller cannot find pws (must be sent as an object) tell where to find
    - GetBytes(password) cannot take null 

## adding validation (prevent empty string username)
- add validation at DTO level
- validation comes built in because of API controller tag

## clear/reset database
- `dotnet ef database drop`
- `dotnet ef database update`

## token authentication
- json webtoken 
    - industry standard
    - self contained, can contail
        - credentials
        - claims
        - other info
    
    - structure : long string seperated by period
        - header : algorithm and type
            - algorithm used to encrypt in 3rd part
        - payload : identifiers and claims
        - signature : encrypted
            - encrypted by server key that never leaves server

- token authentication
    - send un pw to server
    - server sends token to store on machine
    - sends token back for each req
    - server that signed token has access to key
    - server verifies token anad sends back response
- benifits
    - no session to manage
    - single token with multiple backends (if they share same signature/key)
    - no cookies required (mobile friendly)
    - once given a token no need to ask for verification again

## create jwt service
- receive app user and create/return jwt to account controller
- interface
    - contract between self and class
    - interface gets this classes properties/methods/events
    - no implementation logic only functionality provided by signature
- preficx interfaces with I

- add in startup.cs configureservices
    - add scoped (lifetime of http request)
- dont need interfaece for token service, easier to test an interface

## creating token handler / jwt token
- System.IdentityModel.Tokens.Jwt 
- create key, creds, decoder

- add to log in register 
- change account controller returning user to UserDTO

## authentication middleware
- add authorized attribute
- add middleware to authenticate jwt token
- Microsoft.AspNetCore.Authentication.JwtBearer

- 401 unauthorized
    - need to send jwt with req
    - for now add in manually in header

## adding extension methods
- add methods to existing types without creating or modifying type
- extension needs to be static : does not need new instance
- use this before spicifying typ eof extension

# ========= SECTION 4 =========

## learning goals
- create components with angular cli
    - components must be registerd
- angular template forms
- angular services (vs API calls)
- understanding observables (api calls)
- structural direcives (conditionally display elements)
- component communication using input and output properties
    - parent to child
    - child to parent

## adding nav bar componoent
- `cd client/src/app`
- `ng g -h` ng generate help
- `ng g c nav --skip-tests` skip test file
    - generate componenet nav 
- nav added to ng declarations in app.module.ts
- add app-nav tag in app component.html
- https://getbootstrap.com/docs/5.0/examples/carousel/ copy nav element into nav.component.html
- adjust html 

## filling out form and getting token
- import andular forms module in app module.ts
- #loginform="ngForm" attribute makes it an angular fomr

- `[(ngModel)]="binding"`
    - ng model "bannana in a box" 
    - square[] receive from component
    - both is two way binding with component

- `cd client/src/app/_services`
- `ng g s account --skip-tests`
    - generate service account
- service can be injected into other components and services 
- angular service is singlton
    - once initialized it will stay initilized until application is disposed (user closes browser)
    - angular components are destroyed when not in use - services stay
- account service will make req to API
- =assign :type

## injecting services into components
- inject in nav.component.ts
- login returns an observable : does nothing until you subscribe

## conditionals
- hide links until logged in
- `*ngIf="loggedIn"` bool set in nav component

- adding drop down functionality
- for root : has services and components that need to be initilized 

- bootstrap style shortcuts "mt-3" = margin-top: 3px

## observables 
- standard for ES7 (ES2016) (compatible is ES2015)
- introduced in angular v2
- lazy collections of multiple values over time
    - going to use for http request and components change for value changes
- news letter, only subscribers get print
- promise (.then)
    - single future value
    - not lazy (regardless if no one is listening)
    - can not cnacel
- observabale
    - multiple values over time
    - lazy (no one subscribe)
    - able to cancel
    - can use with map, filter, reduce, etc
        - can use map to edit data before passing it along
        - chain a pipe to chain funtions to edit data
        - .subscribe (what to do next)
        - .error (if theres an error)
        - () anon , console log
        - can use ToPromise()
        - loses extra functionality but is simple
    - can use asyn pipe | to automatically sub/unsub
    
## persisting log in
- store in lovcalstorage
- interface in typescript - specify something is a type of spmething
- replay subject - buffer object stores values and each subscribe opmits last value inside it (or more)
- observable gets $ at end
- !!user;  turns obj into boolean

- async pipe in nav component

## adding home poage component
- cd client/src/app 
- `ng g c home --skip-tests`
- add <app-home> comp in app component html

## create form 
- cd client/src/app 
- `ng g c register --skip-tests`
- use ng ifs for dynamic display

## parse data from parent to child
- down from home to register
- move get users functionality from app to home

- inside home app register tag [usersFromHomeComponent]="users"

- inside register option selector tag
*ngFor="let user of usersFromHomeComponent" [value]="user.userName" 

- must call getUSErs in init

## child to parent
- cancel button in register needs to turn off task in home
- needs to turn off register mode
- 1 output property
- 2 what to emit when clicked
- [home com template] inside child
    - receiveing []
    - output ()
- 3 add cancel register method in home component
- 4 call method in element

## finish registration
- register users from client
- account service register()
- register component register with account services
    - register then hide form


# ========= SECTION 5 =========

## learning goals
- angular routing (single page application)
    - navigate different components rather than pages
- adding bootstrap theme
- angular route guards
- using shared module (rahter than just app)

## more components to route to
- cd app
- mkdir members
- cd members
- `ng g c member-list --skip-tests`
- `ng g c member-detail --skip-tests`
- cd .. (app)
- `ng g c lists --skip-tests`
- `ng g c messages --skip-tests`

- app routing genereated from app set up (yes to angular routing)
- set up routes in app-routing-module

## add nav links
- replace href with angular routing routerLink="/"
- apply active with   routerLinkActive="active" on each a tag

- routing in code
- inject router in nav comp
- once logged in router tomembers page
- clear user information from login form on logout later

- toast service for notifications
- cd client
- npm install ngx-toastr

## prevent acces to routes - route guards
- cd src/app/_guards
- ng g guards auth --skip-tests
    - canActivate interface
