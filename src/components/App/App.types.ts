interface Photo {
     id: string;
     urls: {
       regular: string;
       small?: string;
       full: string;
     };
     alt_description: string;
   }

   export default Photo;


