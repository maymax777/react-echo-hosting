const theme = {
    background: '#eff',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#F067FF',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: 'darkgray',
    botFontColor: 'white',
    userBubbleColor: 'darkgray',
    userFontColor: 'snow',
};

const steps = [
    {
        id: "Greet",
        message: "Hello, Welcome!",
        trigger: "Ask Name"
    },
    {
        id: "Ask Name",
        message: "Please type your name?",
        trigger: "Waiting user input for name"
    },
    {
        id: "Waiting user input for name",
        user: true,
        trigger: "Asking options"
    },
    {
        id: "Asking options",
        message: "Hi {previousValue}, Glad to know you !!",
        trigger: "Done"
    },
    {
        id: "Done",
        message: "Have a great day !!",
        end: true
    }
];

const config = {
    width: "300px",
    height: "450px",
    floating: true
  };

export { theme, steps, config };