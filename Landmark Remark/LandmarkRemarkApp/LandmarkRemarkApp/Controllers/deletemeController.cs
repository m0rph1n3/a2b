//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.AspNetCore.Mvc.Rendering;
//using Microsoft.EntityFrameworkCore;
//using LandmarkRemarkApp.Models;

//namespace LandmarkRemarkApp.Controllers
//{
//    public class deletemeController : Controller
//    {
//        private readonly LmDbContext _context;

//        public deletemeController(LmDbContext context)
//        {
//            _context = context;
//        }

//        // GET: deleteme
//        public async Task<IActionResult> Index()
//        {
//              return _context.SaveLocations != null ? 
//                          View(await _context.SaveLocations.ToListAsync()) :
//                          Problem("Entity set 'LmDbContext.SaveLocations'  is null.");
//        }

//        // GET: deleteme/Details/5
//        public async Task<IActionResult> Details(int? id)
//        {
//            if (id == null || _context.SaveLocations == null)
//            {
//                return NotFound();
//            }

//            var saveLocation = await _context.SaveLocations
//                .FirstOrDefaultAsync(m => m.Id == id);
//            if (saveLocation == null)
//            {
//                return NotFound();
//            }

//            return View(saveLocation);
//        }

//        // GET: deleteme/Create
//        public IActionResult Create()
//        {
//            return View();
//        }

//        // POST: deleteme/Create
//        // To protect from overposting attacks, enable the specific properties you want to bind to.
//        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public async Task<IActionResult> Create([Bind("Id,Latitude,Longitude")] SaveLocation saveLocation)
//        {
//            if (ModelState.IsValid)
//            {
//                _context.Add(saveLocation);
//                await _context.SaveChangesAsync();
//                return RedirectToAction(nameof(Index));
//            }
//            return View(saveLocation);
//        }

//        // GET: deleteme/Edit/5
//        public async Task<IActionResult> Edit(int? id)
//        {
//            if (id == null || _context.SaveLocations == null)
//            {
//                return NotFound();
//            }

//            var saveLocation = await _context.SaveLocations.FindAsync(id);
//            if (saveLocation == null)
//            {
//                return NotFound();
//            }
//            return View(saveLocation);
//        }

//        // POST: deleteme/Edit/5
//        // To protect from overposting attacks, enable the specific properties you want to bind to.
//        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
//        [HttpPost]
//        [ValidateAntiForgeryToken]
//        public async Task<IActionResult> Edit(int id, [Bind("Id,Latitude,Longitude")] SaveLocation saveLocation)
//        {
//            if (id != saveLocation.Id)
//            {
//                return NotFound();
//            }

//            if (ModelState.IsValid)
//            {
//                try
//                {
//                    _context.Update(saveLocation);
//                    await _context.SaveChangesAsync();
//                }
//                catch (DbUpdateConcurrencyException)
//                {
//                    if (!SaveLocationExists(saveLocation.Id))
//                    {
//                        return NotFound();
//                    }
//                    else
//                    {
//                        throw;
//                    }
//                }
//                return RedirectToAction(nameof(Index));
//            }
//            return View(saveLocation);
//        }

//        // GET: deleteme/Delete/5
//        public async Task<IActionResult> Delete(int? id)
//        {
//            if (id == null || _context.SaveLocations == null)
//            {
//                return NotFound();
//            }

//            var saveLocation = await _context.SaveLocations
//                .FirstOrDefaultAsync(m => m.Id == id);
//            if (saveLocation == null)
//            {
//                return NotFound();
//            }

//            return View(saveLocation);
//        }

//        // POST: deleteme/Delete/5
//        [HttpPost, ActionName("Delete")]
//        [ValidateAntiForgeryToken]
//        public async Task<IActionResult> DeleteConfirmed(int id)
//        {
//            if (_context.SaveLocations == null)
//            {
//                return Problem("Entity set 'LmDbContext.SaveLocations'  is null.");
//            }
//            var saveLocation = await _context.SaveLocations.FindAsync(id);
//            if (saveLocation != null)
//            {
//                _context.SaveLocations.Remove(saveLocation);
//            }
            
//            await _context.SaveChangesAsync();
//            return RedirectToAction(nameof(Index));
//        }

//        private bool SaveLocationExists(int id)
//        {
//          return (_context.SaveLocations?.Any(e => e.Id == id)).GetValueOrDefault();
//        }
//    }
//}
