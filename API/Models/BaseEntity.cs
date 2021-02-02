
using System.ComponentModel.DataAnnotations;

namespace API.Models{
    public abstract class BaseEntity{
        [Key]
        [Required]
        public int Id { get; set;}
    }
}

