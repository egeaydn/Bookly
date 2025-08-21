using BooklyApi.DataContext;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// CORS policy tanýmlýyoruz
builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowFrontend", policy =>
	{
		policy.WithOrigins(
			"http://localhost:3000",
			"https://senin-domainin.com" // buraya Next.js frontend domainini yaz
		)
		.AllowAnyMethod()
		.AllowAnyHeader();
	});
});

// DB context
builder.Services.AddDbContext<AppDbContext>(options =>
	options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger
app.UseSwagger();
app.UseSwaggerUI();

// CORS policy burada aktif
app.UseCors("AllowFrontend");

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

// Root endpoint
app.MapGet("/", () => "Bookly API is running! Go to /swagger for API documentation.");

app.Run();
