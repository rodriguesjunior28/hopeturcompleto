using apiNew.Model;

namespace apiNew.Repository
{       

                    // AQUI É O CRUD
                    // É uma interface

    public interface IUsuarioRepository
    {

        // O task<IEnumerable<Usuario> (Usuario é o nome da tabela)
        Task<IEnumerable<Usuario>> GetUsuarios(); // esse GetUsuarios é o próprio sistema que deu esse nome
        Task<Usuario> GetUsuarioById(int id); // aqui é pra pegar o Id
        void AddUsuario(Usuario usuario);
        void AtualizarUsuario(Usuario usuario);
        void DeletarUsuario(Usuario usuario);
        Task<bool> SaveChangeAsync();
        
    }
}