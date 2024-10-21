export default [
    {
        id: 1,
        question: "Which of the following activities do you enjoy the most?",
        options: [
            'Creative tasks (e.g., writing, designing)',
            'Problem-solving tasks (e.g., math, puzzles)',
            'Working with people (e.g., teaching, coaching)',
            'Technical tasks (e.g., programming, engineering)',
        ],
    },
    {
        id: 2,
        question: "What type of work environment do you prefer?",
        options: [
            'A fast-paced, dynamic environment',
            'A quiet, focused workspace',
            'A collaborative team setting',
            'An independent working space',
        ],
    },
    {
        id: 3,
        question: "Which skills do you feel most confident in?",
        options: [
            'Communication and interpersonal skills',
            'Analytical and critical thinking skills',
            'Technical and computer skills',
            'Creative and artistic skills',
        ],
    },
    {
        id: 4,
        question: "What motivates you the most in your work?",
        options: [
            'Making a positive impact on others',
            'Achieving personal goals and recognition',
            'Learning and personal growth',
            'Financial rewards and stability',
        ],
    },
    {
        id: 5,
        question: "How do you prefer to work on tasks?",
        options: [
            'Independently, at my own pace',
            'In a team, collaborating with others',
            'With guidance from a mentor or supervisor',
            'Through structured processes and plans',
        ],
    },
];

// Updated answers array (assumed to be indexes of the selected options for each question)
export const answers = [0, 1, 2, 3, 0]; // Update this based on the desired correct answers
