import conf from '../config/config_file'
import {Client , ID , Databases , Storage , Query} from 'appwrite'

export class Service{
   client = new Client();
   databases;
   bucket;
   constructor(){
    this.client.setEndpoint(conf.appwriteurl).setProject(conf.appwriteprojectId)
    this.databases= new Databases(this.client);
    this.bucket = new Storage(this.bucket);
   }
   async createPost({title,slug,content,featuredImage,status,userID}){
        try{
            return await this.databases.createDocument(conf.appwritedbId,conf.appwritecollectionId,slug,
                {title,content,featuredImage,status,userID}
            );
        }
        catch(error){
            console.log("Create document error ::", error)
        }
   }

   async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(conf.appwritedbId,conf.appwritecollectionId,slug,{
                title,
                content,
                featuredImage,
                status
            })
        }
        catch(error){
            console.log("Document update ", error)
        }
   }

   async deletePost({slug}){
    try{
         await this.databases.deleteDocument(conf.appwritedbId,conf.appwritecollectionId,slug)
         return true;
    }
    catch(error){
        console.log("Delete document :: ", error)
        return false;
    }
   }

   async getPost(slug)
{
    try{
       return this.databases.getDocument(conf.appwritedbId,conf.appwritecollectionId,slug)
    }
    catch(error){
        console.log("Appwrite get error ::", error);
        return false;
    }
}

 async getPosts(queries = [Query.equal('status',['active'])]){
    try{
      return  this.databases.listDocuments(conf.appwritedbId,conf.appwritecollectionId,queries
        )
    }
    catch(error){
        console.log("appwrite get posts ::",error)
    }
 }

 async uploadFile(file){
    try{
        return await this.bucket.createFile(
            conf.appwritebucketId,
            ID.unique(),
            file
        )
    }
    catch(error){
        console.log("appwrite file ::",error)
        return false;
    }
 }

 async deleteFile(fileID){
     try{
        this.bucket.deleteFile(conf.appwritebucketId,fileID)
     }
     catch(error){
        console.log("appwrite delete file::", error)
        return false
     }
 }
 getFilePreview(fileID){
    return this.bucket.getFilePreview(conf.appwritebucketId,fileID)
 }

}

const service = new Service()
export default service