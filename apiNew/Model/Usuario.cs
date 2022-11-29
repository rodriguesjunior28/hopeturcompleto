namespace apiNew.Model
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Senha { get; set; }
        public string Email { get; set; }
        public string Endereco { get; set; }
        public string Cidade { get; set; }
        public string Cep { get; set; }

    }
}

// code first nesta versão o dotnet escolhe pra gente 

// DataBase first quando o banco tá cirado e nós só usamos ele