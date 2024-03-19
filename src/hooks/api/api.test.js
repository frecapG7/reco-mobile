import { post, get } from "./api";

jest.mock("../../ctx", () => ({
    useSession: () => ({
        session: {
            token: "eyJhbGciOiJIUzI1NiJ9.ODUxNDVjOTQ3ODUzOWNjNGRhZTkyYzg1ZjI5MzhmOTliNGJlMTY4MGI1Njc0YjY3OGE5NmE5NDFhN2E0MGVlNWJlZGFmZjYyNDFkM2E0NjFmM2Y1MTJmMjZkNWZjZDZmODFmMGU4NTE1OTI4YzM4MmM4YTI2NmRhNTJlYjMwMzUwZjk5ZjgyNTQ4NDliMDhkNWI2MTEwOTI1YmRlY2EzZTg0MTAwM2I5YzA1OTQ3MmIxMWY1YTBhNmVlNzBkN2M1OWZiNTliZmI4NDg1YzAxMjNjYjIxNjc3M2Q5M2Q5ZDgxMjYwMjU5YzY0Yzk3NTQ3ODMzNWRiY2VjZDY3YTJmNmQ2ZWIxOWM4NTcyZjk3MGE1NWRiYTEwMDc5NGMyYjA5ZjA5OWVkOGViNDNhYTYwNzU4NWNhNzNiODE5MzNjMDNjNWQxNGUwNzIwNTc2MDIyNGY4MmFmZTRlOWUzOTlmYjhmNDg3MTcwODcyZWQwYmE4ODdkYzY1MWRiNWRmMDkzZWExNDUwOGMyYWI2YTU5Yzc4MDI0MjY3YmQ4YmUxYjRkMjZmM2Y3MDE0YzAzMzBjZWRhNTJkYjNhMDI2MDg3NTA1NjlkMDIzNWNiM2Q4NjYzZjIyZTQ2MDYyNWVlZTAxMzQ5ZmRkZTQ2MzEyODE4ZDI4NzIwODAzYjZiODMzZjM.SKuQ_rsPE1a_XSTtqeYSE8-n_q0rS1Qscpmv32vc1vU"
        }
    })
}));


describe("Valide get function", () => {

    it("Should return body", async () => {

        const data = await get("/requests?pageNumber=0&pageSize=10");

        expect(data).toBeDefined();
        console.log(JSON.stringify(data))
    });
})


describe("Validate post function", () => {



    it('Should return error', async () => {

        await post("/validate/token", { value: "2534354AA" });

    });


    it("Should return body", async () => {
        const data = await post("/auth", { name: "frecape+test6", password: "Toto@0208" });



        expect(data).toBeDefined();
        expect(data.access_token).toBeDefined()

    })
});