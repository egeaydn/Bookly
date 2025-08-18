using BooklyApi.DataContext;
using BooklyApi.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooklyApi.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class AppointmentsController : ControllerBase
	{
		private readonly AppDbContext _dbContext;

		public AppointmentsController(AppDbContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<Appointment>>> GetAll()
		{
			var items = await _dbContext.Appointments
				.AsNoTracking()
				.Include(a => a.User)
				.Include(a => a.Service)
				.Include(a => a.Provider)
				.Include(a => a.Status)
				.ToListAsync();
			return Ok(items);
		}

		[HttpGet("{id:int}")]
		public async Task<ActionResult<Appointment>> GetById(int id)
		{
			var item = await _dbContext.Appointments
				.Include(a => a.User)
				.Include(a => a.Service)
				.Include(a => a.Provider)
				.Include(a => a.Status)
				.FirstOrDefaultAsync(a => a.Id == id);
			if (item == null) return NotFound();
			return Ok(item);
		}

		[HttpPost]
		public async Task<ActionResult<Appointment>> Create(Appointment appointment)
		{
			appointment.CreatedAt = DateTime.UtcNow;
			appointment.UpdatedAt = null;
			_dbContext.Appointments.Add(appointment);
			await _dbContext.SaveChangesAsync();
			return CreatedAtAction(nameof(GetById), new { id = appointment.Id }, appointment);
		}

		[HttpPut("{id:int}")]
		public async Task<IActionResult> Update(int id, Appointment update)
		{
			if (id != update.Id) return BadRequest("Route id ve gövde id eşleşmeli.");

			var existing = await _dbContext.Appointments.FindAsync(id);
			if (existing == null) return NotFound();

			existing.UserId = update.UserId;
			existing.ServiceId = update.ServiceId;
			existing.ProviderId = update.ProviderId;
			existing.StartAt = update.StartAt;
			existing.EndAt = update.EndAt;
			existing.StatusId = update.StatusId;
			existing.Notes = update.Notes;
			existing.UpdatedAt = DateTime.UtcNow;

			await _dbContext.SaveChangesAsync();
			return NoContent();
		}

		[HttpDelete("{id:int}")]
		public async Task<IActionResult> Delete(int id)
		{
			var existing = await _dbContext.Appointments.FindAsync(id);
			if (existing == null) return NotFound();
			_dbContext.Appointments.Remove(existing);
			await _dbContext.SaveChangesAsync();
			return NoContent();
		}
	}
}


