using System;
using System.Collections.Generic;
using System.Text;
using Data;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace LittleWeb.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Personne> Personne { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}
