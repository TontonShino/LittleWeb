using System;
using System.ComponentModel.DataAnnotations;

namespace Data
{
    public class Personne
    {
        public int Id { get; set; }
        [Required]
        public string Prenom { get; set; }
        [Required]
        public string Nom { get; set; }
    }
}
