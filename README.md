# Dating app 
## [neil cummings - dating app](https://github.com/TryCatchLearn/DatingApp)
![tools](API/assets/tools.png)
![tools and resources](tools-rescources.md)

## about app
- asp.net c# API
- angular typescript Client 
- sqlite database // postgreSQL
- jwt authentication and validation // asp.net identity & roles
- angular routing
- error handling and client testing
- multiple entity relationships
    - one to many
    - many to many
- photo upload

- custom directives
- SignalR
- Presence Tracking


# ======= SECTION 1 =======
## API learning goals
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

## set up & run application
- check if dotnet sdk is installed
    - `dotnet --info `
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
        - look at controller: json shows for `localhost:5001/weatherforecast` (default from template)
    - controller end point (httpGet)

- **appsettings.Development.json**
    - change "Microsoft" log level from warning to information

- **Startup.cs** 
    - configure services "dependency injection" - give other parts of application access

- **properties/launchsettings.json**
    - `"launchBrowser": false,`

- `dotnet watch run` shows file changes

## adding entity framework to project

- creating entity
    - add get set properties to **Entities/AppUser.cs**

- entity framework
    - ORM 'object relational mapper'
    - translates SQL commands to update tables in database
    - features
        - querying
        - change tracking
        - saving (db)
        - concurrency (others using db)
        - transactions
        - caching
        - built in conventions 
        - migrations (schema)

- add extensions
    - nuget gallery by pcislo
        - install Microsoft.EntityFrameworkCore.Sqlite by Microsoft
        - adds < package reference > in API.csproj

- add data/dataContext.cs
    - create constructor
    
- add AddDbContext in ConfigureServices in Startup.cs
    - appSettings.development.json 
        - sqlite connection string ok to be public in files.
        - name of file to store database - `"Data source=datingapp.db"`
    
- install dotnet-ef
- `dotnet tool install --global dotnet-ef --version 5.0.1`
- `dotnet ef migrations add InitialCreate -o Data/Migrations`
- error for Microsoft.EntityFrameworkCore.Design
- run again added migrations file
    - **initial create .cs**
    - create table called users
        - two columns
            - id - integer primary/auto increment(user 1, user 2, etc)
            - username

## create database
- stop api running 
- `dotnet ef database update`

- sql extension SQLite by alexcvzz
- command shift p 
    - use sql lite open database
    - sqlite explorer pannel view
    - right click on users
        - new query insert
        - write queries
            - highlight and right click, run queries
            - right click users, show table(opens file)

## finishing walking skeleton
-  adding new controller
    - add endpoints - users & user
- making code asynchronous & scalable
    - async Task & await
- saving changes into source control
    - use github



# ========= SECTION 2 =========

## Angular Client learning goals
- use angular cli
- how to create angular app
- angular project files
- angular bootstrap process
- using angular http client service
- run angular app over https
- add packages with npm
    - font awesome
    - bootstrap

## create angular app client (angular cli)
- inside datingapp dir 
- cd datingapp/
- `npm install -g @angular/cli@7.1.0`
- `ng new client --skip-tests --style=css`
    - yes strict (should have said no)
    - yes angular routing
- cd datingapp/client
- `ng serve`

- contents
    - angular apps are single page
    - <app-root> class
    - typescript decorator (@Component) - normal class can be used as component

- interpolation : give data from component to template view
    - set variable in comp and use with double braces {{}}

## vs code extensions to use angular
- angular language service by angular
- angular snippets by john papa
- bracket pair colorizer 2 by conraadS

## HTTP requests in angular component
- add angular module **app.module.ts**
    - imports :[ HttpClientModule ]

- http naturally async request 
    - angular component constructor too early for async req
    - use initialization lifecycle

- typescript gives type safety unless you use `any` as user property;
- observable : how Typescript handles asynchronous code
- subscribe : get data from observable

## adding cors in API
- cross origin resource sharing
- blocks all front end request from any api not in same origin (local ports are different)
- must supply header to specify its ok

- add service for cors
    - configure services -order does not matter
    - configure - must be between routing and endpoints, and before use auth

## display users in client
- a-ng if
- li component : does not display without the content, displays for dynamic content
- curly braces in html

## adding bootstrap and fontawesome
- using jquery to adjust messes with angular 
- use angular bootstrap (ngx bootstrap)
- `ng add ngx-bootstrap`
- `npm install font-awesome`

## using https in mac OSX
- set up angular to use ssl
- take certificate and key from assets file (development only cert)
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

## Authentication learning goals
- basic authentication and storing passwords
- inheritance in c# (DRY 'do not repeat yourself')
- using c# debugger
- using data transfer objects (DTOs)
- validation
- JSON web tokens (JWTs)
- using services in c#
- middleware
- extension methods - DRY

## where do i start
- app requirements:
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
2   tom   password
3   jane  pw
```

- **X** use a password hasher
- hash is the same
- protects full database except the one password
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
- 'byte' type shows as 'blob' this is ok

## new controller to manage login/registration
- create BaseApiController
- UsersController now derives from :BaseApiController instead of :BaseController

## create account controller and register users
- create AccountController
- HMAC - built in disposal

- register user test (postman)
    - 404 restart server (added new controller)

- why?
    - user : status 500
    - user string : status 200 

## using the debugger
- mac vscode
    - breakpoint at register user
    - exe - windows // dll - mac

- api controller cannot find passwords (must be sent as an object) ,must tell where/how to find
    - GetBytes(password) cannot take null 

## adding validation (prevent empty string username)
- add validation at DTO level
- validation comes built in because of [ApiController] tag

## clear/reset database
- `dotnet ef database drop`
- `dotnet ef database update`

## token authentication
- json web token 
    - industry standard
    - self contained, can contain
        - credentials
        - claims
        - other info
    
    - structure : long string separated by period
        - header : algorithm and type
            - algorithm used to encrypt in 3rd part
        - payload : identifiers and claims
        - signature : encrypted
            - encrypted by server key that never leaves server

- token authentication
    - send username password to server
    - server sends token to store on machine
    - sends token back for/with each req
    - server that signed token has access to key
    - server verifies token and sends back response
- benefits
    - no session to manage
    - single token with multiple back ends (if they share same signature/key)
    - no cookies required (mobile friendly)
    - once given a token no need to ask for verification again

## create jwt service
- receive app user and create/return jwt to account controller
- interface
    - contract between self and class
    - interface gets this classes properties/methods/events
    - no implementation logic only functionality provided by signature
- prefix interfaces with I

- add in startup.cs configureServices
    - add scoped (lifetime of http request)
- do not need interface for token service, easier to test an interface

## creating token handler / jwt token
- nuget gallery extension: System.IdentityModel.Tokens.Jwt 
- create key, creds, decoder

- add to log in register 
- change account controller returning user to UserDTO

## authentication middleware
- add `[Authorized]` attribute
- add middleware to authenticate jwt token
- nuget gallery extension: Microsoft.AspNetCore.Authentication.JwtBearer

- 401 unauthorized
    - need to send jwt with req
    - for now add in manually in header

## adding extension methods
- add methods to existing types without creating or modifying type
- extension needs to be static : does not need new instance
- use this before specifying type of extension



# ========= SECTION 4 =========

## client log in/register learning goals
- create components with angular cli
    - components must be registered 
- angular template forms
- angular services (vs API calls)
- understanding observables (api calls)
- structural directives (conditionally display elements)
- component communication using input and output properties
    - parent to child
    - child to parent

## adding nav bar component
- `cd client/src/app`
- `ng g -h` ng generate help
- `ng g c nav --skip-tests` 
    - generate componenet nav skip test file
- nav added to ng declarations in app.module.ts
- add app-nav tag in appComponent.html
- https://getbootstrap.com/docs/5.0/examples/carousel/ 
    - copy nav element into nav.component.html
- adjust html 

## filling out form and getting token
- import angular forms module in app module.ts
- `#loginform="ngForm"` attribute makes it an angular form

- `[(ngModel)]="binding"`
    - ng model "banana in a box" 
    - square[] receive from component
    - both [()] is two way binding with component

- `cd client/src/app/_services`
- `ng g s account --skip-tests`
    - generate service account
- service can be injected into other components and services 
- angular service is singleton
    - once initialized it will stay initialized until application is disposed (user closes browser)
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
- for root : has services and components that need to be initialized 

- bootstrap class style shortcuts "mt-3" = margin-top: 3px

## observables 
- standard for ES7 (ES2016) (compatible is ES2015)
- introduced in angular v2
- lazy collections of multiple values over time
    - going to use for http request and components change for value changes
- news letter, only subscribers get print
- promise (like: .then)
    - single future value
    - not lazy (regardless if no one is listening)
    - can not cancel
- observable
    - multiple values over time
    - lazy (no one subscribe)
    - able to cancel
    - can use with map, filter, reduce, etc
        - can use map to edit data before passing it along
        - chain a pipe to chain functions to edit data
        - .subscribe (what to do next)
        - .error (if theres an error)
        - () anon , console log
        - can use ToPromise()
        - loses extra functionality but is simple
    - can use async pipe | to automatically sub/unsub
    
## persisting log in
- store in local storage
- interface in typescript - specify something is a type of something
- replay subject - buffer object stores values and each subscribe omits last value inside it (or more)
- observable gets `$` at end of variable
- `!!user;`  turns obj into boolean

- async pipe `( | async)` in nav component

## adding home page component
- cd client/src/app 
- `ng g c home --skip-tests`
- add <app-home> comp in appComponent.html

## create form 
- cd client/src/app 
- `ng g c register --skip-tests`
- use ng ifs for dynamic display

## parse data from parent to child
- down from home to register
- move get users functionality from app to home

- inside home app register tag `[usersFromHomeComponent]="users"`

- inside register option selector tag
`*ngFor="let user of usersFromHomeComponent" [value]="user.userName"` 

- must call getUsers() in init()

## child to parent
- cancel button in register needs to turn off task in home
- needs to turn off register mode
- 1 output property
- 2 what to emit when clicked
- [home comp template] inside child
    - receiving []
    - output ()
- 3 add cancel register method in home component
- 4 call method in element

## finish registration
- register users from client
- account service register()
- register component register with account services
    - register then hide form



# ========= SECTION 5 =========

## routing learning goals
- angular routing (single page application)
    - navigate different components rather than pages
- adding bootstrap theme
- angular route guards
- using shared module (rather than just app)

## more components to route to
- cd client/src/app
- mkdir members
- cd members (client/src/app/members)
- `ng g c member-list --skip-tests`
- `ng g c member-detail --skip-tests`
- cd .. (client/src/app)
- `ng g c lists --skip-tests`
- `ng g c messages --skip-tests`

- app routing generated from app set up (yes to angular routing)
- set up routes in app-routing-module

## add nav links
- replace href with angular routing `routerLink="/"`
- apply active with ` routerLinkActive="active"` on each a tag

- routing in code
- inject router in nav comp
- once logged in router to members page
- clear user information from login form on logout later

