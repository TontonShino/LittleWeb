using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;
using LittleWeb.Data;
using Microsoft.AspNetCore.Cors;

namespace LittleWeb.Controllers
{
    /// <summary>
    /// Gestion des personne
    /// </summary>
    [EnableCors("AllowCors"),Route("api/[controller]")]
    //[Route("api/[controller]")]
    [ApiController]
    public class PersonnesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="context"></param>
        public PersonnesController(ApplicationDbContext context)
        {
            _context = context;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        // GET: api/Personnes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Personne>>> GetPersonne()
        {
            return await _context.Personne.ToListAsync();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // GET: api/Personnes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Personne>> GetPersonne(int id)
        {
            var personne = await _context.Personne.FindAsync(id);

            if (personne == null)
            {
                return NotFound();
            }

            return personne;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="personne"></param>
        /// <returns></returns>
        // PUT: api/Personnes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPersonne(int id, Personne personne)
        {
            if (id != personne.Id)
            {
                return BadRequest();
            }

            _context.Entry(personne).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonneExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="personne"></param>
        /// <returns></returns>
        // POST: api/Personnes
        [HttpPost]
        public async Task<ActionResult<Personne>> PostPersonne(Personne personne)
        {
            _context.Personne.Add(personne);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPersonne", new { id = personne.Id }, personne);
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        // DELETE: api/Personnes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Personne>> DeletePersonne(int id)
        {
            var personne = await _context.Personne.FindAsync(id);
            if (personne == null)
            {
                return NotFound();
            }

            _context.Personne.Remove(personne);
            await _context.SaveChangesAsync();

            return personne;
        }

        private bool PersonneExists(int id)
        {
            return _context.Personne.Any(e => e.Id == id);
        }
    }
}
