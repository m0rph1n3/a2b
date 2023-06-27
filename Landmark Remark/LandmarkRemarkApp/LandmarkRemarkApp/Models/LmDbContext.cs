using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace LandmarkRemarkApp.Models;

public partial class LmDbContext : DbContext
{
    public LmDbContext()
    {
    }

    public LmDbContext(DbContextOptions<LmDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Note> Notes { get; set; }

    public virtual DbSet<SaveLocation> SaveLocations { get; set; }

    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        //=> optionsBuilder.UseSqlServer("Data Source=LOLO;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False ;Database=LM_db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Note>(entity =>
        {
            entity.Property(e => e.FkSaveLocation).HasColumnName("fkSaveLocation");
            entity.Property(e => e.Note1).HasColumnName("Note");
            entity.Property(e => e.ourName).HasColumnName("ourName");

            entity.HasOne(d => d.FkSaveLocationNavigation).WithMany(p => p.Notes)
                .HasForeignKey(d => d.FkSaveLocation)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Notes_SaveLocation");
        });

        modelBuilder.Entity<SaveLocation>(entity =>
        {
            entity.ToTable("SaveLocation");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
