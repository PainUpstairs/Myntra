using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.SqlServer.Server;
using ReactJsBackend.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ReactJsBackend.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        public IConfiguration _configuration;
        private readonly ProjectDbContext _projectDbContext;

        public TokenController(IConfiguration config, ProjectDbContext context)
        {
            _configuration = config;
            _projectDbContext = context;
        }

        [HttpGet("Test")]
        public string Test()
        {
            return "TokenController working";
        }

        [HttpPost("GenerateToken")]
        public async Task<IActionResult> GenerateToken(LoginModel login)
        {

            System.Console.WriteLine($"Jwt:Subject:{_configuration["Jwt:Subject"]}"); ;
            System.Console.WriteLine($"Jwt:Key:{_configuration["Jwt:Key"]}") ;
            System.Console.WriteLine($"Jwt:Issuer:{_configuration["Jwt:Issuer"]}") ;
            System.Console.WriteLine($"Jwt:Audience:{_configuration["Jwt:Audience"]}") ;
            System.Console.WriteLine($"user:{login.Password}");
            if (login.EmailId != null && login.Password != null)
            {
                var userExists = await _projectDbContext.DBSetLogin.SingleOrDefaultAsync((x => x.EmailId == login.EmailId));

                System.Console.WriteLine($"userExists: {userExists}");

                if (userExists != null)
                {

                    //create claims details based on the user information
                    var claims = new[] {
                        new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                        new Claim("Email", login.EmailId),
                        new Claim("UserType", login.Password)
                    };

                    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
                    var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
                    var token = new JwtSecurityToken(
                        _configuration["Jwt:Issuer"],
                        _configuration["Jwt:Audience"],
                        claims,
                        expires: DateTime.UtcNow.AddMinutes(10),
                        signingCredentials: signIn);


                    return Ok(new JwtSecurityTokenHandler().WriteToken(token));
                }
                else
                {
                    return BadRequest("Invalid credentials");
                }
            }
            else
            {
                return BadRequest("Email not valid");
            }
        }

    }
}

