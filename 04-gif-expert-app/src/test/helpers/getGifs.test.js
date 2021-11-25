import { getGifs } from "../../helpers/getGifs"


describe('pruebas con getgifs fetch', () => {

    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('one puch');
        expect(gifs.length).toBe(10);
    });
    
    test('no debe obtener elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });

});
