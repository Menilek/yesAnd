const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.greeting = functions.https.onRequest((request, response) => {
    response.send("IMPROVISERS AT THE READY");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc =>
            console.log('Added notification:', doc));
    }

exports.gameCreated = functions.firestore.document('games/{gameId}').onCreate(doc => {
    const game = doc.data();
    const notification = {
        content: 'created a new game',
        user: `${game.authorFirstName} ${game.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification)
})

exports.userCreated = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users')
        .doc(user.uid).get().then(doc => {
            const newUser = doc.data();
            const notification = {
                content: 'joined the stage',
                user: `${newUser.firstName} ${newUser.lastName}`,
                time: admin.firestore.FieldValue.serverTimestamp()
            }
            return createNotification(notification)
        })
})