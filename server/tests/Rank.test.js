import supertest from 'supertest'
import router from '../Routers/RankRouter.js'
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



describe("GET /rank/weeklyRank", () => {
    it("should return users in order of weeklyRank", async () => {
        const res = await api.get("/weeklyRank");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});

describe("GET /rank/allRank", () => {
    it("should return users in order of allRank", async () => {
        const res = await api.get("/allRank");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});