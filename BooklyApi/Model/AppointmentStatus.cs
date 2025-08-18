namespace BooklyApi.Model
{
	public class AppointmentStatus : BaseEntity, IAuditable
	{
		public string Name { get; set; } // Pending, Confirmed, Completed, Cancelled
	}

}
