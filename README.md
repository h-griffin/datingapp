# Dating app 
![tools](API/assets/tools.png)

## about app
- asp.net c# API
- angular typescript Client
- sqlite database
- jwt authentication and validation
- angular routing
- error handling and client testing
- multiple entities

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

## adding entity framework to project

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

## Angular Client learning goals
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

## Authentication learning goals
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

## client log in/register learning goals
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

## routing learning goals
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
- `ng g guards auth --skip-tests`
    - canActivate interface

- authguard automatically subscribes to all observables
- add dummy route to group all proted paths together
    - paths []

- ng container - for conditionsls 
    - doenst generate html so does not affect syling 
    - appears as comment in element inspection

## adding a new BS theme
- cd client
- `npm install bootswatch`
- add stylesheet in sngular .json
- restart client

- welcome 'user' username
- grab user value from ng if account servoce
- use title case pipe

## use shared module
- cd client/scr/app
- nkdir _modules
- cd _modules
- ` ng g m shared --flat`
    - generate module (flat no foler) (modules have no test files)
- replace files in shared module with shared module import in app module

# ========= SECTION 6 =========

## error handling learning goals
- api middleware
    - client and api
- angular intercepters
    - requests adn responses
- trouble shooting exceptions

## error controller
- add controllers to return errors
- errors successfuly set up in buggy
    - 401 unauthorized
    - 404 not found
    - 500 null ref exception
    - 400 bad request
- user/pw validation set up in register dt
    - username exists
    - password 4 - 8 characters

- null ref comes from dev exception page from startup cs
- without dev page 500 
- without dev page use try catch blocks

- exception caught inside block does not appear in console (bad) only too client

## building exception handling middleware
- create apiException class to return for all exceptopns

- create exception middleware class
    - rewuest delegate : what happends next in middleware pipeline
    - ILogger : log exception in terminal
    - IHostEnvironment : what environment (production?development?)
- passing context to next middleware will pass exception up the tree until something can handle it
- context writes message to repsonse

## handling erros in the client
- cd client/src/app/errors
- `ng g c test-errors --skip-tests`
- add methods in test errors component.ts
- display in test errors temolate
- add route in app routing module
- add nav link to error page

## use http interceptors
- handle erros at gloabal level
- cd client/app
- mkdir _interceptors
- cd _interceptors
- `ng g interceptor error --skip-tests`

- inject router for erros that have a page
- inject toastr for errors that just need notification

- 400 validation error
    - provide interceptor in app module privders
    - this is custom interceptor being added to other built in interceptors
    - add newer version (es2019)of js in tsconfig.json
        - so you cna use .flat() on error interceptor
- 404 not found
    - add component to reroute to
    - cd client/src/app/errors 
    - `ng g c not-found --skip-tests`
    - add component
    - add new link/route app routing module

- remove error handling inside login() nav component ts to remove double toast

- 500 server error
    - add component to reroute to
    - cd client/src/app/errors 
    - `ng g c server-error --skip-tests`
    - add component
    - add new link/route app routing module

 - probalem is not with angular/client if you can reproduce in postman
- stack trace will not be visible in production
- wild route component switch to not found page

- building blocks in place to expand appliction safely

# ========= SECTION 7 =========

## extenidng API learning goals
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

## generating data of birth with extension methods
- put logic for calculating age in extension and return age in appuser

## entity framework relationships
- relationship between user and photos
- one to many - one user can have many photos

- stop api
- `dotnet ef migrations add ExtendedUserEntity`

- photos column
    - id
    - url
    - ismain
    - pubic id
    - user id <<<<
- entity framework recodnizes relationship with user and generats appuser 
- generated foreign key to user table [app user id as foreign key]
    - app user is allowed to be null !!! this can remove a way to get the photos without a user

- on delete referential action restrict
    - user delete does not remove photos

- remove migration
- `dotnet ef migrations remove`
- enable cascading delete and dont let user be nullable
    - fully defining relationship
- tell photo entity abou tapp user class

- new migration 
- `dotnet ef migrations add ExtendedUserEntity`
- `dotnet ef database update`
- command+shift+p open sqllite db to check tables

## populate table with seed data
- lazy and effiecient
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

- 5 femlae users
    - teri
    - Lucy
    - Zoey
    - anne
    - katherine
- 5 male users
    - todd
    - luke
    - dave
    - mike
    - john

## sseding data (put in db)
- create seed class
- read json file and put in db
- create static (one instance)
- pull users from json file and convert to appuser obj
- hard code pw for seed users

- seed data where application starts (program.cs)
-  `dotnet ef database update`
    - now just restart application

- drop existing database
- `dotnet ef database drop`
- restart api
- `dotnet watch run`

## repository pattern
- a preopisitory mediates between teh domain and data mapping layers, acting like an inmemory domain pbject collection

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
- conterollers have dbcontext injected,
- represents session in database and sees queries written in controller 
- and gets them from database

- changin so controller does not go directly to dbcontext
- goes to repository which uses db context

- just adding another layer

