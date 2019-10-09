import React,{Component} from 'react';
import axios from 'axios';
import URL from '../../url';

class Questions extends Component{
    constructor(){
        super()
        this.state={
            loading:true,
            questions:[],
            answers:[],
            submittedAnswers:[]
        }
    }

    handleAnswersChange = (index,event) => {
        var answers = this.state.submittedAnswers.slice()
        answers[index] = event.target.value
        this.setState({
            submittedAnswers:answers
        })
        //console.log(this.state.submittedAnswers)
    }
    
    onSubmit = e => {
        e.preventDefault();
        var score = 0;
        this.state.answers.map((answer,index) => {
            if(this.state.submittedAnswers[index] && this.state.submittedAnswers[index]===answer) score=score+5
        })
        console.log(score)
    }

    componentDidMount(){
        const {level,category} = this.props.match.params;
        axios.get(`${URL}/${level}/${category}`,axios.defaults.headers.common['authorization'] = localStorage.getItem('token'),{
            headers:{"Content-Type": "application/json"}
          })
          .then(res => {
              var questions = [];
              var answers = [];
              Object.keys(res.data).map(ques => {
                  questions.push(res.data[ques].Question);
                  answers.push(res.data[ques].Answer);
              });
              this.setState({
                  questions,
                  answers
              })
          })
          .catch(err => {
              console.log(err.response.data);
          })
    }
    render(){
        const {questions} = this.state;
        return(
            <>
            <form onSubmit={this.onSubmit}>
            {
                questions.map((question,index) => {
                    return (
                        <>
                        <center><h5>{question}</h5></center>
                        <input placeholder="Write your answer here" 
                        id={index} 
                        type="text" 
                        class="validate"
                        onChange={this.handleAnswersChange.bind(this,index)}
                        />  
                    </>  
                        )
                })
            }

            <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Submit
                </button>
            </form>
            </>
        )
    }
}

export default Questions;