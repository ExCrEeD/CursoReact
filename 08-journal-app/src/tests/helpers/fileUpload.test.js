//import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";


describe('pruebas en fileUpload', () => {
  
    // cloudinary.config({ 
    //     cloud_name: 'dzl96izbh', 
    //     api_key: '554947626445543', 
    //     api_secret: '26Mk17Fiu3zGnCvVx9k-xM6CshU'
    // });


    test('debe de cargar un archivo y retornar el url', async() => {

        // const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
        // const blob = await resp.blob();

        // const file = new File([blob],'foto.png');
        // const url = await fileUpload(file);
        // expect(typeof url).toBe('string');
        //borar imagen
        // const segments = url.split('/');
        // const imageId = segments[segments.length-1].replace('.png','');
        // cloudinary.v2.api.delete_resources(imageId,{},()=>{
        //     done();
        // });
  });

  test('debe de retornar un error', async() => {
    const file = new File([],'foto.png');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
  
});
