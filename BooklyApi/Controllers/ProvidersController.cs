using BooklyApi.DataContext;
using BooklyApi.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooklyApi.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ProvidersController : ControllerBase
	{
		private readonly AppDbContext _dbContext;

		public ProvidersController(AppDbContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Provider>>> GetAll()
		{
			var providers = await _dbContext.Providers.AsNoTracking().ToListAsync();
			return Ok(providers);
		}

		[HttpGet("{id:int}")]
		public async Task<ActionResult<Provider>> GetById(int id)
		{
			var provider = await _dbContext.Providers.FindAsync(id);
			if (provider == null) return NotFound();
			return Ok(provider);
		}

		[HttpPost]
		public async Task<ActionResult<Provider>> Create(Provider provider)
		{
			provider.CreatedAt = DateTime.UtcNow;
			provider.UpdatedAt = null;
			_dbContext.Providers.Add(provider);
			await _dbContext.SaveChangesAsync();
			return CreatedAtAction(nameof(GetById), new { id = provider.Id }, provider);
		}

		[HttpPut("{id:int}")]
		public async Task<IActionResult> Update(int id, Provider update)
		{
			if (id != update.Id) return BadRequest("Route id ve gövde id eşleşmeli.");

			var existing = await _dbContext.Providers.FindAsync(id);
			if (existing == null) return NotFound();

			existing.Name = update.Name;
			existing.IsActive = update.IsActive;
			existing.UpdatedAt = DateTime.UtcNow;

			await _dbContext.SaveChangesAsync();
			return NoContent();
		}

		[HttpDelete("{id:int}")]
		public async Task<IActionResult> Delete(int id)
		{
			var existing = await _dbContext.Providers.FindAsync(id);
			if (existing == null) return NotFound();
			_dbContext.Providers.Remove(existing);
			await _dbContext.SaveChangesAsync();
			return NoContent();
		}
	}
}


