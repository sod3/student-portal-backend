  export const getAllStudents = (req, res) => {
    console.log('getAllStudents function called');
  };

  const teachers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' },
  ];
  
  export const getAllTeachers = (req, res) => {
    res.json(teachers);
  };
  
  export const getChatMessages = (req, res) => {
    console.log('getChatMessages function called');
  };

  export const sendMessage = (req, res) => {
    console.log('sendMessage function called');
  };


