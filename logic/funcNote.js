import {changeInfo,removeNote} from '../store/notes/boardSlice'
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

let numberOfDeleted = 0

export const handlePress = (notes,dispatch,isInfo,id) => {
    {notes.forEach(note => {
        if(note.isInfo === true){
        dispatch(changeInfo(note.id));
        }
    });}
    if (isInfo) {
        dispatch(changeInfo(id));
        dispatch(removeNote(id));
        deleteNote(id);
    } else {
        dispatch(changeInfo(id));
    }
};

const deleteNote = async (id) => {
    try {
        const MY_EMAIL = auth().currentUser.email
        
        // TAKE STICKER CONTENT AND CREATOR 
        let stickersonboard

        const result = await firestore()
        .collection('users')
        .where('email', '==', MY_EMAIL)
        .get()
    
        result.forEach(doc=>{
            stickersonboard = doc.data().stickersOnBoard
        })
  
        // ITERATE OVER PENDING NOTES 
  
        stickersonboard.forEach((sticker,index) => {
          index = index + 1
          let sum = id - numberOfDeleted
          if(index === sum){
            creator = sticker.creator
            content = sticker.content
          }
        })
        numberOfDeleted++
         // REMOVE STICKER FROM PENDING 
        firestore()
        .collection('users')
        .where('email', '==', MY_EMAIL)
        .get()
        .then((querySnapshot)=>{
        querySnapshot.forEach(doc => {
            firestore()
            .collection('users')
            .doc(doc.id)
            .update({
            stickersOnBoard: firebase.firestore.FieldValue.arrayRemove({
                content: content,
                creator: creator,
            }),
            })
        })
        })
    } catch (error) {
      console.log(error.message);
    }
}


