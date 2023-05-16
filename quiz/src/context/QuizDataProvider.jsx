import { createContext, useState } from "react";

export const QuizCtx = createContext(undefined);

export function QuizDataProvider({ children }) {

    const [questions, setQuestions] = useState({
        arr: [
            {
                q: "this is a grave question 1",
                ansOption: ["Strongly Disagree", 'Disagree', "Neutral", "Agree", "Strongly Agree"],
                ans: 1
            },
            {
                q: "this is a grave question 2 ",
                ansOption: ["Strongly Disagree", 'Disagree', "Neutral", "Agree", "Strongly Agree"],
                ans: 2
            },
            {
                q: "this is a grave question 3 ",
                ansOption: ["Strongly Disagree", 'Disagree', "Neutral", "Agree", "Strongly Agree"],
                ans: 4
            },
            {
                q: "this is a grave question 4",
                ansOption: ["Strongly Disagree", 'Disagree', "Neutral", "Agree", "Strongly Agree"],
                ans: 3
            },
            {
                q: "this is a grave question 5",
                ansOption: ["Strongly Disagree", 'Disagree', "Neutral", "Agree", "Strongly Agree"],
                ans: 2
            },
            {
                q: "this is a grave question 6",
                ansOption: ["Strongly Disagree", 'Disagree', "Neutral", "Agree", "Strongly Agree"],
                ans: 2
            }
        ]
    }
    )

    return (

        <QuizCtx.Provider value={questions} >
            {children}
        </QuizCtx.Provider>

    )
}