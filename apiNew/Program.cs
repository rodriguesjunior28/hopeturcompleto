using apiNew.Database;
using apiNew.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


// aqui criamos a conexão com o MySql colocando o nome da conexão que foi criada no appsettings.json
var connectionMySql = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<UsuarioDbContext>(
    options => options.UseMySql(connectionMySql,
    ServerVersion.Parse("8.0.30-mysql"))
);                        // aqui é a versão do banco de dados que está sendo usado no caso o workbanch          

    // Depois de criar tudo que foi craido ai em cima, vamos no terminal e colocamos: 
    // dotnet ef migrations add InitialCreate mas pode ser qualquer nome
    // depois colocammos: dotnet ef database update para poder cirar no banco de dados 



// aqui é feito durante a construção do Repository
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();





builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
