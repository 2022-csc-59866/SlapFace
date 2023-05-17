import supertest from 'supertest'
import router from '../Routers/SearchRouter.js'
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


describe("search Prophecy", () => {
    it("should return 500 statusCode, give invalid id", async () => {
        const res = await api.get("/searchProphecyByID/asdadadad");
        expect(res.statusCode).toBe(500);
    });

    it("should return the Prophecy by ID", async () => {
        const res = await api.get("/searchProphecyByID/64614707d2a45d086f134f20");
        expect(res.statusCode).toBe(200);
        expect(res.text.length).toBeGreaterThan(0);
    });

});

