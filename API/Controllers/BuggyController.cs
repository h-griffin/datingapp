using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;
        }

        // api/buggy/auth
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret(){ // 401 unauthorized
            return "secret text";
        }

        // api/buggy/not-found
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound(){ // 404 not found 
            var thing = _context.Users.Find(-1);
            if(thing == null) return NotFound();
            return Ok(thing);
        }

        // api/buggy/server-error
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError(){ // null ref exception
            var thing = _context.Users.Find(-1);
            var thingToReturn = thing.ToString(); // this line error
            return thingToReturn;
        }

        // api/buggy/bad-request
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest(){ // 400 bad request
            return BadRequest("this was not a good request");
        }
    }
}