```
web server
  v    ^
controller <> repository <> db context
                            v    ^
                            database

controller talks to repository
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
- repositorys will have interfaces and implementations classes with log
- testing can be mocked
- 

- advantages
- minimizes duplicate query logic
- decouples application from persistance framework (entity already does)
- all database queries are centralized and not scattered thorughout app  (entity does not)
- allows us to change ORM easily * (dont usually change orm)
- easily mock repository interface

- disadvantages
- abstraction of abstraction
    - entity framework already abstraction of database, repository is abstraction from entity framework
- each root entity should have tis own repository which means more code
- also need to implement usit of work pattern to control transactions

## creating a repository
- create tasks the users can do (update save etc) IUserRepository.cs
- fill actions in userrepository.scs
- add repository to app in application service extensions

## updating users repositoyr
- replace datacontext with repository in user cotroller
- eager loading : load photos
- for each photo it will try to return an app user (will loop eachother)
- shape data before return ing using a DTO

## adding a DTO for members
- copy app user props into member dto
- move photo info into photdto 
- instead of app uesr return memberdto in usercontroller

## adding auto mapper
- AutoMapper.Extensions.Microsoft.DependencyInjection by Jimmy Bogard
- create api/Helpers
- automapperprofiles
- maps from one obj to another
- <> map from - to
- add to application to service extensions to be able to inject in other classe

## Using auto mapper
- use mapper in users controller to get user/s
- smart enough to recodnize properties that are named the same (app user and memberdto)
- member dto us Username (not UserName) to use in angular applicatino
- automapper will automattically canculate age because of getage() in appuser
- auto populates all the feilds exept for 
photo url with main photo url

## configuring autoMApper
- populate photo url with main photo url
- use formember to tell it how to get to the photo

- not very effecient
- easy is not optimal

`CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x => x.IsMain).Url));`

## automapper queryable extensions
- first must get user from db and include photos then pass it back to controller 
- controller puts entity in memory then map from one obj from anoother
- can this be efficient?

- add get member methods in IUser repository that return member dtos instead of appuser
-  implement the new methods in userepositoru with logic 
- currently selecting all properties even those we dont need to return 
- not very effecient

```
// no automapper
return await _context.Users 
    .Where(x => x.UserName == username)
    .Select(user => new MemberDto{
        Id = user.Id,
        Username = user.UserName
        // etc mannually map out every property
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
- if it wants to automattically use getage in app user it must pull the full file
- comment out get user in 

```
CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, opt => opt        // grab from memberdto
                .MapFrom(src => src.Photos                          //
                .FirstOrDefault(x => x.IsMain).Url))                //
                .ForMember(dest => dest.Age, opt => opt             // 
                .MapFrom(src => src.DateOfBirth.CalculateAge()));
```
- more efficient to import calculate age inline so it only pulls what we need
- with projection we dont need include (photos)

# ========= SECTION 8 =========

## building out user interface learning goals
- implement components that make up user interface 
- using typescript types
- using async pipe to retrieve data
- using bootstrap for styling
- basic ccs tricks to enhanc elook
- using 3rd party photo gallery

## using typescript
- type script inferring - can guess you value type if not specified
- can user pype to allow more than one type

```let data: number | string = 42;

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

## creating memebrs service
- move base url string to enviromnet
- cd app/_services
- `ng g s members --skip-tests`
- specify teh types that the http get req is getting

## getting members from member list component
- cd app/members
- `ng g c member-card --skip-tests`

- css encapsulation
- with this ^^ you cannot reach elements inside another with css
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
-  no longer need hhtpsoptions in mebers service
- provide interceptor in app modules

## member detail page
- on profile click use the username to reach user route
- cannot read from undefined
- order of execution
- angular creates tempalte after users
- add ng conditional to add member if there is one

## tab component
- https://valor-software.com/ngx-bootstrap/#/tabs

- tabs does not turn off encapsulation
- cant style much inside angular coponent
- give class an dadjust in gloobal style sheet
- add tabsheet styles from assets

## add photo gallery
- https://www.npmjs.com/package/@kolkov/ngx-gallery

- cd client
- `npm install @kolkov/ngx-gallery`
- add in shared module

- galler images in init
- cannot read photos of undefines 
- timing error - execution order

- move get imagesto end of load member 

# ========= SECTION 8 =========

## update resscources learning goals
- angular template forms
- can Deactivate route guard
    - promt user when they click away mid form
- @viewChild decorator
- persisting changes to api
    - update user
- loading indicators in client
- caching data in angular services

## member edit component
- cd app/members
- `ng g c member-edit --skip-tests`
- add rout fo rcomponent in app routing 
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
- reset form state after savw chages
- form name bust be same as property or text will disapear on save

## cn deactivate route guard
- save changes before leaving page

- cd guards
- `ng g guard prevnt-unsaved-changes --skip-tests`
- can deactivate

- add confirm in prevent unsahved changes
- add guard in app routing 
- closing tab or going outside angular application does not work

## persisting changes made
- member update dto
- want to map into user entity 
- create new automapper for update

- http put wil be th eonly put so it is unique from httpget

- dont need to send obj back client already has what is updated
- get username from token used to authenticate

- mapper.map from-to
    - without youd have to manually set all properties, not with automapper
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

- set up ethods to show and hide spinner

- cd _interceptors
- `ng g interceptor loading --skip-tests`

- inject busu service
- add interceptor in app module
- add spinenr component 

- add spinner in app component.html (root)

- member service is singleton once loaded it lives until page quit
- services good place for state (kind of like redux)

- adjust methods to hold members after first load
- change member array to abservable of member array in member list component

- 