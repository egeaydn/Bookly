using BooklyApi.DataContext;
using BooklyApi.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BooklyApi.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class UsersController : ControllerBase
	{
		private readonly AppDbContext _dbContext;

		public UsersController(AppDbContext dbContext)
		{
			_dbContext = dbContext;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<User>>> GetAll()
		{
			var users = await _dbContext.Users.AsNoTracking().ToListAsync();
			return Ok(users);
		}

		[HttpGet("{id:int}")]
		public async Task<ActionResult<User>> GetById(int id)
		{
			var user = await _dbContext.Users.FindAsync(id);
			if (user == null) return NotFound();
			return Ok(user);
		}

		[HttpPost]
		public async Task<ActionResult<User>> Create(User user)
		{
			user.CreatedAt = DateTime.UtcNow;
			user.UpdatedAt = null;
			_dbContext.Users.Add(user);
			await _dbContext.SaveChangesAsync();
			return CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
		}

		[HttpPut("{id:int}")]
		public async Task<IActionResult> Update(int id, User update)
		{
			if (id != update.Id) return BadRequest("Route id ve gövde id eşleşmeli.");

			var existing = await _dbContext.Users.FindAsync(id);
			if (existing == null) return NotFound();

			existing.FirstName = update.FirstName;
			existing.LastName = update.LastName;
			existing.Email = update.Email;
			existing.Phone = update.Phone;
			existing.PasswordHash = update.PasswordHash;
			existing.IsAdmin = update.IsAdmin;
			existing.UpdatedAt = DateTime.UtcNow;

			await _dbContext.SaveChangesAsync();
			return NoContent();
		}

		[HttpDelete("{id:int}")]
		public async Task<IActionResult> Delete(int id)
		{
			var existing = await _dbContext.Users.FindAsync(id);
			if (existing == null) return NotFound();
			_dbContext.Users.Remove(existing);
			await _dbContext.SaveChangesAsync();
			return NoContent();
		}
	}
}


