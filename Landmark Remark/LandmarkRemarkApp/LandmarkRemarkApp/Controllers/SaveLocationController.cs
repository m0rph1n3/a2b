using LandmarkRemarkApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LandmarkRemarkApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SaveLocationController : Controller
    {
        private readonly LmDbContext _context;
        public SaveLocationController(LmDbContext context)
        {
            _context = context;
        }

        [HttpGet ("all", Name ="GetAllSaveLocations")]
        public async Task<ActionResult<IEnumerable<SaveLocation>>> GetAllSaveLocations()
        {
            return await _context.SaveLocations.ToListAsync();
        }

        [HttpPost("SaveSaveLocations",Name = "SaveSaveLocations")]
        public async Task<ActionResult<SaveLocation>> SaveSaveLocations(SaveLocation saveLocation)
        {
            _context.SaveLocations.Add(saveLocation);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetSaveLocationById", new { id = saveLocation.Id }, saveLocation);
        }
        [HttpGet("GetSaveLocationById/{id}", Name = "GetSaveLocationById")]
        public async Task<ActionResult<SaveLocation>> GetSaveLocationById(int id)
        {
            var res = await _context.SaveLocations.FindAsync(id);
            if (res != null)
            {
                return res;

            }
            return NoContent();
        }

        //[HttpGet("{id}", Name = "GetAllSaveLocationsNotesByLocId")]
        //public async Task<ActionResult<IEnumerable<SaveLocation>>> GetAllSaveLocationsNotesByLocId(int id)
        //{
        //    var result = await _context.SaveLocations.Where(s => s.Id == id).ToListAsync();

        //    return result;
        //}

    }
}
