
// using System.Web.Http;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ReactJsBackend.Models;
using ReactJsBackend.Repository;

namespace ReactJsBackend.Controllers
{
    [Route("Home")]
    [ApiController]
    public class HomeController : Controller
    {

        IHomeRepo _homeRepo;


        public HomeController(IHomeRepo homeRepo)
        {
            _homeRepo = homeRepo;
        }

        [Authorize(Policy = "Admin" )]
        [HttpGet]
        [Route("Test")]
        public IActionResult Test()
        {
            System.Console.WriteLine("fssf");
            try
            {
                var CustomerEmail = HttpContext.Session.GetString("CustomerEmail");
                return new OkObjectResult($"CustomerEmail: {CustomerEmail}");
            }
            catch (System.Exception e)
            {
                return new ObjectResult(new
                {
                    source = "dotnet",
                    message = e.Message
                })
                {
                    StatusCode = 400
                };
            }
        }

        [Authorize(Policy = "Norm" )]
        [HttpGet]
        [Route("TestNormal")]
        public IActionResult TestNormal()
        {
            System.Console.WriteLine("fssf");
            try
            {
                var CustomerEmail = HttpContext.Session.GetString("CustomerEmail");
                return new OkObjectResult($"CustomerEmail: {CustomerEmail}");
            }
            catch (System.Exception e)
            {
                return new ObjectResult(new
                {
                    source = "dotnet",
                    message = e.Message
                })
                {
                    StatusCode = 400
                };
            }
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(LoginModel login)
        {
            System.Console.WriteLine($"Login: {login}");
            try
            {
                var IsValid = _homeRepo.ValidateUser(login.EmailId, login.Password);
                if (IsValid == true)
                {
                    HttpContext.Session.SetString("CustomerEmail", login.EmailId);
                    return new OkObjectResult(true);
                }
                else
                    return new OkObjectResult(false);
            }
            catch (System.Exception e)
            {
                return new ObjectResult(new
                {
                    source = "dotnet",
                    message = e.Message
                })
                {
                    StatusCode = 400
                };
            }
        }

    }
}

// fetch("https://localhost:7037/Home/Login", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site",
//     "Referer": "http://localhost:3000/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "{\"emailId\":\"snaorem@random.com\",\"password\":\"1234\"}",
//   "method": "POST"
// }); ;
// fetch("https://localhost:7037/Home/Login", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "cross-site",
//     "Referer": "http://localhost:3000/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "OPTIONS"
// }); ;
// fetch("http://localhost:9090/Home/Login", {
//   "headers": {
//     "accept": "application/json, text/plain, */*",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "Referer": "http://localhost:3000/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "{\"emailId\":\"snaorem@random.com\",\"password\":\"1234\"}",
//   "method": "POST"
// }); ;
// fetch("http://localhost:9090/Home/Login", {
//   "headers": {
//     "accept": "*/*",
//     "sec-fetch-mode": "cors"
//   },
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": null,
//   "method": "OPTIONS"
// });

// 200 OK

// csharp
// Copy code
// return Ok();
// 201 Created

// csharp
// Copy code
// return Created("/api/resource/123", new { key = "value" });
// 204 No Content

// csharp
// Copy code
// return NoContent();
// 400 Bad Request

// csharp
// Copy code
// return BadRequest();

// 401 Unauthorized
// csharp
// Copy code
// return Unauthorized();
// 403 Forbidden

// csharp
// Copy code
// return Forbid();
// 404 Not Found

// csharp
// Copy code
// return NotFound();
// 500 Internal Server Error

// csharp
// Copy code
// return StatusCode(500, "Internal Server Error");
// Custom Status Code

// csharp
// Copy code
// return StatusCode(418, "I'm a teapot");
