namespace BooklyApi.Model
{
	public class Appointment : BaseEntity, IAuditable
	{
		public int UserId { get; set; }
		public User User { get; set; }

		public int ServiceId { get; set; }
		public Service Service { get; set; }

		public int? ProviderId { get; set; }
		public Provider Provider { get; set; }

		public DateTime StartAt { get; set; }
		public DateTime EndAt { get; set; }

		public int StatusId { get; set; }
		public AppointmentStatus Status { get; set; }

		public string Notes { get; set; }
	}

}
