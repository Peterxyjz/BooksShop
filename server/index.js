const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

//middleware:
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

// mongodb configuration:

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://books-shop:books-shop@cluster0.nrcvojv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create collection of documents:
    const booksCollections = client.db("BookInventory").collection("books");

    // insert a book to he db: post method 
    app.post("/upload-book", async(req, res) => {
        const data = req.body;
        const result = await booksCollections.insertOne(data);
        res.send(result);
    })

    //get all books from database:
    // app.get("/all-books", async(req, res) => {
    //     const books = await booksCollections.find();
    //     const result = await books.toArray();
    //     res.send(result);
    // })

    //upload a book data: patch or update methods
    app.patch("/book/:id", async(req, res) => {
        const id = req.params.id;
        // console.log(id);
        const updateBook = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = {upsert: true};

        const updateDos = {
            $set: {
                ...updateBook
            }
        }

        //update:
        const result = await booksCollections.updateOne(filter, updateDos, options);
        res.send(result);
    })

    //delete a book data:
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await booksCollections.deleteOne(filter);
      res.send(result);
    })

    //find by category
    app.get("/all-books", async(req, res) => {
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await booksCollections.find(query).toArray();
      res.send(result);
    })

    // to get single book data:
    app.get("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await booksCollections.findOne(filter);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(PORT, () => {
    console.log(`Server running in ${PORT}`);
})