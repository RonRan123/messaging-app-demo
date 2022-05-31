var express = require('express');
var router = express.Router();
const db = require('./firebase');
const {getDocs, collection, doc, setDoc, deleteDoc, updateDoc, addDoc} = require('firebase/firestore')

router.get('/messages',  async (req, res) => {
    try{
        let query = await getDocs(collection(db, "messages"))
        let response = []
        query.forEach((doc) => response.push({...doc.data(), id: doc.id}))
        return res.status(200).json(response);

    } catch(error){
        console.log(error)
        return res.status(500).json(error);;
    }
}
)

router.post('/message', async (req, res) => {
    try{
        console.log(req.body)
        const ref = await addDoc(collection(db, "messages"), {
            username: req.body.username,
            createdAt: req.body.createdAt,
            text: req.body.text
        })
        console.log('Document written with id', ref.id)
        return res.status(201).json({message: 'Post Successful!'})
    } catch(error){
        console.log(error)
        return res.status(500).send(error)
    }

})


module.exports = router;