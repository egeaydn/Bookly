using BooklyApi.DataContext;
using BooklyApi.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooklyApi.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ServicesController : ControllerBase
	{
		private readonly AppDbContext _dbContext;

		public ServicesController(AppDbContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Service>>> GetAll()
		{
			var services = await _dbContext.Services.AsNoTracking().ToListAsync();
			return Ok(services);
		}

		[HttpGet("{id:int}")]
		public async Task<ActionResult<Service>> GetById(int id)
		{
			var service = await _dbContext.Services.FindAsync(id);
			if (service == null) return NotFound();
			return Ok(service);
		}

		[HttpPost]
		public async Task<ActionResult<Service>> Create(Service service)
		{
			service.CreatedAt = DateTime.UtcNow;
			service.UpdatedAt = null;
			_dbContext.Services.Add(service);
			await _dbContext.SaveChangesAsync();
			return CreatedAtAction(nameof(GetById), new { id = service.Id }, service);
		}

		[HttpPut("{id:int}")]
		public async Task<IActionResult> Update(int id, Service update)
		{
			if (id != update.Id) return BadRequest("Route id ve gövde id eşleşmeli.");

			var existing = await _dbContext.Services.FindAsync(id);
			if (existing == null) return NotFound();

			existing.Name = update.Name;
			existing.Description = update.Description;
			existing.DurationMinutes = update.DurationMinutes;
			existing.Price = update.Price;
			existing.IsActive = update.IsActive;
			existing.UpdatedAt = DateTime.UtcNow;

			await _dbContext.SaveChangesAsync();
			return NoContent();
		}

		[HttpDelete("{id:int}")]
		public async Task<IActionResult> Delete(int id)
		{
			var existing = await _dbContext.Services.FindAsync(id);
			if (existing == null) return NotFound();
			_dbContext.Services.Remove(existing);
			await _dbContext.SaveChangesAsync();
			return NoContent();
		}
	}
}


