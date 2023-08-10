import React from "react";
import '../src/stile/index.css';

const questions = [
   {
      title: 'React - what is it... ?',
      variants: ['library', 'framework', 'app'],
      correct: 0,
   },
   {
      title: 'component - what is it... ',
      variants: ['app', 'piece of page', 'idk'],
      correct: 1,
   },
   {
      title: 'what is JSX?',
      variants: [
         'tag of HTML',
         'fuction',
         'HTML inside js code',
      ],
      correct: 2,
   },
];

function Result({correct ,questions}) {
   return (
      <div className="result">
         <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
         <h2>you gess {correct} from {questions.length}</h2>
         <a href="/"><button>try again</button></a>
      </div>
   );
}

function Game({step, question, onClickVariant}) {
   const persentbar = Math.round(step / questions.length * 100)
   return (
      <>
         <div className="progress">
            <div style={{ width: `${persentbar}%` }} className="progress__inner"></div>
         </div>
         <h1>{question.title}</h1>
         <ul>
            {
               question.variants.map((text, index) => <li onClick={() =>onClickVariant(index)} key={text}>{text}</li>)
            }
         </ul>
      </>
   );
}

function App() {
   const [step, setStep] = React.useState(0)
   const [correct, setCorrect] = React.useState(0)

   const question = questions[step];

   const onClickVariant = (index) =>{
      setStep(step + 1)
      if (index === question.correct){
         setCorrect(correct + 1)
      }
   }
   return (
      <div className="App">
         {
            step != questions.length ? <Game step={step} question={question} onClickVariant={onClickVariant} /> : <Result correct= {correct} questions={questions}/>
         }
      </div>
   );
}

export default App;
