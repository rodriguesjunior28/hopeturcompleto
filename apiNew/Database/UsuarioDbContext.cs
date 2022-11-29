using apiNew.Model;
using Microsoft.EntityFrameworkCore;

namespace apiNew.Database
{                                 // esse dois pontos é como se fosse o extends, components, etc
    public class UsuarioDbContext : DbContext
    {

                                    // esse DbContextOptions faz parte do DbContext de cima que está sozinho e dentro do <> vai o nome da class
        public UsuarioDbContext(DbContextOptions<UsuarioDbContext>
        options) : base(options) {

        }
                  // daqui até o public ai de cima é um construtor

        public DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            var usuario = modelBuilder.Entity<Usuario>();
            usuario.ToTable("Usuario");  // aqui podemos colocar o nome dá tabela como queira
            usuario.HasKey(x => x.Id);
            usuario.Property(x => x.Id).HasColumnName("id").ValueGeneratedOnAdd(); // ValueGeneratedOnAdd é porque ele vai gerar o Id automaticamente
            usuario.Property(x => x.Nome).HasColumnName("nome").IsRequired(); // IsRequired é quando é obrigatório a pessoa colocar algo neste campo
            usuario.Property(x => x.Senha).HasColumnName("senha").IsRequired();
            usuario.Property(x => x.Email).HasColumnName("email").IsRequired();
            usuario.Property(x => x.Endereco).HasColumnName("endereco");
            usuario.Property(x => x.Cidade).HasColumnName("cidade");
            usuario.Property(x => x.Cep).HasColumnName("Cep");
        }
    }
}

// Tudo que é feito aqui afeta diretamente na nossa tabela no banco de dados também, por isso temos que atualizar o migrations e também o banco

// 1º Depois temos que atualizar o migrations de novo: dotnet ef migrations add Atual + pode ser o nome que voce quiser

// 2º Depois temos que atualizar o banco de dados também: dotnet ef database update