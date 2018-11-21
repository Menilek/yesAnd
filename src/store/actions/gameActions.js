const createGame = (game) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore.collection('games').add({
            ...game,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorID,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_GAME', game});
        }).catch((err) => {
            dispatch({ type: 'CREATE_GAME_ERROR', game}) ;
        })
    }
};

export default createGame;