- toast service for notifications
- cd client
- `npm install ngx-toastr`

## prevent acces to routes - route guards
- cd client/src/app/_guards
- `ng g guards auth --skip-tests`
    - canActivate interface

- authguard automatically subscribes to all observables
- add dummy route to group all protected paths together
    - paths []

- ng container - for conditionsls 
    - does not generate html so does not affect styling 
    - appears as comment in page/element inspection

## adding a new BS theme
- cd client
- `npm install bootswatch`
- add stylesheet in angular.json
- restart client

- welcome 'user' username
- grab user value from ng if account service .ts
- use title case pipe

## use shared module
- cd client/scr/app
- mkdir _modules
- cd _modules
- ` ng g m shared --flat`
    - generate module (flat no folder) (modules have no test files)
- replace files in shared module with shared module import in app module



# ========= SECTION 6 =========

## error handling learning goals
- api middleware
    - client and api
- angular interceptors
    - requests adn responses
- trouble shooting exceptions

## error controller
- add controllers to return errors
- errors successfully set up in buggy
    - 401 unauthorized
    - 404 not found
    - 500 null ref exception
    - 400 bad request
- user/pw validation set up in register dto
    - username exists
    - password 4 - 8 characters

- null ref comes from dev exception page from startup cs
- without dev page 500 
- without dev page use try catch blocks

- exception caught inside block does not appear in console (bad) only too client

## building exception handling middleware
- create apiException class to return for all exceptions

- create exception middleware class
    - request delegate : what happens next in middleware pipeline
    - ILogger : log exception in terminal
    - IHostEnvironment : what environment (production?development?)
- passing context to next middleware will pass exception up the tree until something can handle it
- context writes message to response

## handling errors in the client
- cd client/src/app/errors
- `ng g c test-errors --skip-tests`
- add methods in testErrorsComponent.ts
- display in test errors template .html
- add route in appRoutingModule.ts
- add nav link to error page

## use http interceptors
- handle errors at global level
- cd client/app
- mkdir _interceptors
- cd _interceptors
- `ng g interceptor error --skip-tests`

- inject router for errors that have a page
- inject toastr for errors that just need notification

- 400 validation error
    - provide interceptor in appModuleProviders.ts
    - this is custom interceptor being added to other built in interceptors
    - add newer version (es2019)of js in tsconfig.json
        - so you can use .flat() on error interceptor
- 404 not found
    - add component to reroute to
    - cd client/src/app/errors 
    - `ng g c not-found --skip-tests`
    - add component
    - add new link/route appRoutingModule.ts

- remove error handling inside login() navComponent.ts to remove double toast

- 500 server error
    - add component to reroute to
    - cd client/src/app/errors 
    - `ng g c server-error --skip-tests`
    - add component
    - add new link/route app routing module

- problem is not with angular/client if you can reproduce in postman
- stack trace will not be visible in production
- wild route component switch to not found page

- building blocks in place to expand application safely



# ========= SECTION 7 =========

## Extending API learning goals
- implement further functionality of API
- entity framework relationships (currently one flat table)
- entity framework conventions
- seeding data into database
- repository pattern
    - abstracting away from db context class
- using auto mapper
    - for big entities to send one property to another

## extending user entity 
- add properties for user info
- add phot class for photo information to store in db

## generating dat of birth with extension methods
- put logic for calculating age in extension and return age in appUser.ts

## entity framework relationships
- relationship between user and photos
- one to many - one user can have many photos

- stop api
- `dotnet ef migrations add ExtendedUserEntity`

- photos column
    - id
    - url
    - isMain
    - pubic id
    - user id <<<<
- entity framework recognizes relationship with user and generates appUser 
- generated foreign key to user table [app user id as foreign key]
    - **X** app user is allowed to be null !!! this can remove a way to get the photos without a user

- on delete referential action restrict
    - user delete does not remove photos

- remove migration
- `dotnet ef migrations remove`
- enable cascading delete and do not let user be nullable
    - fully defining relationship
- tell photo entity about app user class

- new migration 
- `dotnet ef migrations add ExtendedUserEntity`
- `dotnet ef database update`
- command+shift+p open sqlite db to check tables

## populate table with seed data
- lazy and efficient
- generate json data to insert
- https://www.json-generator.com/

```
[
  '{{repeat(5)}}',
  {
    UserName: '{{firstName("female")}}',
    Gender: 'female',
    DateOfBirth: '{{date(new Date(1950,0,1), new Date(1999, 11, 31), "YYYY-MM-dd")}}',
    KnownAs: function(){ return this.UserName; },
    Created: '{{date(new Date(2019, 0, 1), new Date(2020,5,30), "YYYY-MM-dd")}}',
    LastActive: '{{date(new Date(2020, 4, 1), new Date(2020,5,30), "YYYY-MM-dd")}}',
    Introduction: '{{lorem(1, "paragraphs")}}',
    LookingFor: '{{lorem(1, "paragraphs")}}',
    Interests: '{{lorem(1, "sentences")}}',
    City: '{{city()}}',
    Country: '{{country()}}',
    Photos: [
        {
          Url: function(num) {
          return 'https://randomuser.me/api/portraits/women/' + num.integer(1,99) + '.jpg';
        },
        IsMain: true
      }
    ]
  }
]
```

- 5 female users
    - Teri
    - Lucy
    - Zoey
    - Anne
    - Emma
- 5 male users
    - Todd
    - Luke
    - Dave
    - Mike
    - John

## seeding data (put in db)
- create seed class
- read json file and put in db
- create static (one instance)
- pull users from json file and convert to appUser obj
- hard code pw for seed users

- seed data where application starts (program.cs)
-  `dotnet ef database update`
    - now just restart application

- drop existing database
- `dotnet ef database drop`
- restart api
- `dotnet watch run`

## repository pattern
- a repository mediates between the domain and data mapping layers, acting like an in-memory domain object collection

```
web server
  v    ^
controller   <> db context
                  v    ^
                database

controller talks to dbcontext
```

- req into api 
- requests come into request controllers,
- controllers have dbcontext injected,
- represents session in database and sees queries written in controller 
- and gets them from database

- changing so controller does not go directly to dbcontext
- goes to repository which uses db context

- just adding another layer

```
web server
  v    ^
controller <> repository <> db context
                            v    ^
                            database

controller talks to repository that talks to dbcontext
```

- db set in dbcontext is like repository 
- encapsulates the logic
- reduce duplicate query logic 

```
        controllers
user        message     likes
set user    set user    set user

        repository
        set user
```

- easier to test against interface of repository rather than dbcontext
- repositories will have interfaces and implementations classes with log
- testing can be mocked
- 

- advantages
- minimizes duplicate query logic
- decouples application from persistance framework (entity already does)
- all database queries are centralized and not scattered throughout app  (entity does not)
- allows us to change ORM easily * (do not usually change orm)
- easily mock repository interface

- disadvantages
- abstraction of abstraction
    - entity framework already abstraction of database, repository is abstraction from entity framework
- each root entity should have its own repository which means more code
- also need to implement 'unit of work' pattern to control transactions

## creating a repository
- create tasks the users can do (update save etc) IUserRepository.cs
- fill actions in userRepository.cs
- add repository to app in application service extensions

## updating users repository
- replace dataContext with repository in userController
- eager loading : load photos
- for each photo it will try to return an app user (will loop each other)
- shape data before return ing using a DTO

## adding a DTO for members
- copy app user props into member dto
- move photo info into photDto 
- instead of app user return memberDTo in userController

## adding auto mapper
- nuget gallery extension: AutoMapper.Extensions.Microsoft.DependencyInjection by Jimmy Bogard
- create api/Helpers
- autoMapperProfiles
- maps from one obj to another
- <> map from - to
- add to application to service extensions to be able to inject in other classes

## Using auto mapper
- use mapper in users controller to get user/s
- smart enough to recognize properties that are named the same (app user and memberDto)
- member dto us Username (not UserName) to use in angular application
- autoMapper will automatically calculate age because of getAge() in appUser
- auto populates all the fields except for 
photo url with main photo url

## configuring autoMapper
- populate photo url with main photo url
- use forMember to tell it how to get to the photo

- not very efficient
- easy is not optimal

```
CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url));
```

## autoMapper query-able extensions
- first must get user from db and include photos then pass it back to controller 
- controller puts entity in memory then map from one obj from another
- can this be efficient?

- add get member methods in IUser repository that return memberDtos instead of appUser
-  implement the new methods in useRepository with logic 
- currently selecting all properties even those we do not need to return 
- not very efficient

```
// no autoMapper
return await _context.Users 
    .Where(x => x.UserName == username)
    .Select(user => new MemberDto{
        Id = user.Id,
        Username = user.UserName
        // etc manually map out every property
    }).SingleOrDefaultAsync();
```

```
return await _context.Users
    .Where(x => x.UserName == username)
    .ProjectTo<MemberDto>(_mapper.ConfigurationProvider)
    .SingleOrDefaultAsync();
```

- still selecting extra properties
- because of get age in app user
- if it wants to automatically use getAge() in appUser it must pull the full file
- comment out getUser() in 

```
CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt        // grab from memberdto
                .MapFrom(src => src.Photos                          //
                .FirstOrDefault(x => x.IsMain).Url))                //
                .ForMember(dest => dest.Age, opt => opt             // 
                .MapFrom(src => src.DateOfBirth.CalculateAge()));
```
- more efficient to import calculate age inline so it only pulls what we need
- with projection we do not need include (photos)



# ========= SECTION 8 =========

## building out user interface learning goals
- implement components that make up user interface 
- using typescript types
- using async pipe to retrieve data
- using bootstrap for styling
- basic ccs tricks to enhance look
- using 3rd party photo gallery

## using typescript
- type script inferring - can guess you value type if not specified
- can user pipe to allow more than one type

```
let data: number | string = 42;

data = "10"
```
```
interface Car {
  color: string;
  model: string;
  topSpeed?: number; << optional 
}
```

## create types for what is returned from api members
- types for members
- take member json returned in postman
- http://www.jsontots.com/

## creating members service
- move base url string to environment
- cd app/_services
- `ng g s members --skip-tests`
- specify teh types that the http get req is getting

## getting members from member list component
- cd app/members
- `ng g c member-card --skip-tests`

- css encapsulation
- with this ^^ you cannot reach elements inside another component with css
- to use global css set encapsulation to none in member card components
- use component css file to prevent global overrides

## add animated buttons
- profile 
- like
- messages

- absolute position buttons
- relatively positioned wrapper

## using interceptor to send token
- cd app/_interceptors
- `ng g interceptor jwt --skip-tests`

- user is currently observable
- must pull user out of observable to get token (subscribe)
- .pipe(take(1) ) unsub when the user completed taking 
- bearer bust have a space between the token
- this sends token with each request now
-  no longer need httpsOptions in members service
- provide interceptor in app modules

## member detail page
- on profile click use the username to reach user route
- cannot read from undefined
- order of execution
- angular creates template after users
- add ng conditional to add member if there is one

