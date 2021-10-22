export function FetchData(type, userData) 
{
    let BaseURL = 'http://localhost/php-login-registration-api/middlewares/';

    return new Promise((resolve, reject) =>{fetch(BaseURL+type, {method: 'POST',body: JSON.stringify(userData)})
   .then((response) => response.json())
   .then((res) => {
    resolve(res);
    
   })
   .catch((error) => {
    reject(error);
   });
   });
}

   export default FetchData;