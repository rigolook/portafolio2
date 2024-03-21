using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CVrigo.api.Models
{
    public class PersonaM
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id {get; set;} = string.Empty;

        [BsonElement("Nombre")]
        public string Nombre {get;set;} = string.Empty;
        [BsonElement("Descripcion")]
        public string Descripcion {get;set;} = string.Empty;
        [BsonElement("Pais")]
        public string Pais {get;set;} = string.Empty;
        [BsonElement("NumeroTelefono")]
        public Int64 NumeroTelefono {get;set;}
        [BsonElement("Email")]
        public string Email {get;set;} = string.Empty;
        // [BsonElement("Ciudad")]
        // public string Ciudad {get;set;} = string.Empty;
    }
}