## tab component
- https://valor-software.com/ngx-bootstrap/#/tabs

- tabs does not turn off encapsulation
- cant style much inside angular component
- give class an adjust in global style sheet
- add tabsheet styles from assets

## add photo gallery
- https://www.npmjs.com/package/@kolkov/ngx-gallery

- cd client
- `npm install @kolkov/ngx-gallery`
- add in shared module

- gallery images in init
- cannot read photos of undefined 
- timing error - execution order

- move get images to end of load member 



# ========= SECTION 9 =========

## update resources learning goals
- angular template forms
- can Deactivate route guard
    - prompt user when they click away mid form
- @viewChild decorator
- persisting changes to api
    - update user
- loading indicators in client
- caching data in angular services

## member edit component
- cd app/members
- `ng g c member-edit --skip-tests`
- add route for component in appRouting 
- put link in nav component (dropdown)
- load up current signed in user to edit

## edit form template
- copy all of member detail into member edit
- convert to inputs
- copy member detail css to member edit (because of encapsulation)

## 
- convert form to ng form
- connect save changes button to form 
- if form is dirty display alert
- reset form state after save changes
- form name bust be same as property or text will disappear on save

## cn deactivate route guard
- save changes before leaving page

- cd guards
- `ng g guard prevent-unsaved-changes --skip-tests`
- can deactivate

- add confirm in prevent unsaved changes
- add guard in app routing 
- closing tab or going outside angular application does not work

## persisting changes made
- member update dto
- want to map into user entity 
- create new automapper for update

- http put wil be the only put so it is unique from httpget

- do not need to send obj back client already has what is updated
- get username from token used to authenticate

- mapper.map from-to
    - without you would have to manually set all properties, not with automapper
- check in postman that updates update

## updating user in client
- add update member method in member service
- update the update member method in member edit cop

## adding loading indicators
- make app slower its too fast/jarring
- https://www.npmjs.com/package/ngx-spinner

- cd client
- `ng add ngx-spinner`
    - err needs angular cdk
- `npm install @angular/cdk`
    - updates upp module
    - does not need to be in shared module

- cd src/app/_services
- `ng g s busy --skip-tests`

- set up methods to show and hide spinner

- cd src/app/_interceptors
- `ng g interceptor loading --skip-tests`

- inject busy service
- add interceptor in app module
- add spinner component 

- add spinner in app component.html (root)

- member service is singleton once loaded it lives until page quit
- services good place for state (kind of like redux)

- adjust methods to hold members after first load
- change member array to observable of member array in member list component



# ========= SECTION 11 =========

## photo upload learning goals
- photo storage options
    - keep in mind aspect ratio
- adding related entities
    - cannot add directly, must be added to user entity 
- third party api
- using the debugger (again)
- update and delete resources in api controller
- what to return when creating rescources in a REST api
    - 'REST' representational state transfer
    - standards that apply to apis
    - this will not be fully restful

## storing photos
- database as binary large objects
    - not efficient with large objects
    - space consumption
- file system
    - optimized for serving files
    - space consumption
- cloud service
    - storage unlimited

- cloudinary (10 gb free)
    - provides image transform
    - this app will be square images only

## image upload
- drag and drop
- only authenticatd users can 
- 1 client uploads photo to api with jwt
- 2 securely upload photo to cloudinary (api keys)
- 3 cloudinary stores photo and sends reponse
    - api saves url
    - cloud gives public id of image (save this in db)
    - saved in db and given auto generated id
    - 201 created response sent to client with location header
    - 

- https://cloudinary.com/
- square image site (easy css)
- cloudinary gives auto crop

## install configuring cloudinary in api
- nuget extension: CloudinaryDotNet by Cloudinary

- configure in app setting s.json (not on github safe for api keys)
- stongly typed
- set props in cloudinary settings .cs
- add in application service extensions
- access config via cloudinary settings class in application service extensions

## adding photo service
- adding deleting photos
- one responsibility
    - receive file
    - upload and receive url from cloud
    - upload results to who needs it

- interface photo service
- each phot has public id, use this to delete
- implement interface in photo service
- new account settings must be 
    - cloud name
    - api key
    - api secret

- upload image and crop to 500x500 centered on face
- add service in application service extensions 

## updating user controller
- allow add photo
- client needs to know id and if it is main
- add extension method to get username faster

## testing photo uploading
- add breakpoint on var result line
- watch each step as request populates file into and cloudinary info

- photos will not get their own route, only see user photos at member detail page

## created at route method
- return photo in body of request

```
("GetUser", _mapper.Map<PhotoDto>(photo));     // return 201 with route to user that has photos
                                                                                // doesnt work route req parameters
```

## photo editing component
- add photos in client
- cd client/src/app/members
- `ng g c photo-editor --skip-tests`

- in comps.ts : receive member from parent component
    - parent component is member edit

## photo upload component
- ng2-file-upload
- https://valor-software.com/ng2-file-upload/
- cd client
- `npm install ng2-file-upload --save`
- line 17 to 116

- add fileUploadModule in shared module
- set up configs in editor component
- adjust html template for client

## set main photo
- user controller 
- find current main and remove
- set current photo to main

## adding main photo in nav bar
- return user photo with user object - user dto
- account controller return photo url in account controller log in method

- add photo in user.ts
- account service
    change local storage from register to set current user
- acc service now has access to main photo
- nav component html
- 500 server error
    - account controller l66
    - return new user dto
    - first or default tells if source is empty(system argument null exception) 
    - why does user photos have no object/source?
    - injecting data context in account controller (not return photo with login )
    - eager load photos in login

## update main image in client
- set main photo method in member service
- set main photo method in photo editor components
    these can go anywhere computer can figure out, location is for passing down and where human can remember
    - set main photo: reset current user to load observable and local storage img
    - loop through each photo to reset what is main
- photo editor comp html

## delete photo in client
- users controller 
- member service
    - add delete photo
- photo editor component
    - delete photo method
- photo editor template html
    - add button methods



# ========= SECTION 12 =========

## reactive forms learning goals
- use reactive forms
    - easier to test
- angular validation inputs
- custom validators
- implement reusable form controls
- working with date inputs

