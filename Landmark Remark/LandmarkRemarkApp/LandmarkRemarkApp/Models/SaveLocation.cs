using System;
using System.Collections.Generic;

namespace LandmarkRemarkApp.Models;

public partial class SaveLocation
{
    public int Id { get; set; }

    public string Latitude { get; set; } = null!;

    public string Longitude { get; set; } = null!;

    public virtual ICollection<Note> Notes { get; set; } = new List<Note>();
}

public partial class SaveLocationDTO
{
    public int Id { get; set; }

    public string Latitude { get; set; } = null!;

    public string Longitude { get; set; } = null!;

    public string[]? Notes { get; set; } = null;
}