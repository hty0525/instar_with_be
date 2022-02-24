import {
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
    updateDoc
} from "firebase/firestore";
import {uploadString, getStorage, ref, getDownloadURL} from 'firebase/storage';
import firebase from './firebase'


// const data = {
//     writeId:null,
//     postId:null,
//     likeId:[],
//     content:null,
//     imgUrl:null,
//     time:null,
// }
class PostApis {
    constructor (db = firebase){
        this.db = db
    }
    
    async getPost(){
        const postList = []
        const getPostList = await getDocs(collection(this.db, "post"));
        getPostList.forEach((doc) => {
            postList.push({...doc.data(),id:doc.id})
        });
        return postList
    }

    async addPost(data){
        const {writeId,postId,content,uploadImg,time,writeName} = data;
        const filename = `images/${postId}`;
        const storageRef = ref(getStorage(), filename);
        const imgUrl = await uploadString(storageRef, uploadImg, 'data_url')
        .then(() => getDownloadURL(ref(getStorage(), filename)))
        .catch(err => console.log('이미지 업로드 에러', err));
        console.log(imgUrl)
        console.log(data)
        await addDoc(collection(this.db, "post"), {
            writeId,
            writeName,
            likeId:[],
            content,
            imgUrl,
            time,
            postId
            })
    }

    async deletePost(id){
        await deleteDoc(doc(this.db, "post", id));
    }

    async editPost(post,desc,ex,id,date){
        return await updateDoc(doc(this.db, "post", id), {
            post,
            desc,
            ex,
            date
        })
    }

    async likePost(data){
        const {id,likeId} = data;
        await updateDoc(doc(this.db,"post",id),{likeId})
    }
}
export default PostApis