const conf={
  appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteprojectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwritedbId: String(import.meta.env.VITE_APPWRITE_DB_ID),
  appwritecollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwritebucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}
export default conf