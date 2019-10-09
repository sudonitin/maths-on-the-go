import React,{Component} from 'react';
import axios from 'axios';
import URL from '../../url';

class Questions extends Component{
    constructor(){
        super()
        this.state={
            loading:true,
            questions:[],
            answers:[]
        }
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
            {
                questions.map(question => {
                    return (
                        <>
                        <center><h5>{question}</h5></center>
                        <input placeholder="Write your answer here" id="first_name" type="text" class="validate"/>  
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
            
            </>
        )
    }
}

export default Questions;