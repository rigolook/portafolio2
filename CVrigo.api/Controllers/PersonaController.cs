using CVrigo.api.Models;
using CVrigo.api.Services;
using Microsoft.AspNetCore.Mvc;
using System.Text.RegularExpressions;

namespace CVrigo.api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PersonaController : ControllerBase
{
    private readonly ILogger<PersonaController> _logger;
    private readonly PersonaServices _PersonaServices;

    public PersonaController(ILogger<PersonaController> logger, PersonaServices personaServices)
    {
        _logger = logger;
        _PersonaServices = personaServices;
    }

    [HttpGet]
    public async Task<IActionResult> GetPersona()
    {
        var persona = await _PersonaServices.GetAsync();
        return Ok(persona);
    }

    [HttpPost]
    public async Task<IActionResult> InsertPersona([FromBody] PersonaM PersonaToInsert)
    {
        if (PersonaToInsert == null)
            return BadRequest();
        if (PersonaToInsert.Nombre != null)
            ModelState.AddModelError("Nombre", "Llene el nombre, no lo deje vacio");
        if (PersonaToInsert.Descripcion == string.Empty)
            ModelState.AddModelError("Descripción", "Coloque una descripcion breve de la persona");
        if (PersonaToInsert.Pais == string.Empty)
            ModelState.AddModelError("País", "Ingrese un país");
        if (PersonaToInsert.NumeroTelefono != null)
            ModelState.AddModelError("Número de telefono", "Ingrese un número de telefono");
        if (PersonaToInsert.Email == string.Empty)
            ModelState.AddModelError("Email", "Coloque un correo electronico valido");

        await _PersonaServices.InsertPersonaM(PersonaToInsert);

        return Created("Created", true);
    }

    [HttpDelete("ID")]
    public async Task<IActionResult> DeletePersona(string idToDelete)
    {
        if (idToDelete == null)
            return BadRequest();
        if (idToDelete == string.Empty)
            ModelState.AddModelError("Id", "No debe dejar el id vacio");

        await _PersonaServices.DeletePersona(idToDelete);

        return Ok();
    }

    [HttpPut("SensorAireToUpdate")]
    public async Task<IActionResult> UpdatePersona(PersonaM PersonaToUpdate)
    {
        if (PersonaToUpdate == null)
            return BadRequest();
        if (PersonaToUpdate.Nombre != null)
            ModelState.AddModelError("Nombre", "Llene el nombre, no lo deje vacio");
        if (PersonaToUpdate.Descripcion == string.Empty)
            ModelState.AddModelError("Descripción", "Coloque una descripcion breve de la persona");
        if (PersonaToUpdate.Pais == string.Empty)
            ModelState.AddModelError("País", "Ingrese un país");
        if (PersonaToUpdate.NumeroTelefono != null)
            ModelState.AddModelError("Número de telefono", "Ingrese un número de telefono");
        if (PersonaToUpdate.Email == string.Empty)
            ModelState.AddModelError("Email", "Coloque un correo electronico valido");

        await _PersonaServices.UpdatePersona(PersonaToUpdate);

        return Ok();
    }

    [HttpGet("ID")]
    public async Task<IActionResult> GetSPersonaById(string idToSearch)
    {
        var persona = await _PersonaServices.GetPersonaById(idToSearch);
        return Ok(persona);
    }
}