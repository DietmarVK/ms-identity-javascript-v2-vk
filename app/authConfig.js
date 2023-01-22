/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
const msalConfig = {
    auth: {
        // 'Application (client) ID' of app registration in Azure portal - this value is a GUID
        clientId: "c803fceb-d853-40fb-9ded-3580ebeeca91",//"5e3efee5-fd0e-4be9-945d-2afaa4497edb", //"f45cb1b4-3382-4279-8c29-4278c52ba692",// von Martin "5e3efee5-fd0e-4be9-945d-2afaa4497edb", // "Enter_the_Application_Id_Here",
        // Full directory URL, in the form of https://login.microsoftonline.com/<tenant-id>
        authority: "https://login.microsoftonline.com/ffcb5cef-5f3d-4671-86c3-e50bd56f9812", //ffcb5cef-5f3d-4671-86c3-e50bd56f9812/oauth2/token", //"1d8f4c6b-d1c5-4cf5-9cc5-3f849b61f102", //"ffcb5cef-5f3d-4671-86c3-e50bd56f9812",// "Enter_the_Cloud_Instance_Id_HereEnter_the_Tenant_Info_Here",
        // Full redirect URL, in form of http://localhost:3000
        //redirectUri: "https://www.gmx.at/", // "Enter_the_Redirect_Uri_Here",
        redirectUri: "http://localhost:80", // "Enter_the_Redirect_Uri_Here",
        knownAuthorities: ["https://login.microsoftonline.com/ffcb5cef-5f3d-4671-86c3-e50bd56f9812"],
    },
    // auth: { //Admin Login - worked: Start react oder index.html
    //     // 'Application (client) ID' of app registratic803fceb-d853-40fb-9ded-3580ebeeca91on in Azure portal - this value is a GUID
    //     clientId: "504bd123-b01f-4fce-ac19-7ca692d13839",// "Enter_the_Application_Id_Here",
    //     // Full directory URL, in the form of https://login.microsoftonline.com/<tenant-id>
    //     authority: "https://login.microsoftonline.com/ffcb5cef-5f3d-4671-86c3-e50bd56f9812", //ffcb5cef-5f3d-4671-86c3-e50bd56f9812/oauth2/token", //"1d8f4c6b-d1c5-4cf5-9cc5-3f849b61f102", //"ffcb5cef-5f3d-4671-86c3-e50bd56f9812",// "Enter_the_Cloud_Instance_Id_HereEnter_the_Tenant_Info_Here",
    //     // Full redirect URL, in form of http://localhost:3000
    //     redirectUri: "https://www.htl-kaindorf.at/", // "Enter_the_Redirect_Uri_Here",
    //     knownAuthorities: ["https://login.microsoftonline.com/ffcb5cef-5f3d-4671-86c3-e50bd56f9812"],
    // },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case msal.LogLevel.Error:
                        console.error(message);
                        return;
                    case msal.LogLevel.Info:
                        console.info(message);
                        return;
                    case msal.LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case msal.LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
const loginRequest = {
    scopes: ["User.Read"]
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
const tokenRequest = {
    scopes: ["User.Read", "Mail.Read"],
    forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};
