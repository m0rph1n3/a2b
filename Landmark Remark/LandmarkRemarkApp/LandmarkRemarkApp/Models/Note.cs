using System;
using System.Collections.Generic;

namespace LandmarkRemarkApp.Models;

public partial class Note
{
    public int Id { get; set; }

    public string Note1 { get; set; } = null!;

    public int FkSaveLocation { get; set; }
    public string ourName { get; set; } = null!;
    public virtual SaveLocation? FkSaveLocationNavigation { get; set; } = null!;
}
