
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions'
import {useState} from "react";

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


    const countTotalFeedback = () => {
        const total = good + neutral + bad;
        return total;
}

    const countPositiveFeedbackPercentage = (total) => {
        const positivePercentage = Math.round(good * 100 / total);
        return positivePercentage;
    }
    
  const onLeaveFeedback = (e) => {
    const name = e.target.value;
    switch (name) {
      case "good":
        setGood(prevState => prevState + 1)
        break;
       
      case "neutral":
        setNeutral(prevState => prevState + 1)
        break;
       
      case "bad":
        setBad(prevState => prevState + 1)
        break;
     
      default:
        break;
    }
  }
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage(total);
    const options = ['good', 'neutral', 'bad' ];
    return (
      <Section title="Please leave feedback">
      
        <FeedbackOptions options={options} onLeaveFeedback={ onLeaveFeedback}/>
      
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
            
      </Section>  
    )
}


 

  
 
 
 

  
 

