import supertest from 'supertest'
import router from '../Controllers/ProphecyController.js'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()


//use the supertest object as our API
const api = supertest(router)


/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_DB);
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});


describe("get User's Voted Prophecy", () => {
    it("should return Prophecy to be null, give invalid user", async () => {
        const res = await api.get("/getVoted/sdasd");
        expect(res.statusCode).toBe(200);
        //conver the array to string, it count '[]' as string so length 2
        expect(res.text.length).toBe(2);
    });

    it("should return all Prophecy that user voted", async () => {
        const res = await api.get("/getVoted/63e7074c9d0407fc5db938a8");
        expect(res.statusCode).toBe(200);
        expect(res.text.length).toBeGreaterThan(0);
    });



    it("should return all Prophecy ", async () => {
        const res = await api.get("/getAll");
        expect(res.statusCode).toBe(200);
        expect(res.text.length).toBeGreaterThan(2);
    });

});

