namespace BooklyApi.Model
{
	public class Provider: BaseEntity, IAuditable
	{
		public string Name { get; set; }
		public bool IsActive { get; set; } = true;
	}

}
