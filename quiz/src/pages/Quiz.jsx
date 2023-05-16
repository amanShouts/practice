import { useNavigate, useParams } from "react-router-dom"
import "../css/Quiz.css"
import { useEffect, useRef, useState } from "react"
import { useContext } from "react"
import { QuizCtx } from "../context/QuizDataProvider"
import { useToast } from '@chakra-ui/react'

export function Quiz() {

    const { arr } = useContext(QuizCtx)
    const { index } = useParams()
    const inputRef = useRef(null)
    const toast = useToast()

    const [ques, setQues] = useState(arr[index])
    const [slider, setSlider] = useState(1)
    const [percent, setPercent] = useState(0)

    const navigate = useNavigate()

    // console.log(percent, index, ques)
    // console.log(arr, index, ques)

    useEffect(() => {
        inputRef.current.value = 0
        let progress = ((+index) / (arr.length - 1) * 100)
        console.log("helllllllllllo", index, progress)
        setPercent(prev => progress)
    }, [index])

    function sliderSelect(e) {
        console.log("working", e.target.value)

    }

    function doNavigation(factor) {
        let newIndex = Math.floor((+index + +factor) % arr.length)
        console.log("inside navigation function", arr, newIndex)
        setQues(prev => arr[(Number)(newIndex)])
        navigate(`/quiz/${newIndex}`)
    }

    function checkAnswer(e) {

        // console.log(e.target.value, ques.ans)
        // let answerStatus = ""
        // if (e.target.value == ques.ans) {
        //     answerStatus = "Correct!"
        //     setTimeout(() => { doNavigation(1) }, 1000)
        // }
        // else {
        //     answerStatus = "Wrong Answer :("
        // }
        toast({
            title: `nice`,
            description: "",
            status: 'success',
            duration: 500,
            isClosable: true,
        })

        setTimeout(() => { doNavigation(1) }, 1000)

    }

    return (
        <div className="quiz_main">
            <div className="quiz_block_wrap">
                <div className="quiz_block">
                    <div className="quiz_block_progress_div">
                        <div style={{
                            backgroundColor: "pink",
                            height: "10px",
                            width: `${percent}%`,
                            borderRadius: "5px",
                            transitionDuration: "1s",
                            // animation: "0.2s linear",
                        }}>

                        </div>

                    </div>

                    <p className="quiz_question_number">{+index + 1}/{arr.length} </p>
                    <h2 className="quiz_question">  {ques.q} </h2>

                    {/* min={1} max={6}  */}
                    <div className="quiz_answer">
                        <input type="range" min={1} max={5} onInput={(e) => sliderSelect(e)} list="markers" className="quiz_answer_slider" ref={inputRef} onClick={(e) => { checkAnswer(e) }} />
                        {/* <datalist id="markers">
                            <option className="ticks" value="0"></option>
                            <option className="ticks" value="25"></option>
                            <option className="ticks" value="50"></option>
                            <option value="75"></option>
                            <option value="100"></option>
                        </datalist> */}

                        <div className="quiz_answer_options">
                            <span> {ques.ansOption[0]} </span>
                            <span> {ques.ansOption[1]} </span>
                            <span> {ques.ansOption[2]} </span>
                            <span> {ques.ansOption[3]} </span>
                            <span> {ques.ansOption[4]} </span>
                            <span> {ques.ansOption[5]} </span>
                        </div>
                    </div>

                    <div className="quiz_navigate_buttons">
                        <button onClick={(e) => { doNavigation(-1) }} > PREV </button>
                        <button onClick={(e) => { doNavigation(1) }} >  NEXT </button>
                    </div>
                </div>
            </div>
        </div >
    )
}