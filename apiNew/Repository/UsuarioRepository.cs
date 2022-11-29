using apiNew.Model;
using apiNew.Database;
using Microsoft.EntityFrameworkCore;

namespace apiNew.Repository
{

                                  // aqui é só colocar o : que é o de implementar e 
                                  // chamar o IUsuarioRepository que ele puxa o que a gente precisa pra ir completando 
    public class UsuarioRepository : IUsuarioRepository
    {
        //injetando dependencia do contrexto na mão 
        private readonly UsuarioDbContext _context; // essa linha é uma estancia
        public UsuarioRepository(UsuarioDbContext context) {  // aqui é um construtor
            _context = context;
        }

        public void AddUsuario(Usuario usuario)
        {
            _context.Add(usuario);
        }

        public void AtualizarUsuario(Usuario usuario)
        {
            _context.Update(usuario);
        }

        public void DeletarUsuario(Usuario usuario)
        {
            _context.Remove(usuario);
        }

        public async Task<Usuario> GetUsuarioById(int id)
        {
            return await _context.Usuarios
            .Where(x => x.Id == id).FirstOrDefaultAsync();
        }  // Where é onde ele vai procurar no Id que colocamos lá no banco

        public async Task<IEnumerable<Usuario>> GetUsuarios()
        {
            return await _context.Usuarios.ToListAsync();
        }

        public async Task<bool> SaveChangeAsync()
        {
            return await _context.SaveChangesAsync() > 0;  // aqui é sim ou não caso ele consiga salvar vem 1 se não vem 0
        }
    }
}