## registration of users 
- import reactive forms module in app module
- initialize form settings in register component
- instead of template ref variable (#) replace w input prop form group []=""
    - ng models replaces with form control name

## client side validation
- add angular validators, multi in array
- need custom for confirm password

## custom validators
- check validator values against each other
- extra check for pw change after pw check is valid
- bs style on inputs 
- bs feedback when invalid
- template has error for min length cannot be camel case like it is in ts

- reuse validators to replace all the validation html

## reusable text input
- cd app/_forms
- `ng g c text-input --skip-tests`
- add control value accessor
- inject control into constructor 
- setup injectable into text input template to use in register component html

## form builder service
- convert new form group and new form control with arrays of fb group injected in register component

## expanding form 
- order not important in register component
- radio buttons dont need validator
- add in template

## adding a reusable date input
- html5 date picker is not implemented on all browsers (safari has none)
- use java scrip to create date picker
- ng angular packages comes with date picker 
- add in shared module

- cd _forms
- ng g c date-input --skip-tests
- https://valor-software.com/ngx-bootstrap/#/datepicker

- set max year in register component for 18+

## updating api register method
- update register dto with new properties
- update auto mapper to map from registerDTO to app user
- add known as to userdto to return in account controller
- pass back in register and log in (use in nav bar)

## client side registration
- adjust register method in register component to send user to members page after
- server side validation is teh div above the register buttons
- disable buttons if form inst valid
- register accepts enter and button
- add register form .valid with the click event to prevent enter submit before valid

- default img doesnt display in dav, add or || in nav
- from fresh upload, auto main does not populate nav and main img
- in photo editor component in on success item() 



# ========= SECTION 13 =========

## paging and sorting learning goals
- implement pagination on api and client
- deferred execution using IQueryable
- how to implement filtering on api and client
- sorting on api and client
- using action filters
- adding time ago pipe
- caching the client for paginated resources

## pagination
- helps avoid performance problems
- parameters are passed by query string (in url)
- page size should be limited
- always page results

## deferred execution
- expression tree
```
context.Users  (IQueryable<USer>)
    .where()
    .orderby()
    . take(5)   << pagination
    . skip(5)   << pagination
    .asQueryable() 

 // execution of query
    .tolistasync()
    .toarrayasync()
    .todictionaryasync()

    .count()   << singleton query
```

## api pagination
- not paging in user repository
- add helper for pagedList
- add helper class for paginationHeader information
    - client will pull from api request header
    
- add extension method to add header to http response
- pass extension props to helper in the same order helper expects them
- serialize header name as json
- add cors header to make custom header available
- create helper class to receive pagination parameters from user(UserParams)
    - check if user set page size is not greater than default max page size
- update i/userrepository to return paged list and take in userparams
- pass info from the paged list created in user repository to the http response header in user controller
- add pagination header in users controller 
- add [FromQuery] attribute tag to users controller to get the parameters from query string
- add options to change json response for pagination header be camelcase not titlecase

## client pagination
- give pagination a typescript model in _models
    - must be the same as in response header
- create class for pagination in the ts file
- modify get members method in member service
    - turn off caching for now
- HttpParams takes care of serializing and adding params to query string
- {observe} now gives full response body

- change how to return members in  member list component
    - change member observable back to member type
    - use loadmembers to give props manually for now
    - adjust component template from members$ to members
    
- bootstrap pagination component
- https://valor-software.com/ngx-bootstrap/#/pagination
- add in shared module
- for root () angular boot strap components
- add in member list template
- add page changed method in component

## filtering api
- dont return logged in user
- choose gender to return 

- add in user params
    - current username
    - gender

- user controller
    - add default opposite gender unless specified

- user repository 
    - add .AsQueryable()
    - query is currently off of member dto dont want that
    - want to map to member dto AFTER filtering 

- adding additional filter parameters
    - add props in user params
    - user repository

- user Dto
    - send back gender with UserDto
- Account controller
    - update DTOs to return gender
- User.ts
    - add known as and gender
    - add known as to known as in nav
- userParams.ts in _models
    - create class to store user params
- member service takes in userParams model
    - refactor paginated header code to be reusable
- member list component
    - refactor code in member list

## adding filter buttons to the client
- add reset filters function in member list component
- member list template
- member card template to add age to display card

## sorting api (ordering)
- userparams.cs add order by
- user repository 
    - add switch for order by 

- action filter
- do somethign before or after an action
- access to context before and action executed after context
    - check if logged in
    - access username
    - access repository
    - access user object
    - set user last active property
    - add as service in application service extensions
    - go to where controllers are deriving from (base api controller)
    - add attribute to base api controller to give access to action filter
    - make a request on postman and see last active time change
- currently using get user by username async, inefficient because it includes all photos, should switch to get user by id async.
- set id in token so token has access to id and username
    - use unique name for username and name id for id on new claim in token service
    - update claims principal extension now that username type is different
    - replace name identifier with name for unique name 
    - create new extension to get id and return int of id
    - in log user activity swap username for user id and use get user id

## sorting on client
- ngx buttons https://ng-bootstrap.github.io/#/components/buttons/examples

- two way binding with 3 buttons to switch off true and false for what way to sort on client
- sort by `active` or `created on` with filters by age 
- modify members service .ts to send order-by param in query string

- dates
    - time ago (last active time)
    - {{member.created | date}}
        - date: 'mediumDate'
        - date: 'dd MMM yyyy'
    - ngx time ago 
        - `npm install ngx-timeago`
        - https://www.npmjs.com/package/ngx-timeago
        - {{member.lastActive | timeago}}

## restore caching for members settings
- remember filters
    - remember queries of page and gender etc
    - look in members service .ts
    - use user-params as key
    - for each key/query store response
    - use map to store key and values
- go to api get members and dont have them in cache, if in cache and query is identical then retrieve from cache
    - stores page results in memory if query is same

- save member cache settings for member detail page
    - extract member from map with matching key 
    - load member detail from cache and not api
    - navigation extras can get details of the member >> will not work in future <<
    - member object is available in detail page after visiting the members results, just need to extract it from the list of results 
    - get all values of member cache, dont need keys
    - having an array of users in memory and going to member detail of member not in memory will produce a second array, only want one array to find all users in
        - paginated results, paginated result
    
    - use reduce function now that there are two arrays of members
    - concat results into empty array;
        - each new member loaded will be added to the array of loaded members 
    - members can be duplicated in this arr from two different queries
        - lisa stored from age filter and one lisa from 5 users with no filter
        - this is ok because users will be found by first match to search
    - user params stored in component get lost every time, move them to service to keep
 
- caching filters in member list component .ts
    - acc service is injected into member service beware circular references, acc service cannot go back to member service
    - set user params in component constructor, get them from members service
        - still updating inside component, must update service from component
        - before getting members set current user params
        - update component reset filters from service filters
        - in member list component add user param updates to reset filters and page changed before loading members again



# ========= SECTION 14 =========  

## adding like user entity learning goals
- many to many relationships
- configure entities in the DBcontext
    - AppUser can be liked by many AppUsers
    - AppUser can like many AppUsers
    - .net5 can create table automatically, but doesnt work well with this relationship
    - self referencing many to many
    - use join table called user-like
        - source user id
        - liked user id
- fluent api
    - tell api 
        - APPUSER has one SOURCEUSER with many LIKEDUSERS
        - APPUSER has one LIKEDUSER with many LIKEDBYUSERS

- adding new entity
    - padingation for likes
    - entity
    - repository 
    - controller 
    - component
    - paging
 
## adding a likes entity
- give app user two new collections
    - users they like
    - users have liked 
- create join entity
    - add 4 props to UserLike for source user and liked user and their ids
    - add two ICollections of UserLike to AppUser entity
- configure in datacontexg
    - photos didnt need a dbset because were not doing anything with them, this needs configuring
    - create an override for entity framework builder
        - specify that it has a key, because we did not specify a primary key fo rthe entity
        - combination of source user id and liked user id
        - define primary key and relationships
- make new migration
    - creates table likes with two columns source user id and likes user id

## adding likes repository
- methods
    - get individual likes
        - <UserLike>
    - get user with thier likes
        - <AppUser>
    - get likes for a user
        - <IEnumerable<LikeDto>>
        - liked
        - liked by
- return a DTO
    - to select properties interested in for returning 
    - only info needed to create a member card

- create likes data class and inherit interface
- inject datacontext
- plug in application service extensions 
    - add scoped repository, implementation class

## implementing likes repository
- use find async for get user like
- user include and first or default to get list of users user has liked
- for get user likes return IEnumerable lists of who the user has liked or who the user likes
    - use the userid for the join table and has if statements to decide which side of teh id it will return 
        - users like this user
            - right side of table
        - user likes these users
            - left side of table
    - the return Dto does not have enough properties to need AutoMapper, would write equal code to configure it anyways

## contorller methods for likes
- need acces to/inject lieks and user repositroies
- dont need to return to client, already know the primary key of created entity is going to be, client does not need it

- post man check
    - send post /add like for todd from lucy
    - 404 not found
        - common
        - restart api
        - file watcher needs a restart for new endpoints
    - 200 response
        - lucys likes : todd
        - lucys liked by : none

## setting up the likes functions in the angular app
- user member service for likes
    - add like
    - get likes
        - liked or liked by

- member card.ts
    - inject member service and toastr service
    - add like

- member card template .html
    - add click event to heart button
    - 400 error not coming from API
        - httop error response displaying status text, not error message (custom)

- error.interceptor.ts
    - check of error is an object and add an else when it is just a string, this will give us our custom string messages

## adding likes component
- lists.component.ts
    - store members 
        - not full members so user Partial, now optional properties for coplete member
    - inject members service
    - update return type for members, cannot be observable since it is a partial member

- members service.ts getlikes
    - returns <Partial<Member[]>>


- list component. html
    - add turnary for what the predicate is/ what is displaying
    - add buttons to change predicate and reload likes
    - add ng for to display members that fit the queryable

    - likes displaying all users 
    - check network tab and check request, predicate is not making it into the query URL
- membersservice.ts
    - getlikes http get 
    - WAS (this.baseUrl + 'likes?=' + predicate)
    - SHOULD BE (this.baseUrl + 'likes?predicate=' + predicate)

## paginate API and client likes
- take pagination from user params
- create a new class to store user params pagination and any other classes that need it can inherit 
- inherit Pagination Params inside userparams and likes params
- likes params needs predicate and user id

- ilikes repository
    - instead of returning ienumerable return paged list
    - replace the string predicate and int user id, pass in likes params 

- likes repository implementation class
    - configure to paginate
    - return paged list
    - recive predicate and user id from likes params

- likes controller
    - replace predicate and user id with likesparams
    - now returns a paginated response
    - check in postman that pagination headers are appearing
        - curretn page
        - page size
        - total count
        - total pages

## paginating likes on the client
- members service
    - get likes needs pagination headers now
    - reuse methods to get pagination headers and return paginated result
    - get likes needs predicate page number and page size
    - instead of creating a class for 3 properties, just add them to the list componetn mannually
- list component
    - create page number and size properties 
    - pass into load likes, get likes
- members service
    - get likes, get paginated results should be type <Partial<Member[]>>

- member list component html
 copy paste pagination into list ocmonent html

- check network tab 
    - request > headers > pagination headers are there
    - drop page size to 2 to check pagination works



# ========= SECTION 15 =========  

## adding messaging feature learning goals
- more amny to many realationships 
    - can send many messages 
    - can receive many messages
- inbox, outbox, unread
- using query params in angular
    - different tab in member detail page, was to identify a route to get to
- using route resolvers
    - going to get data when component is activated but before it is created

## setting up messaging entity
- each message will have an ID generated by the DB
- user relationship properties
- message specific properties
    - content and dates
- two booleans, only delete message from server if both parties have deleted the message

- app user entity
    - two collections for sent and received messages

- data context
    - add messages table
    - configure builder keys and restrict server deletion (only if both parties delete)

- stop api
- dotnet ef migrations add message entity added
- dotnet watch run

## message repositroy
- interface message repositroy 
    - add methods to get and delete messages and Tasks

- create message Dto
    - copy paste from message entity and cut things not needed

- Message repository cs
    - inject data context
    - make tasks async

- add scoped in service extensions

## setting up auto mapper profile for message dto
- autp mapper profiles.cs
    - from message to message dto
    - auto mapper cannot do user photo

- create new dto for receiving a message

- create message dto
    - receiver name
    - content

## message controller
- derive base api controller
- authorize
- get username and check if sender username is the same as recipient in message dto
    - cannot send messages to yourself
- get both of users sender and users
    - populate message when ceated 
    - return dto from method
    - check if there is a recipient

- create message
    - assign properties for sender and receiver info and content
    - add message in repository 
    - save to server
        - returns OK, should return created at route but there is currently no route to get a single message
    
- test messaging feature
- start api
    - dotnet watch run
- test in postman
    - create messages to display when teh time comes

## getting the messages from the repo
- paginate response
- imessage respository 
    - get message for user ()
    
- create message params helper
    - give props for user and container
    - container default to unread

- pass in message params to repository 
    - add to get messages for user ()

    - inbox : messages user has received
    - outbox : messages user has sent
    - default : unread message

- want to project a dto
    - need to inject imapper
    - inject in message repository

    - project to 
        - auto mesppaer queryabl eextensions
    - pass configurations from mapper.configuration provider

- return paged list of message dto

- essage controller
    - create endpoint for messgae
    - no additional routes because it will come up via query string

- test inbox outbox in postman

## getting message thread
- instead of user IDs use strings of current username and string of recipient username
    - for consistency, used everywhere else
    - always have access to curerent username from context in controller
    - 

- mark any messages not read as read
    - get messages in memory
    - do sometihing 
    - map to dtp
        - cannot work with dto to update database
        - execute request into list and work with messages in memory
- get messages where recipient is equal to user and vice versa for sender

- when thread is open messages are marked as read
- because not projecting, eagerly load photos for users 

- any unread messages where recipient is current usernam ewill be marked as read

- steps of get messages thread ()
    - get convo
    - find out if unread of current user
    - mark as read
    - return essage dtos

- message controller
    - takes in name of other user, already have access to current user

## setting up message thread in angular client
- need interface in _models
    - in postman copy message object an dcopy paste into [Json to ts](http://json2ts.com/)

- new service for messages
    - cd client/src/app/_services 
    -  ng g s message --skip-tests

- message.service.ts
    - inject httpclient 
    - need baseurl
    - method to get messages
    - get messages is a paginated result so we need access t opage number size and container 
    - dont have access to these methods in client ts file
        - they are private in member service.ts
        - could copy them into their own file but...
            - need to think baout paginated result, need to use http
            - can pass http as parameter and service can inject it
            - could copy paste them into services
    - _services paginataed result helper.ts
        - cut and paste from members service
        - since they are not inside a class so now they need to be functions
        - export both functions
    - go back to members ts and fix errors
        - fix get likes and get members
        - remove this. 
        - inject htis.http

     - fill out get messages in message service

- messages component .ts
    - fill out load messages and paginate result

- messages template .html
    - loop through messages

- restart api and angular to check if messages show
    - for testing change container status from unread to outbox and inbox

## designing the inbox
- add radio buttons with click handlers to change container displayin gunreads/inbox/outbox
- check if it is asking for inbox or outbox and show messages for reciving or sending
- add photos
- add css to round photos and max width


## adding message thread in client
- message thread will be through user card message icon, or user detail message tab
- message service .ts
    - get message thread
    - no pagination for now, add later

- new comp for messages
    - src/app/members
    - ng g c member-messages --skip-tests

- members-messages.ts component
    - load messages ()

- members messages html
    - ng for loop message of messages and display content fof test

- member detail .html template
    - add messages component

- two loading icons when member detail opens
    - loading member
    - loading messages
    - need to load messages at the same time as meber later

## styling the message thread
- last html code in application

- member messages .html
    - use card
    - check if there are no messages 
    - display sender images
    - display read or unread and timestamps of read
    - message content and text box for sending messsage

## activating message tab
- messages loading when messages tab not clicked
    - messages child ofmember detail
    - when detail is constructed it constructs child inputs
    - in ng on init it calls toload messages
    - dont load messages until tab is clicked

- member detail template .html
    - use tabset to note if tab is clicked
    - use tempalte reference variable to tabset
        - memberTabs

- member detail component .ts
    - add decorator viewchild membertabs
    - each tab will have a tab directive
    - get active tab heading(from data) to see if it is messages tab
    - tranfer load messgaes info from member detail

- messages component.ts and member detail component need message[] = [] to use length checks for checking messages

- member detail component .ts
    - inject message service
    - get username from member 
    - add extra && check in tab activated to check if switching tabs and messsages are already loaded do not reload messages

- member messages component .ts
    - pass messages as input property instead of getting username

- member detail template .html
    - in card instead of passing username pass messages
    - give each tab (selectTab)="onTabActivated($event)

## using query params
- activate message tab from message button on member detail
- member detail compnoent .ts
    - create select tab method and bind to message button

- member detail template .html
    - add click event to message button
    - because no other tabs need this, hard code message tab id (3) 
        - 0 about
        - 1 interests
        - 2 photos
        - 3 messages

- access tab from outside comonent
    - from matches page go stright to message tab from message button
    - on messages outbox/inbox page load messages tab from there

- member card template .html
    - add query params and router link to message button

- add query param to messaegs template.html after the router link

- access query params inside component

- member detial component .ts
    - on init, check query param for specified tab and if none go to 0, first tab
    - cant read property tab from undefined
        - ng if
        - because in member detail template .html there is a conditional at the top
        - in component has view child
        - when component is being constructed it is undefined
    
    - make view child static
    - remove conditional, too many errors without checking member before displaying info on page

    - route resolvers

## using route resolvers
- either turn off feature to go stright to messages and dont use viewchild
    - cheap
- or add optional chaining to all properties
    - lots of pop ups

- use route resolvers
    - get access to data before component is constructed
    - will have everything we need when component is constructed
    - conditional still needs to go
    - keep static view child
    - get data for member a different way

- create client/src/app/_resolvers
    - no ng command must add manually
    - add file member-detailed.resolver.ts
    - implements angular resolver
    - not a component so needs @Injectable
    - provided in : root
        - resolvers are instatniated in the same was as services
    
    - member detailed uses member service to get member from cache because resolver cannot use navigation extras
    
    - specify a method in service to return observable and router will subscribe automatically and deal with unsibscripton

- app routing module
    - give path access to resolver for member detail
    - can now get data from inside route

- member detail component
    - dont need to load member but still need gallery images
    - now get member from route
    - cut and past gallery options under gallery options in ng on init
    - remove load member ()
    
- test page
    - go to member detail, refresh
    - go to message tab, refresh
        - should load messages
    - go to adbout, refresh
        - should go to/load messages

## sending messages
- message service.ts
    - send message method
        - take in username(send to) and content
        - will get back a type message DTO so send in Message type
        - send opject of content to give to create message dto

- member messages component t.s
    - add member service
    - add send message()
    - add message to message array to view in thread

- member detail template .html
    - add [username] back to member messages card

- member message template .html
    - use form as template form (simple)
    - bind text input to message content
    - disable button if form is not valid
    - clear textbox after message is sent...

- member messages component.ts
    - use viewchild to get access to message form from component
    - after adding message to thread array, reset form

- test 
    - send message
    - refresh to check persistence

## fixing photo loading in messages tab (outbox)
- add flag to say loading
- hide messages until everything is ready

- messages component .ts
    - add laoding flag, set to true or false in load messages before and after

- messages template .html
    - TR (table row) ng for message of messages
    - add `[hidden]="loading"` to hide messages until user photos are ready
    - hide pagination while loading 
        - add `&& !loading` to existing pagination check

## deleting messages on the API
- message controller .cs
    - add rotute http delete take in message id
    - deletes dont return anything, use task action result
    - check if user deleting is one of the two parties /sender or reciver
    - mark sender/receiver deleted after checking the username
        - if both, delete from server
    - save and send bad req if it doesn send
    - add check in repo to only return messages for sender/recipient
        - dont show to receiver if they deleted it
        - dont show to sender if they deleted it

- message repository .cs
    - getmessagesfor user()
        - add checks ofr message boxes if messag is deleted
    - get message thread()
        - checks in .where()

## deleting message on client
- message service .ts
    - delete message ()
    - take in message id

- messages conponent .ts
    - delete messages ()
    - take in message id & use splie to cut from messages
    - use find index() and delete 1 message

- messages component template .html
    - add click event to delete button
    - router will try and route on delete click, add extra click event
        - `$event.stopPropagation`

- test
    - 500 server error
    - message controller 87
    - getting message sender and recipient username 
    - did we eagerly load both sender and recipient in get message method in message repositoru

- message repository .cs
    - want access to related acces need to eitehr project or eager load
    - not projecting inside here
    - change type, cant use include with find async
    - ise single or default async and includes for sender receiver

- currently if you log in as two users in two browsers and send messages between users
- messages are not poping up on another users browse
    - dont maintain a connection to api
    - dont have a way to do that now... will do later



# ========= SECTION 16 =========  

## identity and role management feature learning goals
- refactor to use asp.net identity
- role meanagement
- policy based authorization
- identity types
    - user manager<t>
    - sign in manager<t>
    - role manager<t>

- why? asp.net identity?
    - battle harened, written and tested by microsoft
    - comes with a password hasher with 10,000 salt itterations
        - ours does 1 salt itteration
        - passwords  an always be gotten from hash if DB is compromised, 10k is more complex than 1
    - full framework for managing members and roles
    - provides entity framework schema to create needed tables
        - highly customizable
    
- scratingh the surface of identity 
    - not covering email validation
    - not covering forgotten passwords

## setting up the entities
- app user.cs
    - derive from identityUSer
        - give key type int
        - creates feilds for us
        - can see id username and passwordhash are trying to override from parent class (identity built in)
        - delete id username passwprd hash and salts

- app role.cs
    - derive from app role : Identity role<int>
    - many to many relationship
        - list of roles user are in
        - each app user can have multiple roles and each role can contain multiple users
    
- app user role .cs
    - join entities
    - prop for User and Role

- app role.cs
    - add colelction of user roles
    - do same thins in app user class to complete relationship

- app user.cs
    - add collection of user roles

- app user role is acting as join table

- app user role.cs
    - derive from Identity user role<int>

- fix errors from changing classes

- account controller
    - password salt is here and in seed data
    - remove anything related to creating pw hash and salt
    - in register() and login()

- seed.cs
    - remove pw hash salt in foreach in seed users

## configuring db context
- derive from IdentityDbContext
    - install in nuget gallery
    - shift command p
    - Microsoft.AspNetCore.Identity.EntityFrameworkCore by Microsoft

    - identity db context provides with tabls we need with identity
    - no longer need users db set
    
    - userroles are key type int instead of strings
    - provide type params 
        - `IdentityDbContext<AppUser, AppRole, int>`
        - we want a list of roles later so add all types
        - DataContext : IdentityDbContext<AppUser, AppRole, int, IdentityUserClaim<int>, 
        AppUserRole, IdentityUserLogin<int>, IdentityRoleClaim<int>, IdentityUserToken<int>>
        
    - configure builder
    - user and user roles

    - configure identity in application service extensions

## configuring start up class
- configure identity in start up 
- open identity service extensions

- AddIdentity<>
    - if MVC app where client side was served by net and user=ing razor pages and served by dotnet server
    - full set up give pages needed and cookie based authentication
    - user is walsy maintining session with server, because html pages is generated from server itself

- AddIdentityCore<>
    - single page application with angular with token absed authentication
    - we get basics adn will add on extra stuff and chain to config

- identity service extensions .cs
    - default options can be configured
        - default password is complex
        - can turn off non alphanumeric character
    - chain on services
        - app roles
        - AddRoleManager<RoleManager<AppRole>>()
            - will give 500 server error is role manager is not specified inside
        - each serive has its own type that must be specified or will give 500 error
        - 

## refactoring and adding migration
- stop api server
- dotnet wf add migration IDentityAdded
    - warnign about data loss
    - OK because salt table was removed, no longer needed
- sqllite not compatible with new migration
    - migrations limitations
    - add/drop foreign key alter column
    - try and use

- Program.cs
    - comment out seed class
    - havent modified yet

- dotnet watch run
- WILL NOTWORK UNLESS USING DOTNET 5
    - if not in 5, remove previous migrations, then run

- check in sql lite preview
    - shift command p
    - select dating app.db

- still need tpo drop data and reseed to work with clean data
    - pw hashes not valid for identity
    - want users creeated with identity passwords

## updating the seed method
- seed.cs
    - replace datacontext with user namager from identity
    - find by id and find by name ... full crud methods
    - access tousers table, returns iqueryable of users if store is iqueryable userstore
        - our store is an iqueryable
        - this means we can use it just like the data context
    
    - users table contains a normalized username (ALLCAPS)
        - we will still convert to lowercase for us
    
    - userManager takes care fo saving changes to dataabse when done

- Program.cs
    - uncomment seed
    - get user manager
    - pass usermanager to seedusers() instead of context

- stop api
- drop data
    - dotnet of database drop
- restart (reseed)
    - dotnet watch run

- data recreated with new usermanager

## update account controller
- replace data context injection with user manager and sign in manager

- register()
    - replace create lines with usernamanger create async
    - check if save was successful and return bad req if not
    
- login()
    - add toLower() to end of getting username
    - use signin manager to sign in 
        - take in username and pw (from logindto)
        - takes boolean to lock out user if they get it wrong
    - check if sign in succeded adn return unauthroized if failed

- user exists()
    - replace context wiht usermanager.any async

- check in postman  
    - section 9
        - update user
        - returns 204 no content
    - section 12
        - get user
        - view updated info

## adding roles to the application
- not common to have many roles
- seed 3 roles
    - admin
    - moderator
    - member

- bring in role manager into seed

- seed.cs
    - creat role list
    - add each role to manager
    - add user to role
        - dont need to add checks because user is not interacting with this, it runs only one when db is clean
        - usually dont seed data anyways

    - create admin user
        - create password
        - add roles
    
- program .cs
    -  add role manager
    - pass into seed users

- dotnet ef databased rop
- dotnet watch run
    - add roles

## adding roles to JWT token
- token service.cs
    - add claim to token
    - safe place to put roles, user cannot modify role to trick server into thinking admin
    - aadd user manager
    
    - create token()
        - user manager get roles async
        - create token is just a public string, must convert to async task<string>
        - update interface to return tssk string
        - claim types instread of jwt registered claim names because it does not have an option for roles
    - upate acc controller now that using async method

- account contorller .cs
    - add awiat with token service in 
        - register()
        - login()
    - registetr()
        - defualt new users into members role
        - send back bad req errors if fails
    
- users controller
- check roles
    - get users()
        - [Authorize(Roles = "Admin")]
        - only admins can access full list of users
    - get user()
        - [Authorize(Roles = "Member")]
        - members can get one user
    
    
- test in post man 
    - register new user in member role
    - test admin can get list adn mem get one
    
    - register as bob adn copy token
    - paste token into [jwt.io](https://jwt.io/)
    - view token has role: "Member"
    
    - log in as lisa
    - get users (admin only)
        - 403 forbidden
        - user was valid but user is not allowed
    - log in as admin
        - get all and single user
    
    - remove authorize tags from controller, this was just a test

## policy based authorization
- create admincontroller.cs
    - derive from base api
    - create Get user with roles()
    - create get photos fro moderation ()
    - add authorize tag to both and set policy
    - both just return OK with message of who can see for now

    - set up policies

- identity service extensions
    - add service authentications and set policy name and admin roles

- test in postman
    - get roles with admin token - ok
    - get roles with lucys token (member) - 403forbidden
    - same for photos to moderate ^^
    - policys are working

    - do something with users-with-roles in admin controller

## getting the users with roles
- return users with their roles
- user manager does not come with functionality 
- use query to get all users with thier roles
- admin should be able to edit users roles

- Admin controller.cs
    - add constructor
    - inject user manager
    
    - get users with roles()
        - make async task actionresult
        - reutrn anonymus object that contains a list of user id username and roles 
        - return Ok(users)
    - not paginating these results

- test in postman

## editing user roles
- Admin controller
    - new http post called edit-roles with params username and roles
    - getting these from query string/url
    - gettin username from route param
        - check if have user in string
    - get roles
    - add roles to user except for roles user is already in 
    - remove roles from user except for roles selected (route params)
    - reuturn users roles

- test in postman
    - edit lucy roles as admin (add mod)
    - get new token for lisa
    - lisa can now see moderator page

## adding admin componnent to client
- create folder admin
- cd client/src/app/admin
- ng g c admin-panel --skip-tests

- create route for comonent

- app routing midule .ts
    - add route for admin with admin panel compoennt

- nav conponent .html
    - add link for admin page
    - hide nav link fo rnon admins
    - block/route guard for non admins navigating directly to route /admin

## adding admin route guard
- account service .ts
    - look inside token from account service
        - havent needed this becquse been returning info as obj and token as token
        - need method to get decoded token
    
    - get decoded token ()
        - atob - token is not encrypted only signature is (just like in jwt.io)
        - token is string
            - string of 3 [0,1,2] header, payload, signature // payload [1]
    - update user type

- user.ts
    - add roles: string[];

- account service.ts
    - add roles array
    - decode token

- test in postman
    - admin has array of roles
    - bob has one string
    - always want an array of strings even if just onw

- account services.ts
    - check if roles is an array
    - if yes set user.roles to roles(var [])
    - if no push string to array of roles(var [])
    - populated wihth array of roles or populate empty array with single role/string
    - can now use inside new giard

- cd _guards
    - ng g guard admin --skip-tests
    - can activate

- admin guard .ts
    - give constructor to access acc service and toastr
    - see if roles include admin or moderator

- app routing module .ts
    - add guard to admin route

    - 403 forbidden for members and mods trying to see matches...
    - forgot to remove temp testing auth guards in users controller

## adding a custom directive
- been using angular directives
- creating structural directive
    - dont show admin if user in in certain role

- client/app/_directives

- ng g d has-role --skip-tests
    - created directive
    - updated app module
        - directives go inside declaration swith components

- has role directive .ts
    - @directive decorator and selector
    - directives/selectors we have been using
        - *ngIf
        - *ngFor
        - bsRadio
    - because it is a structural directive, selector using will be 
        - *appHasRole

- constructor
    - inject view container ref
        - represents container where one or more views can be attached to component

    - inject template ref
        - two versions are identitcal
        - embeded template can be used to instantiate embeded views

    - need to get current user

    - selector takes in an array of which roles the user needs to use whatever is being used

- add @Input for access to parameters

- on init
    - when building check users roles
    - use template ref if role is in like of roles needed (passed into tag)
        - *appHasRole='["Admin"]'
        - if user is admin it will use templtate ref(the comp using the tag,, in this case the admin link in nav bar)

- nav component. html
    - add `*appHasRole="['Admin', 'Moderator']"` to admin nav link

## adding edit roles component
- cd admin
    - ng g c user-management --skip-tests
    - ng g c photo-managment --skip-tests

- admin panel tempalte .html
    - ad tabset for user and photo management
    - mod can see photos admin can see both

- want to display list of users and their roles under user management 

- cd client/app/_services
    - ng g s admin --skip-tests

- admin service .ts
    - set base url
    - constructor inject http
    - get users with roles
        - will only return partial users
    - call in ngOnInit

- user management component .ts
    - get users with roles and set users to array to display in component

- users management template .html
    - add table and NGFOR of users

- admin doesnt have username...
    - add user knwon as or username to welcome bar

## setting up modals
- edit roles modal show check boxes
- [ngx bottstrap modal](https://valor-software.com/ngx-bootstrap/modals#service-template)
    - entry component of angular module: modules can live anywhere: dont need to specifically add anywhere inside template but can access inside service

- shared module.ts
    - import and export modal module
    - import { ModalModule } from 'ngx-bootstrap/modal';

- client/app/modals
    - ng g c roles-modal --skip-tests
    - add to entry component

- app module .ts
    - entry components now deprecated
    - dont need to add entry point porperty wiht angular 9.0

- usermanagement compoent .ts
    - inject BsModalService
    - use modal service to show component in openrolesmodak()

- roles modal component template .html
    - copy modal template from [ng bootstrap](https://valor-software.com/ngx-bootstrap/modals#service-template)
    - need access to bsmodal ref

- role modal component .ts
    - inject bs modal ref 
    - add properties for title list and button close name

- user management component .ts
    - paste initial state from ngx bootstrap site

- user management template .html
    - add click event to edit roles button
    - want to show username and roles with checkboxes
    - on submit update roles

## editing roles in the client p1
- roles modal component .ts
    - add input for clicking
    - event emitter will apply changes to the selected orles
    - hide modal

- roles modal template.html
    - put username in title
    - add props to input checkbox for roles
        - checked - bool
        - change - ^^
        - disable if selected is admin.. dont allow admin to remove the admin
    - add in footer, cancell and submit buttons to either hide or update

## editing roles in the client p2
- admin service .ts
    - update user roles ()
        - pass up query string with empty object
    
- user management component .ts
    - open roles modal()
        - replace initial state with config{} that has an initial state{} property
        - pass in user and roles
        - roles needs a funtion to get what roles the user is already in to populate the checkboxes
    - get roles array()
        - have empty roles array
        - get user roles from user.roles
        - available roles will have an array of object (name and value) of roles
        - must loop iover available roles and find out if user have any of the roles na dcheck the checkbox
        - check yes roles and push, then check no roles and push
        - roles array will have all possible roles with checked or unchecked

- user management template .html
    - pass in user to open roles modal()

- user management component .ts
    - need to deal with update selected event metter, will get roles that have been checked from updateroles() and will pass back into comonent

    - openrolesmodal()
        - updateselected roles set role array using spread of values that have been checked that come back from modal
        - filter out anything that hasnt been checked
        - map element, get name
        - if there are roles to update use admin service to update roles nad pass in username and roles to update
        - in subscribe use call back to set user roles to user roles from update list
        
- test, may need to refresh browser or restart angular server

# ========= SECTION 17 =========  

## SignalR feature learning goals
- realtime funtionality 
- understand how to use and set up signal r on both api an dthe client
- implement online presence
- implement live chat between users
- what is it?
    - library provides relatime web funtionality to apps
    - good for
        - dashboards and monitoring apps
        - collabrative apps
        - apps that require notifications
        - chat apps
        - (instant updates)
    - features
        - handles connection management automatically
        - sends messages to all conencted clients simultanieously 
        - sends messages to specific clients or gorups of clietns
        - supports
            - web sockets
                - protocol, http is porotcol, websockets use different protocol than hhttp but gives 2 way communication between client and server
            - sersent events
                - uses http browser will try to subscribe to http stream where server can send events
            - long polling
                - last resort, every second or two will reach server to check for someting new
        - will pick which service is best for the client, will usually be websocket but will fall back to others if it is not supported
    - offeres cliet side npm package

- example 
    - lisa and todd are online
        - server knwos lisa and todd are online
        - lisa and todd knwo lisa and todd are online
    - bob loggs on
        - server knows bob, lisa nad todd are online
        - bob knows lisa and todd are online
        - lisa nad todd know bob lisa nad todd are online


## adding a presence hub
- introduce signal r
    - create online presence
    - live messages
    - notifications for messgaes

- create folder api singal r
    - create class presence hub.cs
        - derive from Hub
            - included with project from aspnetcore
        - F12 to see methods
        - virtual methods can be orvirden
        - ovveride on connected async() and disconected async()
        
    - on connected async ()
        - inside hub have access to Client (clients connected to hub)
        - clients.others everyone except connection that triggered connection
        - "UserIsOnline" is the name of method used inside client
        - get username to pass back to other uers

    - on disconnected async()
        - one required param is exception, pass up to parent class if there is an exception
        - pass in method used on client and username
    
    - first hub created

- add signal R service to application

- startup .cs
    - configure services()
        - services.AddSignalR();
    - tell routing about api/hub endpoint
    - configure () 
        - app.user Endpoints()
            - endpoints.MapHub<PresenceHub>("hubs/presence");
    - first hub set up

- authorization
- hubs are also authenticated
    - dont want to try and get a username if user is not authenticated

## Authenticating signalR
- add [Authorize] 
- will be different from api controllers because signal r / websocket cannot send authentication header but wil send query string with signal r

- identity service extensions .cs
    - add to jwt bearer to user query string with signal r and api controller will user auth header as normal

    - add authentication()
        - below opetions for token validation, new jwt bearer events
        - get access token from query
        - get path its coming from (since it is a query)
        - check if there is an access token inside, and check if it comes from /hubs
            - must match from path in start up .cs
        - this allows client to send token as a query string
            - this now needs to add to cors config

- startup .cs
    - app.useCors + allCredentials
    - this allows the token from a query tring

- this completes basic server side configs

## client side signalR
- cd client
    - npm install @microsoft/signalr

- client/environments.ts - environment.prod.ts
    - hub url
    - dev `'https://localhost:5001/hubs/'`
    - prod `'hubs/'`

- create service to track online presence
- cs src/app/_serviecs
    - ng g s presence --skip-tests

- presecne.service .ts
    - inport hub url
    - add hub connection
    - inject toastr service

    - creat hub connecftion()
        - take in user for token because need to send jwt token for connection, cannot user jwt interceptor these are no longer http request, websocket has no support for authentication header
    
    - start hub connection
        - listen for user is online and user is offline 
        - ust match method names in presencehub.cs
        - send toastrs for demo
    - stop hub connection
        - log error

- call methids from somewhere 
    - create when application starts if user logged in 
    - stop when user logs out
    - start when logs in or registers

- app component .ts
    - inject presence service
    - set current user ()
        - check if have user then set current user and create hub connection

- account service .ts
    - inject presence service
    - create connection
        - login()
        - register()
    - stop connection
        - log out()
    - when user closes browser or tab signal r auto disconects client
    - only time we need to do it is when they log out and go to home page(to possible log in as someone else)

## adding a presence tracker
- presence hub .cs
    - microsoft has not implemented for a reason
    - service is confined to server it is running on
    - could use readus? store tracking info in db that can be distributed across any servers
    - going to create class to track who has connected an dstore in dictionary
    - not scalable only works for single server not multiple serves
    - for multiple use readus or db 

- create signalR/presence tracker .cs
    - every hub connection gets a connection id
        - users can connect from different device and get diff id, want to store string of username and list of id strings
    - create empty dictionary

    - Task user connected()
        - be careful dictionary is shared with everyone connected, and dictionary is not a thread safe source
        - conncurrent users trying to update at same time will create problems
            - lock dictionary to lock until method is done before going again
        - check if we already have dict el with key of logged in user name
            - if it is add conection id 
            - or create new dict username with id
    - Task USerDisconnected
        - lock dict
        - check if we have dict el with key of usernmae
            - if it doesnt return task 
            - if yes get from dict and remove
    - Task GetOnline users return strings
        - get keys (usernmae) and add to array
        - all happening in memory, dictionary not being stored in database

- presence tracker will be service shared between al connections to server
- application service extensions
    - add singleton

- presence hub
    - inject presence tracker to constructor

    - user connected ()
        - update presence tracker
        - send updated list of current users to all clients
    - user disconected ()
        - ^^ 


## displaying online presence
- presence service
    - add online user source variable to hold observable
        - BehaviorSubject - subject is generic observable 
        - requires initial value omits current value when it is subscrubed to
    - create observable variable to use

    - add hub connection get online users

- member card component .ts
    - inject presence service

- member card template .html
    - update icon
    - add [] class 

- member card template .css
    - animate icon to flash green
    
- member detail component .ts
    - inject presence service

- member detial template .html
    - display online now if online

## creating a message hub
- live chatting - no refresh
    - time zones are weird for now
    - goes off on UTC for now

- singlanR/ message hub
    - create group for each user
    - define group name
    - group name is cobo of usernmaes
    - want thesse in alphabetical to make sure both users have same message thread

    - onConnectedAsync()
        - get other users username from query string (messages/user) 
        - pass into helper to return the name compination in alphabetical order
        - add users to new group and pass in id and group name
        - when a user joins group get message thread
        - send to clients method receive message thread and messages
            - not optimal to send thread to both users even if one already has them 
            - will optimize later

    - Task on Disconected()
        - pass in excpetion
        - singal r auto removes from group when they disconecte

- start up .cs
    - add new endpoint
    - endpoints.MapHub<MessageHub>("hubs/message");

## adding send message method to message hub
- any connected clients in same group can receive message


- message hub .cs
    - create send message ()

- message controller .cs
    - use same logic with some changes
    - copy paste all login into message hub.cs sendmessage()
    - no access to api responses inside hub (its a http response, doesnt use http)
    
    - changes
        - get username from context
        - instead of returning bad request, throw new hub exception
        - instead of returning not found throw new hub exception
        - after saving message to message repository create group name with sender and receiver
        - send message dto to group


## adding hub connection to the message service
- message service.ts
    - add hub url
    - add hub connection
    
    - createHubConnection()
        - with url, get token, auto reconnect, build, catch errors
    - stop Hub connection ()
        - 
    
    - deal with what happens when we receive messages when connecting to hub
    
    - create observable of message thread
        - match receive messaeg thead with message hub on connected method 
        - pass in messages to message thread source

- need to create connection and receive messages
- stop connection when user moves awau from member detai component

## refoactoring the message components to use the message hub
- member detailed comopnent .ts
    - on activated tab()
        - currently getting messages from api call
        - ewant to get it from signal r hub now
        - need access to yser obj so inject acc serviec  and set current user
        -  will disconnect rom hub when away from message tab
        - stop if they move from componetnt
        - angular life cycle compoent : on destory 
        - be careful: inside ng destroy stops hub connectino and tab stops hub conn, this is like destroying the hub if we execute ng on destroy when tab disconnect has already taken place, exception will be thronw
            - if on message tab and create connection, they go to aboyt page, stop conn, go to other page in app, try to execute page disconnect/destroy, error
    
- message service .ts
    - stop hub connection ()
        - add conditional if there is a conenction to stop

- mem detail component .ts
    - getting messages from service, dont need to pass from here to child, messaegs component

- em detail tempalte .html  
    - dont need to pass messages, because compoennt can access it alone 

- mem messages comopnent .ts
    - has acess to message service, will use asyn pipe to subscribe to messages
    - make it public to access in template

- member messages templage .html
    - replace reference messages from component with `(messageService.messageThread$ | async)` and get messages from service directly to check length etc

- test in client
    - send message
    - cannot read propety of undefined [message service .ts] send message() : this.messages.push(message)
    - message doesnt add to thead, todd doenst get the messages immediatly

## sending messages via hub
- message hub
    - sendmessage()
        - receiveing new message from hub
        - client needs to udate message thread observabel to show message when received

- message servie
    - adnd hub connectino hub on 
        - careful adding message, add message to array then pass new array to behavior subject 
    - no mutating state inside

    - send msesage () still using api call
        - invoke returns promise after serever is done
        - catch errors becuase there is no access to the error interceptor, it is not an http req
        - async : guarentee promise is returned
        - use promise returned in mem message returned to restet form ehen message is addded

- member messages comopnent
    - replace subscrib ewith .thne(primises)

- testing 
    - issue with finding method
    - restart api server to set up hub end points
    - only connect w one user
        - query splitting behavior >> address later
        - .net 5 specific
    - refresh browsers 

- all good, live chat wokrs
    - still flagges as unread
    - need to track group members to track read messages if both are connected 

## tracking the message groups
- we have no way of knowing who is in group at one time with a hub
- same with online presence, imposible with multiple servers
- must do manually
- origional plan
    - presence tracker
        - just add new dictionary
    - too much and too complicated
- new way of tracking user in gorups with database
- optimal is not using database
    - persistence storage - redus operates in memory on different servers and go distribute across different servers

- create group entity
    - one prop is primary key
        - no douplicate groups
    - add `[Key]`
        - nameis group name and will index automatically easier for EF to find entity
    - give empty default construcor

- create connection entity
    - connection id convention to be primary key 
    - use constructor with this class to quicly pass in info
    - give empty default construcor
    - create construcotr to give groupname

- EF needs empty construcor when creating tables

- Inconsistent accessibility: property type 'ICollection<Connection>' is less accessible than property 'Group.Connections' [API]
    - line 20 [Group.cs]
- connection class was internal, needs to be public

- add methods to imessage repository
    - add group 
    - remove and get connection
    - get message group

- message repository
    - implement interface
    - update datacontext to have a ccess to entities

- data context
    - new db sets for Groups and Connections

- message repository 
    - implement methods with the context

- new migration
    - groups added


## updating the message hub with group tracking
- message hub
    - create private task AddToGroup()
        - create new group
        - create new connection
            - because new connection id unless reconecting
        - check if gorup is null adn add new group (first message)
    - private task remove from message group
    
    - on connected async()
        - add to group 
    - disconnected
        - remove from message group
    - send message()
        - move get group name ou tof if statement because we need access earlier on 
        - new if statement for date read of current user is recipient name
            - start using UTC, go back and change other methods 
            - there will be different time zones
            - 
- test
    - send messages on chrome and safari
    - enter group, exit group to about page
    - `"dateRead":"2021-07-16T15:13:58.749441"`

## dealing with UTC date formats
- inspect messages in network tab
    - network tab, filter by websocket (WS) 
    - refresh
    - select messages
    - expand {type}
    - view properties (time stamps)

    - add UTC time so client browser will display local time

- message sent = datetime.now ( update to UtcNow)
    - message cs
    - message repository

- automapper
    - use auto mapper to tell client 
    - use spicify kind so that mapper will pass Z to the end of the time so browser knwos it is UTC
    - `"dateRead":"2021-07-16T15:13:58.749441Z"`

## notifying users when they receive a message
- message hub
    - checking if user is connected to message hub (chat is open on message tab)
    - if thats negative 
        - send notif
        - only if they are online
        - presence tracker has dictionary of all users online and their connections
        - user can be connected from other devices so they could have different connection ids

- presence tracker
    - get connections for user ()
    - lock the dictionary 
    - get username from online users dicitonary
        - it will be null if not online(default returning)
    - will return all connection ids for that username

- in message hub you can only send notifications to usres that aare connected to the hub
    - if the user is not connected to hub/group
    - can get access to another hub context anywhere in application
        - will use inside message hub
        - inject IHubContext

- message hub
    - inject IHubContext<PresenceHub>
    - inject <PresenceTracker>
    - now have access to presence tracker inside message hub
    - send message ()
        - when checking if user is connected to group also check if online
        - send anonymus object to "NEwMEssageReceived" with sender username and knows as if recipient is online but in a different group

- presence service
    - create hub connection.on "NewMessageReceived"
    - send toaster with sender knwon as
    - use onTap, (route)
    - inject router
    - use touter and pass in query string to take them directly to message tab

- test
    - exit tab and send messages from different broswer
    - click on notification and check if messages load onlick
    - (directly updated route) messages dont load in if another message tab is open, tell angular router to not to reuse routes
         - open on bob, click on daves notif

- member detail 
    - use route reuse strategy to set false
    
## optimizing the presence
- presence hub 
    - send online users to caller instead of all
    - remove second send of offline users, will be sending updated users alreayd when they disconnect

- presence tracker
    - user connected()
        - add bool for isOnline
        - if already has dictonary entry leave it as false
        - if it is a new connection set true
        - return 
    - userdiconnected()
        - user is only off line if they dont have any connections associated with username
- presence hub
    - add isonline and offline checks
    - only return send notifs is user is online or offline
- presence service
    - replace user is online toast with updating user list
    - filter username from online user list when they go offline


## optimizing the messages
- messag ehub
    - when client connects we send message thread to both of connected users wven thoug one will already have it
        - ad/remove group
            - remove hub caller context
            - remove connection id string, receive from context instead
        - add to group
            - task returns bool
            - return group instead
            - will always know who is connected to group htey are in, can check if recipient has joned and mark as read
            - instread of returning repo save all async (bool) check if save all worked then return group
        - remove from message group ()
            - need method to get group from connection, then get connection from inside group

- imessage repository
    - add get froup for connection
- message repository 
    - get group from connection id adn return group

- message hub
    - remove from message group ()
        - get group from context connection id then get connection id that matches group connectino id, remocve connection and return group if save all was successful
    - on connected async ()
        - dont need to pass in context to add to gorup
        - instead of sending message thread to group send to caller (only hte one that needs the thread)
        - since group is being updated send back new group with methods updated group
    - on disconnected async ()
        - dont need to pass in id to remove from message group anymore
        - update group
    
    - now both tasks return an updated group to anyone still connected to group
    - if hte group is empty signal r will not send anything to anyone

- group .ts
    - create interface group and connections

- message service .ts
    - when a user joins another message group it marks messages as read
    - add UpdatedGroup ethod
        - look inside message thread and mark unread messages as read for new user connection
        - check if messages have a date reaad an dif not mark them as read when someone connects to group

- test
    - send bob (whos on home page) a message and its marked unread, bob clicks on notification nad joing the gorup message thread an dlucy sees it update immediatly that he has read hte message



# ========= SECTION 18 =========  

## unit of wokr pattern and finishing touches learning goals
- implement unit of work pattern
    - maintaining a list of objects affected by a buisness transaction and coordinates the writing fo cahnges
    - take a tansactional approach, when a req comes into api is a transaction (getting or updating things in a db) 
    - dont do it several times, one req is a transaction, when req is done write changes to db
    - now: 
        - controllers have repos injects, each repo has several get things method from db and all have save changes
        - some controllers have more than one repo
            - each repo needsits own instance of datacontext/db
            - inconsistent if one save donest work and one does
        - need one plavce to save changes after EF has tracked them from all repositories
        - unit of wokr injects data context and its reposnsible for egtting new instanve and passes down as parameter to the different repsitories
        - define repositories inside unit of work and UOW has a save all changes
            - will have all transactions inside all repositores
            - inject UOW into controllers instead of multiple repositoreis
- optimizing queries to DB
- adding a confirm dialogue service
- finihsing touches

## implementing unit fo work
- create interface IUnitOfWork.cs in API/interfaces
    - add repositories and save/check methods
    - 

- create data/unit of wokr.cs
    - implement interface
    - create instances of repositores and pass what it has in its construtors
    - instead of dependency injection 
        - inject contet and mapper to unit of work and pass to each repository instance

- application service extensions
    - replace all repositories with unit of work injection

- each repository i sgetting the same instacne of the context from unit of wokr

- remove save all async methods from interface and implementations
    - user
    - messages


## refactoring the controllers to use unit fo work
- likes controller
    - replace repository instances in constructor with _unit of wokr
    - shift command L to select all of highlight and replace instances through unit of work
    - example: `_likesRepository` is now  `_unitOfWork.LikesRepository`

- messages controller
    - remove get message thread() this feature is in signal R hub now
    - replace repositoreis with unit of wokr ^^^

- replace repos with unit ofwork
    - message hub
    - users controller
    - log user activity
        - get unit of work service 
        - replace repostroy and save
        - update date time to utc

- message repository
    - remove save changes in get message thread() no longer responsibility of repository, uow will do this
    - will come back to this later to adjust more

- message hub 
    - in on connected async() 
        - add check if there are changes and save


## optimixing queries p1 (messages)
- check terminal that is running dotnet run
    - controlled in appsettings.development.json
    - loglevel > microsoft > information
    - need this too see information about queries being made
    - can see that there is lots of jin queries

- message repository
    - get message thread()
        - 4 includes for sender and recipient details and photo
        - order by and listing
        - then cheching inread messages and marking deatread 
        - then ampping to messasge dto
        

        - insead of mapping later try project to message dto
            - error because dto does not have prop recipient
            - doesn tknwo what unread messages is
            - message dto has message recip username
            -  no need to map before returnign now, just return messages
            - also dont need include statements anymroe when using projection
                - 

```

-- BEFORE --

 SELECT "t"."Content", "t"."DateRead", "t"."Id", "t"."MessageSent", "t"."RecipientId", (
          SELECT "p"."Url"
          FROM "Photots" AS "p"
          WHERE ("t"."Id0" = "p"."AppUserId") AND "p"."IsMain"
          LIMIT 1), "t"."RecipientUsername", "t"."SenderId", (
          SELECT "p0"."Url"
          FROM "Photots" AS "p0"
          WHERE ("a0"."Id" = "p0"."AppUserId") AND "p0"."IsMain"
          LIMIT 1), "t"."SenderUsername"
      FROM (
          SELECT "m"."Id", "m"."Content", "m"."DateRead", "m"."MessageSent", "m"."RecipientId", "m"."RecipientUsername", "m"."SenderId", "m"."SenderUsername", "a"."Id" AS "Id0"
          FROM "Messages" AS "m"
          INNER JOIN "AspNetUsers" AS "a" ON "m"."RecipientId" = "a"."Id"
          WHERE (("a"."UserName" = @__messageParams_Username_0) AND NOT ("m"."RecipientDeleted")) AND "m"."DateRead" IS NULL
          ORDER BY "m"."MessageSent" DESC
          LIMIT @__p_2 OFFSET @__p_1
      ) AS "t"
      INNER JOIN "AspNetUsers" AS "a0" ON "t"."SenderId" = "a0"."Id"
      ORDER BY "t"."MessageSent" DESC
```


```

-- AFTER --

SELECT "m"."Content", "m"."DateRead", "m"."Id", "m"."MessageSent", "m"."RecipientId", (
          SELECT "p"."Url"
          FROM "Photots" AS "p"
          WHERE ("a"."Id" = "p"."AppUserId") AND "p"."IsMain"
          LIMIT 1), "m"."RecipientUsername", "m"."SenderId", (
          SELECT "p0"."Url"
          FROM "Photots" AS "p0"
          WHERE ("a0"."Id" = "p0"."AppUserId") AND "p0"."IsMain"
          LIMIT 1), "m"."SenderUsername"
      FROM "Messages" AS "m"
      INNER JOIN "AspNetUsers" AS "a" ON "m"."RecipientId" = "a"."Id"
      INNER JOIN "AspNetUsers" AS "a0" ON "m"."SenderId" = "a0"."Id"
      WHERE ((("a"."UserName" = @__currentUsername_0) AND NOT ("m"."RecipientDeleted")) AND ("a0"."UserName" = @__recipientUsername_1)) OR ((("a"."UserName" = @__recipientUsername_1) AND ("a0"."UserName" = @__currentUsername_0)) AND NOT ("m"."SenderDeleted"))
      ORDER BY "m"."MessageSent"
```

- get messages for user()
    - creating query, ordering, set as queryable, different statements, then projecting
    - project earlier, project query to dto so it wont selevt so much from db during WHERE
    
    - move project to after order by
    - adjust recip.send usernames
    - dto does not have deleted properties

- add props in messageDTO
    - add [JsonIgnore] these will not be sent back to client, only have access in repo after projecting to dtp

- message repositoyr.cs
    - delete second origional projection at the end, just return query instead of messages

- outbox messages
```
-- BEFORE --

SELECT "t"."Content", "t"."DateRead", "t"."Id", "t"."MessageSent", "t"."RecipientId", (
          SELECT "p"."Url"
          FROM "Photots" AS "p"
          WHERE ("a0"."Id" = "p"."AppUserId") AND "p"."IsMain"
          LIMIT 1), "t"."RecipientUsername", "t"."SenderId", (
          SELECT "p0"."Url"
          FROM "Photots" AS "p0"
          WHERE ("t"."Id0" = "p0"."AppUserId") AND "p0"."IsMain"
          LIMIT 1), "t"."SenderUsername"
      FROM (
          SELECT "m"."Id", "m"."Content", "m"."DateRead", "m"."MessageSent", "m"."RecipientId", "m"."RecipientUsername", "m"."SenderId", "m"."SenderUsername", "a"."Id" AS "Id0"
          FROM "Messages" AS "m"
          INNER JOIN "AspNetUsers" AS "a" ON "m"."SenderId" = "a"."Id"
          WHERE ("a"."UserName" = @__messageParams_Username_0) AND NOT ("m"."SenderDeleted")
          ORDER BY "m"."MessageSent" DESC
          LIMIT @__p_2 OFFSET @__p_1
      ) AS "t"
      INNER JOIN "AspNetUsers" AS "a0" ON "t"."RecipientId" = "a0"."Id"
      ORDER BY "t"."MessageSent" DESC
```

```

-- AFTER --

SELECT "t"."Content", "t"."DateRead", "t"."Id", "t"."MessageSent", "t"."RecipientDeleted", "t"."RecipientId", (
          SELECT "p"."Url"
          FROM "Photots" AS "p"
          WHERE ("a"."Id" = "p"."AppUserId") AND "p"."IsMain"
          LIMIT 1), "t"."RecipientUsername", "t"."SenderDeleted", "t"."SenderId", (
          SELECT "p0"."Url"
          FROM "Photots" AS "p0"
          WHERE ("a0"."Id" = "p0"."AppUserId") AND "p0"."IsMain"
          LIMIT 1), "t"."SenderUsername"
      FROM (
          SELECT "m"."Id", "m"."Content", "m"."DateRead", "m"."MessageSent", "m"."RecipientDeleted", "m"."RecipientId", "m"."RecipientUsername", "m"."SenderDeleted", "m"."SenderId", "m"."SenderUsername"
          FROM "Messages" AS "m"
          WHERE ("m"."SenderUsername" = @__messageParams_Username_0) AND NOT ("m"."SenderDeleted")
          ORDER BY "m"."MessageSent" DESC
```

- query is still large, but much cleaner

- in postman see that date read has lost its Z prop
    - sometimes even when specifying that date is utc, it is not stored as utc  (been this way for years)

## fixing utc dates again
- after refresh date read goes from -seconds ago to 7hours from now
- date stored in database is unspecified
    - when they cone out of db they are unspecified
    - must speciy them on way out not way in
    - take datetime converter from github ticket and convert times on teh way out of db in datacontext level, dont need to do it anywhere else
    
- datacontext
    - paste converter code into namespace outside of context class
    - after the entities have been build add `builder.ApplyUtcDateTimeConverter();` to the end

- automapper
    - remove datetime converter from mapper

- test in postman
    - just check both dates have Z at the end

## optimixing queries p1 (users)
- 











# add later list
- unlike user feature
- paginate message thread
- hide pagination bar for no messages in message outbox
- identity
    - email validation
    - forgotten passwords
- possible choose avatars pfp ?
- paginate get user with roles() in admincontroller
- show user main photo in edit role display
- display nicer list of user roles
- rules on first login/register
- go though console logs
- add roles to admin panel for whos viewing it
- notification badges
- flaot left or right message thread

## uses
- custom directive
- SignalR
- Presence Tracking





