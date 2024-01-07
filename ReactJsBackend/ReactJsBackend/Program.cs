using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ReactJsBackend.Models;
using ReactJsBackend.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var config = builder.Configuration;

builder.Services.AddAuthentication(j =>
{
    j.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    j.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    j.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(b =>
{
    b.TokenValidationParameters = new TokenValidationParameters
    {
        ValidIssuer = config["Jwt:Issuer"],
        ValidAudience = config["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["Jwt:Key"])),
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateIssuerSigningKey = true
    };
}
);

builder.Services.AddAuthorization(options=>{
    options.AddPolicy("Admin",p=>p.RequireClaim("UserType","Admin"));
    options.AddPolicy("Norm",p=>p.RequireClaim("UserType","Norm"));
});

builder.Services.AddControllers();

builder.Services.AddDistributedMemoryCache();

builder.Services.AddSession();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle                        
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();       
                
builder.Services.AddDbContext<ProjectDbContext>(options => options.UseSqlServer("server=USMUMSNAOREM01;database=Eshop_Myntra;Integrated Security=true; TrustServerCertificate=True"));
// "server=USMUMSNAOREM01;database=LibraryManagementSystem;Integrated Security=true; TrustServerCertificate=True

//builder.Services.AddTransient<IOrderRepository, OrderRepository>();
builder.Services.AddTransient<IHomeRepo, HomeRepo>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", builder =>
    {
        builder
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});


var app = builder.Build();

app.UseCors("AllowReactApp");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseSession();

app.UseHttpsRedirection();

app.UseAuthentication(); 
app.UseAuthorization(); 

app.MapControllers();

app.Run();
