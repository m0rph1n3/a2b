using LandmarkRemarkApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LandmarkRemarkApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : Controller
    {
        private readonly LmDbContext _context;

        public NoteController(LmDbContext context)
        {
            _context = context;
        }

        //[HttpGet("{id}", Name = "GetNoteById")]
        //public async Task<ActionResult<Note>> GetNoteById(int id)
        //{
        //    var result = await _context.Notes.Where(n => n.Id == id).FirstOrDefaultAsync();
        //    if(result != null){
        //        return result;
        //    }
            
        //    return NoContent();
        //}

        [HttpGet("GetNotesByLocId/{fkLocId}", Name = "GetNotesByLocId")]
        public async Task<ActionResult<IEnumerable<Note>>> GetNotesByLocId(int fkLocId)
        {
            var result = await _context.Notes.Where(s => s.FkSaveLocation == fkLocId).ToListAsync();

            return result;
        }

        [HttpPost("SaveNote",Name = "SaveNote")]
        public async Task<ActionResult<Note>> SaveNote(Note note)
        {
            _context.Notes.Add(note);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetNoteById", new { id = note.Id }, note);
        }

        [HttpGet("GetNoteById/{id}", Name = "GetNoteById")]
        public async Task<ActionResult<Note>> GetNoteById(int id)
        {
            var res = await _context.Notes.FindAsync(id);
            if (res != null)
            {
                return res;

            }
            return NoContent();
        }

        [HttpGet("getNotesByFilter/{filter}", Name = "getNotesByFilter")]
        public async Task<ActionResult<IEnumerable<Note>>> getNotesByFilter(string filter)
        {
            var res = await _context.Notes.Where(n=> n.Note1.Contains(filter) || n.ourName.Contains(filter)).ToListAsync();
            if (res != null)
            {
                return res;

            }
            return NoContent();
        }

        [HttpDelete("DeleteNote/{id}", Name = "DeleteNote")]
        public async Task<ActionResult> DeleteNote(int id)
        {
            var note = await _context.Notes.FindAsync(id);
            if (note != null)
            {
                _context.Notes.Remove(note);
                await _context.SaveChangesAsync();

            }
            return NoContent();
        }
    }
}
