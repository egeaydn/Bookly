using Microsoft.EntityFrameworkCore;

namespace BooklyApi.Model
{
	public class Service : BaseEntity, IAuditable
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public int DurationMinutes { get; set; }
		[Precision(18, 2)]
		public decimal Price { get; set; }
		public bool IsActive { get; set; } = true;
	}


}
