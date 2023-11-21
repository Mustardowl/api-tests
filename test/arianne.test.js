const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server.cjs");
const should = chai.should();

chai.use(chaiHttp);

describe("izak", () => {
    describe("/GET arianne", () => {
        it("it should GET arianne", (done) => {
        chai
            .request(app)
            .get("/arianne")
            .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            done();
            });
        });
    });
    }
);