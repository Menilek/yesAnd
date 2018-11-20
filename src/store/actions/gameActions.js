const createGame = (game) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        const firestore = getFirestore();
        firestore.collection('games').add({
            ...game,
            authorFirstName:'Grant',
            authorLastName: 'Cardone',
            authorId: 10000000,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_GAME', game});
        }).catch((err) => {
            dispatch({ type: 'CREATE_GAME_ERROR', game}) ;
        })
    }
};

export default createGame;