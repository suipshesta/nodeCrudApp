const {MongoClient} = require('mongodb');
// mongo db connection string
const dbconnString = `mongodb+srv://suipshesta:PmdplSDkA5kaS5BS@atlascluster.mbqr35f.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(dbconnString);


async function main() {
    try {
        await client.connect();
        await listDatabase(client);
        await getData(client,"ProductA");
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabase(client) {
    let dbs = await client.db().admin().listDatabases();
    console.log("database lists are: ");
    dbs.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}
async function getData(client,dbname){
    let jd=await client.db(dbname).collection('Users');
     let data=await jd.find({}).toArray();
    console.log("collection from Users are:");
    console.log(data);

}

// async function getData(){
//     let connect=await client.connect();
//     let db=connect.db('ProductA');
//     let collection =db.collection('Users');
//     let data=await collection.find({}).toArray();
//     console.log(data);
// }
// getData();

