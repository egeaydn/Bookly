using BooklyApi.Model;
using Microsoft.EntityFrameworkCore;

namespace BooklyApi.DataContext
{
	public class AppDbContext : DbContext
	{
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

		public DbSet<User> Users { get; set; }
		public DbSet<Service> Services { get; set; }
		public DbSet<Provider> Providers { get; set; }
		public DbSet<Appointment> Appointments { get; set; }
		public DbSet<AppointmentStatus> AppointmentStatuses { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			// Seed AppointmentStatus
			modelBuilder.Entity<AppointmentStatus>().HasData(
				new AppointmentStatus { Id = 1, Name = "Pending" },
				new AppointmentStatus { Id = 2, Name = "Confirmed" },
				new AppointmentStatus { Id = 3, Name = "Completed" },
				new AppointmentStatus { Id = 4, Name = "Cancelled" }
			);
		}
	}
}
