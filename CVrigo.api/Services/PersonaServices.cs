using CVrigo.api.Configurations;
using CVrigo.api.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace CVrigo.api.Services
{
    public class PersonaServices
    {
        private readonly IMongoCollection<PersonaM> _PersonaCollection;

        public PersonaServices(IOptions<DatabaseSettings> databaseSettings)
        {
            var mongoClient = new MongoClient(databaseSettings.Value.ConnectionString);
            var mongoDB =
            mongoClient.GetDatabase(databaseSettings.Value.DatabaseName);
            _PersonaCollection =
                mongoDB.GetCollection<PersonaM>(databaseSettings.Value.CollectionName);
        }

        public async Task<List<PersonaM>> GetAsync() =>
        await _PersonaCollection.Find(_ => true).ToListAsync();

        public async Task InsertPersonaM(PersonaM PersonaInsert)
        {
            await _PersonaCollection.InsertOneAsync(PersonaInsert);
        }

        public async Task DeletePersona(string PersonaId)
        {
            var filter = Builders<PersonaM>.Filter.Eq(s => s.Id, PersonaId);
            await _PersonaCollection.DeleteOneAsync(filter);
        }

        public async Task UpdatePersona(PersonaM dataToUpdate)
        {
            var filter = Builders<PersonaM>.Filter.Eq(s => s.Id, dataToUpdate.Id);
            await _PersonaCollection.ReplaceOneAsync(filter, dataToUpdate);
        }

        public async Task<PersonaM> GetPersonaById(string idToSearch)
        {
            return await _PersonaCollection.FindAsync(new BsonDocument { { "_id", new ObjectId(idToSearch) } }).Result.FirstAsync();
        }
    }
}