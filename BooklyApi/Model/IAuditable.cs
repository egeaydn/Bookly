﻿namespace BooklyApi.Model
{
	public interface IAuditable
	{
		DateTime CreatedAt { get; set; }
		DateTime? UpdatedAt { get; set; }
	}

}
