using BooklyApi.DataContext;
using BooklyApi.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooklyApi.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class AppointmentStatusesController : ControllerBase
	{
		private readonly AppDbContext _dbContext;

		public AppointmentStatusesController(AppDbContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<AppointmentStatus>>> GetAll()
		{
			var statuses = await _dbContext.AppointmentStatuses.AsNoTracking().ToListAsync();
			return Ok(statuses);
		}

		[HttpGet("{id:int}")]
		public async Task<ActionResult<AppointmentStatus>> GetById(int id)
		{
			var status = await _dbContext.AppointmentStatuses.FindAsync(id);
			if (status == null) return NotFound();
			return Ok(status);
		}

		[HttpPost]
		public async Task<ActionResult<AppointmentStatus>> Create(AppointmentStatus status)
		{
			status.CreatedAt = DateTime.UtcNow;
			status.UpdatedAt = null;
			_dbContext.AppointmentStatuses.Add(status);
			await _dbContext.SaveChangesAsync();
			return CreatedAtAction(nameof(GetById), new { id = status.Id }, status);
		}

		[HttpPut("{id:int}")]
		public async Task<IActionResult> Update(int id, AppointmentStatus update)
		{
			if (id != update.Id) return BadRequest("Route id ve gövde id eşleşmeli.");

			var existing = await _dbContext.AppointmentStatuses.FindAsync(id);
			if (existing == null) return NotFound();

			existing.Name = update.Name;
			existing.UpdatedAt = DateTime.UtcNow;

			await _dbContext.SaveChangesAsync();
			return NoContent();
		}

		[HttpDelete("{id:int}")]
		public async Task<IActionResult> Delete(int id)
		{
			var existing = await _dbContext.AppointmentStatuses.FindAsync(id);
			if (existing == null) return NotFound();
			_dbContext.AppointmentStatuses.Remove(existing);
			await _dbContext.SaveChangesAsync();
			return NoContent();
		}
	}
}


