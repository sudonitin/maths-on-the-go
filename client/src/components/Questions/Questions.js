import React,{Component} from 'react';
import axios from 'axios';
import URL from '../../url';
import {connect} from 'react-redux'
import { setCurrentUser } from '../../actions';

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
        score+=this.props.user[this.props.level]
        console.log(score)
        axios.post(`${URL}/update/upscore`,{
            email:JSON.parse(localStorage.getItem('user')).email,
            level:this.props.level,
            score
        },axios.defaults.headers.common['authorization'] = localStorage.getItem('token'),{
            headers:{"Content-Type": "application/json"}
          })
          .then(res => {
              console.log(res.data.user.value)
              localStorage.setItem('user',JSON.stringify(res.data.user.value))
              console.log(localStorage.getItem('user'));
              this.props.setCurrentUser(res.data.user.value,localStorage.getItem('token'))

          })
          .catch(err => {
              console.log(err.response.data)
          })
    }

    componentDidMount(){
        const {level,category} = this.props;
        axios.get(`${URL}/${level}/${category.toLowerCase()}`,axios.defaults.headers.common['authorization'] = localStorage.getItem('token'),{
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
        if(questions.length == 0) return <div>loading</div>
        else {
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
}

const mapStateToProps = (state) => {
    const {level,category,user} = state;
    return {level,category,user};
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentUser : (user,token) => dispatch(setCurrentUser(user,token))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(Questions);