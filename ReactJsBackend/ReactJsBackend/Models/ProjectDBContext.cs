using Microsoft.EntityFrameworkCore;

namespace ReactJsBackend.Models
{
    public class ProjectDbContext : DbContext
    {

        public ProjectDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<LoginModel>().ToTable("LoginTable").HasNoKey();

            modelBuilder.Entity<CustomerModel>().ToTable("CustomerTable").HasKey(c => c.CustomerId);

            // modelBuilder.Entity<ProductModel>()
            //    .ToTable("ProductTable")
            //    .HasKey(e => e.ProductId);

            // modelBuilder.Entity<PaymentModel>().ToTable("PaymentTable").HasKey(p => p.TransactionId);
            // modelBuilder.Entity<OrderModel>().ToTable("OrderTable").HasKey(o => o.OrderId);
            // modelBuilder.Entity<OrderDetailsModel>().ToTable("OrderDetailsTable").HasAlternateKey(od => od.OrderId);
            // modelBuilder.Entity<OrderModel>().HasMany(od => od.OrderDetails).WithOne(om => om.Order).HasForeignKey(oi => oi.OrderId);
            // modelBuilder.Entity<ProductModel>().ToTable("ProductTable").HasKey(p => p.ProductId);
            // modelBuilder.Entity<OrderDetailsModel>().HasOne(odm => odm.Product).WithOne(p => p.OrderDetails).HasForeignKey<ProductModel>(pi => pi.ProductId);

            // modelBuilder.Entity<OrderModel>().ToTable("OrderTable").HasKey(o => o.CustomerId);
        }
        public DbSet<CustomerModel> DBSetCustomer { get; set; }
        public DbSet<LoginModel> DBSetLogin { get; set; }
        // public DbSet<ProductModel> DbSetProduct { get; set; }
        // public DbSet<OrderModel> DBSetOrder { get; set; }

        // public DbSet<PaymentModel> DBSetPayments { get; set; }
        // //public DbSet<OrderModel> DBSetOrder { get; set; }
        // public DbSet<OrderDetailsModel> DBSetOrderDetails { get; set; }
        // //public DbSet<ProductModel> DBSetProducts { get; set; }

    }
}
