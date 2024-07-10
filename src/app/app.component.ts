import { Component } from '@angular/core';
import { SecretClient } from '@azure/keyvault-secrets';
import { InteractiveBrowserCredential } from '@azure/identity';
import { KeyClient } from '@azure/keyvault-keys';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'azur-test';


/*

   const credential = new DefaultAzureCredential();

   const vaultName = "<YOUR KEYVAULT NAME>";
   const url = `https://${vaultName}.vault.azure.net`;

   const client = new KeyClient(url, credential);

   const keyName = "MyKeyName";

   async function main() {
     const latestKey = await client.getKey(keyName);
     console.log(`Latest version of the key ${keyName}: `, latestKey);
     const specificKey = await client.getKey(keyName, { version: latestKey.properties.version! });
     console.log(`The key ${keyName} at the version ${latestKey.properties.version!}: `, specificKey);
   }

*/



    client: KeyClient;

    constructor( ) {
        const credential = new InteractiveBrowserCredential(
            {
                clientId: "65c3394d-d996-47fb-9570-0dde995af2d6",
                   tenantId: "56cc67ca-d4e8-41ed-a6b2-80437cf6f9dc",
                  redirectUri: "https://gray-forest-045ec2303.5.azurestaticapps.net/"
            }
        );
         const url = 'https://azur-test-keys.managedhsm.azure.net';
         this.client = new KeyClient(url, credential);
        const secretName = "MySecretName";

         console.log( this.client )



      }



      async test() {

      const keyName = 'deep-secret';

    const latestKey = await this.client.getKey(keyName);

      console.log(`Latest version of the key ${keyName}: `, latestKey);

      const specificKey = await this.client.getKey(keyName, { version: latestKey.properties.version! });
      console.log(`The key ${keyName} at the version ${latestKey.properties.version!}: `, specificKey);

      }



}
