﻿namespace BooklyApi.Model
{
	public class User : BaseEntity, IAuditable
	{
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; }
		public string Phone { get; set; }
		public string PasswordHash { get; set; }
		public bool IsAdmin { get; set; }
	}


}
