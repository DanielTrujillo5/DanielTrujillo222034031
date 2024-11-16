using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dapper;
using Microsoft.Data.SqlClient;

namespace ApiFormulario.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FormularioController : ControllerBase
  {

    private readonly string _connectionString = "Server=LAPTOP-TQ7JM6QV\\MSSQLSERVER01;Database=formulario;User Id=sa;Password=12345678;TrustServerCertificate=true";

    [HttpPost("register")]
    public IActionResult Register([FromBody] Formulario user)
    {
      if (user == null)
      {
        return BadRequest("Invalid user data.");
      }

      using (var connection = new SqlConnection(_connectionString))
      {
        var sql = "INSERT INTO Users (nombreU, apellido,nombreG, correoU, correoG,telefono,  fechaI, fechaF, licencia, notas) VALUES (@nombreU,@apellido, @nombreG, @correoU, @correoG, @telefono,@fechaI, @fechaF, @licencia, @notas)";
        var rowsAffected = connection.Execute(sql, new { user.nombreU, user.apellido, user.nombreG,  user.correoU, user.correoG, user.telefono, user.fechaI, user.fechaF, user.licencia, user.notas });

        if (rowsAffected > 0)
        {
          return Ok("User registered successfully.");
        }
        else
        {
          return StatusCode(500, "An error occurred while registering the user.");
        }
      }

    }
  }
}
