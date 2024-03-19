import { formatDateTime } from "./utils"



describe('Validate date formatting', () => {




    it('Should validate datetime', async () => {



        const result1 = formatDateTime(new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738)));
        const result2 = formatDateTime(new Date(Date.UTC(2024, 1, 20, 3, 23, 16, 738)));

        expect(result1).toBe("12/20/2020");
        expect(result2).toBe("2/20/2024");


    })

})