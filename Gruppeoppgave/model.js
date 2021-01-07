const model = {
    userInfo: {
        username: 'user',
        authenticationTicket: '',
    },
    newPollInputs: {
        question: '',
        alternative: '',
        deadline: '',
        userCanAddAlternative: true,
    },
    polls : [
        {
            question: 'Hva skal vi lage til mat?',
            alternatives: [
                'Taco',
                'Laks',
                'Burger',
            ],
            deadline: '06.01.2021 12.50',
            selectedAnswer : 0,
            inputField: '',
            voteCount: [4, 5, 1],
            userCanAddAlternative: true,
            votingEnded: true,
        },
        
        {
            question: 'Hvem har finest bil?',
            alternatives: [
                'Lars',
                'Herman',
                'Jonas',
            ],
            deadline: '06.01.2021 12.50',
            selectedAnswer: 2,
            inputField: '',
            voteCount: [1, 3, 4],
            userCanAddAlternative: true,
            votingEnded: true,
        },

        {
            question: 'Hva er ditt favorittkjeledyr?',
            alternatives: [
                'Hund',
                'Katt',
                'Mus',
            ],
            deadline: '06.01.2021 12.50',
            selectedAnswer: 0,
            inputField: '',
            voteCount: [1, 5, 3],
            userCanAddAlternative: false,
            votingEnded: true,
        }
    ]
    
};

/*


{
    key1000: {
        key: something,
        completed: true,
        pollToShow: poll3
    },
    key2000: {
        key: something,
        completed: true,
        pollToShow: poll3
    },
    key3000: {
        key: something,
        completed: true,
        pollToShow: poll3
    },
    key4000: {
        key: something,
        completed: true,
        pollToShow: poll3
    }
}

eksempel: spørreundersøkelse.no/key1000


if key.completed = true then

dont show/dont allow access to page / show page that says the poll is completed

else

show / allow access to page

*/