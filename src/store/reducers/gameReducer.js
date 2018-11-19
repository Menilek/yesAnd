const initState = {
    games: [
        {id:'1', title: '3 Line Scene', content: 'One person says one line, then the second person says a line and finishes with the first person saying the last line'},
        {id:'2', title: 'Character Walk', content: 'Players walk around the room normally then find some inspiration and use it to change their walk'},
        {id:'3', title: 'Digits', content:'All the players sit in a circle and try to count to 10 without more than one player saying a number at the same time'}
    ]
};

const gameReducer = (state = initState, action) => {
    return state;
}

export default gameReducer;