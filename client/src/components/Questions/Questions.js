import React,{Component} from 'react';
import axios from 'axios';
import URL from '../../url';
import {connect} from 'react-redux'
import { setCurrentUser,setScore } from '../../actions';
import {Redirect} from 'react-router-dom';
import "./question.css";
import SpinnerPage from "../loader/Loader";


class Questions extends Component{
    constructor(){
        super()
        this.state={
            loading:true,
            questions:[],
            answers:[],
            submittedAnswers:[],
            add: 0,
            text: "" 
        };
        this.setCookie = this.setCookie.bind(this);
        this.getCookie = this.getCookie.bind(this);
        this.checkCookie = this.checkCookie.bind(this);
    }
    
    setCookie(cname,cvalue) {
        var d = new Date();
        d.setTime(d.getTime() + 90000);
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }
      
      getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return Number(c.substring(name.length, c.length));
          }
        }
        return "";
      }
      
      checkCookie() {
        var user = this.getCookie(this.props.category);
        console.log("cookie",document.cookie);
        // console.log("props",this.props);
        if (user > (new Date().getTime())) {
          var x = setInterval(() => {
    
            var now = new Date().getTime();
              
            var distance = user - now;
              
            var seconds = Math.floor(distance/ 1000);
            
            this.setState({
               text: "time left is "+seconds+"s"
            });
            if (seconds === 0) {
              clearInterval(x);
              this.setState({
                  text: "Time's Up"
              });
              this.calculateScore()
            }
          }, 1000);
    
        }
        else {  
          if(user < (new Date().getTime())){
            this.setState({
                text: "Cookie expired, executing once again!"
            });
            setTimeout(function(){return true;},3000);
            this.setCookie(this.props.category, (new Date().getTime()+90000));
            this.checkCookie();  
          }
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
    
    calculateScore = () => {
        var score = 0;
        this.state.answers.map((answer,index) => {
            if(this.state.submittedAnswers[index] && this.state.submittedAnswers[index]===answer) score=score+5
        })
        var currentScore = score;
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
              console.log(currentScore);
              this.props.setScore(currentScore);
              this.props.history.push('/congratulations');
          })
          .catch(err => {
              console.log(err.response.data)
          })
    }

    onSubmit = e => {
        e.preventDefault();
        this.calculateScore()
    }

    componentDidMount(){
        var {level,category} = this.props;
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
          this.checkCookie();
    }


    render(){
        const {questions} = this.state;
        //if(this.state.text === "Time's Up") return <Redirect to='/congratulations'/>
        if(questions.length == 0) return <SpinnerPage />
        else if(!this.props.level || !this.props.category) return <Redirect to='/dashboard'/>
        else {
            
        return(
            <div className="container" >
                <div className="card-panel row sticky" id="timer">
                    <h5>{this.state.text}</h5>
                </div>
                <form onSubmit={this.onSubmit} autoComplete="off">
            {
                questions.map((question,index) => {
                    return (
                        <div className="card-panel row">
                            <h5><span style={{fontWeight: "bold", color: "#4a148c"}}>(Q)</span> {question} = ?</h5>
                            <input placeholder="Type your answer here" 
                            id={index} 
                            type="text" 
                            class="validate"
                            onChange={this.handleAnswersChange.bind(this,index)}
                            />
                        </div>  
                        )
                })
            }

            <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    fontWeight: "bold"
                  }}
                  type="submit"
                  className="waves-effect waves-light btn-large hoverable blue accent-3"
                >Submit
                </button>
            </form>
            </div>
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
        setCurrentUser : (user,token) => dispatch(setCurrentUser(user,token)),
        setScore : (score) => dispatch(setScore(score))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(Questions);