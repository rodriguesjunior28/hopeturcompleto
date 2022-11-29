using Microsoft.AspNetCore.Mvc;
using apiNew.Repository;
using apiNew.Model;

namespace apiNew.Controllers
{
    [ApiController]    // é igual ao @RestController no spring
    [Route("api/[controller]")]  // esse controller é o controllerUsuario
    public class UsuarioController : ControllerBase
    {
        // Aqui é depois de criar o repositório
        // Injetar dependência do repositório 

        private readonly IUsuarioRepository _repository;

        public UsuarioController(IUsuarioRepository repository) {
            _repository = repository;
        }

        [HttpGet] // aqui porcura os usuários cadastrados 
        public async Task<IActionResult> GetAll(){
            var usuario = await _repository.GetUsuarios();  //a resposta de GetUsuarios cai aqui dentro
            return usuario.Any() ? Ok(usuario) : NoContent();
        }                // O Any é que se sim vai retornar usuarios se não NoContent - não vai retornar nada 
        // aqui ele procura usuário pela Id
        [HttpGet("{id}")]  // aqui colocamos no caso o id quando queremos um parametro especifico
        public async Task<IActionResult> GetById(int id){ // aqui também colocamos o parametro pelo mesmo motivo por ser especifico
            var usuario = await _repository.GetUsuarioById(id); // quando a gente escrever o Id ele vai cair aqui dentro
            return usuario != null 
            ? Ok(usuario) : NotFound("usuário não encontrado.");
        }   // se o usuario não for nulo ele passa, se caso for nulo aparece a msg

        [HttpPost] //Aqui ele add usuários
        public async Task<IActionResult> Post(Usuario usuario){
            _repository.AddUsuario(usuario);
            return await _repository.SaveChangeAsync() 
            ? Ok("Usuário adicionado") : BadRequest("Algo deu errado.");
        }
            // aqui ele atualiza usuários
        [HttpPut("{id}")]  // aqui, o getId e o Delete são parametros exclusivo e por isso tem que ser passado assim
        public async Task<IActionResult> Atualizar(int id, Usuario usuario){ // aqui tem que passar dois parametros o Id e o usuario
            var usuarioExiste = await _repository.GetUsuarioById(id);
            // passammos essa var usuarioExiste que é pra ele procurar e ele vai no repository procurar a Id ou pra atualizar ou pra cadastrar 

            if(usuarioExiste == null) return NotFound("Usuário não encontrado");

            //usuarioExiste.Nome = usuario.Nome ?? usuarioExiste.Nome;
            //usuarioExiste.DataNascimento = usuario.Datanascimento != new DataTime()
            //? usuario.DataNascimento : usuarioExiste.DataNascimento

            _repository.AtualizarUsuario(usuarioExiste);

            return await _repository.SaveChangeAsync()
            ? Ok("Usuário atualizado.") : BadRequest("Algo deu errado.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var usuarioExiste = await _repository.GetUsuarioById(id);
            if(usuarioExiste == null) 
            return NotFound("Usuário não encontrado");

            _repository.DeletarUsuario(usuarioExiste);

            return await _repository.SaveChangeAsync()
            ? Ok("Usuário deletado.") : BadRequest("Algo deu errado.");
        }
    }
}