import { post } from "./api";


describe("Validate post function", () => {



    it('Should return error', async () => {

        await post("/api/validate/token", {value: "2534354AA"} );

    });


    it("Should return body" , async () => {
        const data = await post("/auth", {name: "frecape+test6", password: "Toto@0208"});



        expect(data).toBeDefined();
        expect(data.access_token).toBeDefined()

    })
});