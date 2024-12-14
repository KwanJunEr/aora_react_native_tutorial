import { Client, Account, ID, Avatars, Databases} from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jonas.aora',
    projectId: '675c2da10002c06211a0',
    databaseId: '675c2f7b00218ac00e10',
    userCollectionId: '675c31300026c0427971',
    videosCollectionId: '675c31910021512ab237',
    storageId: '675cd247003354acb8bd'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

    export const createUser = async (email, password, username)=>{
            // Register User

        try{
            const newAccount = await account.create(
                ID.unique(),
                email,
                password,
                username
            )
            if(!newAccount) throw Error;
            const avatarUrl = avatars.getInitials(username)
            await signIn(email, password);
            const newUser = await databases.createDocument(
                config.databaseId,
                config.userCollectionId,
                ID.unique(), 
                {
                    accountId: newAccount.$id,
                    email,
                    username,
                    avatar: avatarUrl
                }
            )
            return newUser;
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
       
    }

    export async function signIn(email, password){
        try{
            const session = await account.createEmailPasswordSession(email, password);
            return session;
        }catch(error){
            throw new Error(error);
        }
    }






