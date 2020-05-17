/* eslint-disable react/react-in-jsx-scope */
import { Component } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

class StudentResult extends Component {

    state = {
        input_roll_number:"9141",
        student_Data:[
            {
                rollno:"9140",
                sub1:"72",
                sub2:"62",
                sub3:"56",
                total1:"190",
                sub4:"81",
                sub5:"58",
                total2:"139",
                sub6:"60",
                garde1:"a",
                garde2:"a",
                grade3:"a",
                total3:"369",
                per:"64.83",
                shera:"pass"
            },
            {
                rollno:"9141",
                sub1:"2",
                sub2:"2",
                sub3:"2",
                total1:"2",
                sub4:"2",
                sub5:"2",
                total2:"2",
                sub6:"2",
                garde1:"a",
                garde2:"a",
                grade3:"a",
                total3:"369",
                per:"71.83",
                shera:"pass"
            }
        ],
        studentResult:{

        }
    }
    inputvalue = (event) => {
        const enterednumber = event.target.value;
        this.setState({input_roll_number:enterednumber});
        console.log(enterednumber);
    }

    showresut(){
        const rollno = this.state.input_roll_number;
        const res = this.state.student_Data.filter(item=> item.rollno === rollno);
        console.log(res);
        this.setState({studentResult:res[0]});
    }
    printresult() {
        const input = document.getElementById('studentresultmark');
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'landscape',
      
              });
            pdf.addImage(imgData, 'JPEG', 10, 10);
            // pdf.output('dataurlnewwindow');
            pdf.save("download.pdf");
          })
        ;
    }
    render(){
        const {t} = this.props; 
        const number = this.state.input_roll_number;
        
        console.log("this.state.studentResult");
        console.log(this.state.studentResult);
        return(
            // eslint-disable-next-line react/react-in-jsx-scope
            <React.Fragment>
            <div >
                <br/>
                <Row>
                    <Col > <label>Enter Roll Number:</label> <input type="number" onChange={(event)=>this.inputvalue(event)}></input><Button onClick={()=>this.showresut()}>Show Result</Button> </Col>
             <Col sm="4"><Button onClick={()=>this.printresult()}>Print Result</Button></Col>
                </Row>
                <br/>
            <br/>
            <div class="container" id="studentresultmark">
            <Form>
              <table style={{width:"600px"}}  class="table table-bordered">
                <thead>
                <tr>
          <th colSpan="15"> <Row style={{ display:"block", fontSize:"22px"}}>{t('schoolnameline1')}</Row>
                </th>
      </tr>
      <tr>
          <th colSpan="15">      <Row style={{ display:"block", fontSize:"22px"}}>{t('schoolnameline2')}</Row>
    </th>

      </tr>
      <tr>
          <th colSpan="15">
          <Row style={{ display:"block", fontSize:"22px"}}>{t('schoolnameline3')}</Row>

          </th>
          </tr>
    <tr>
      {/* <th rowspan="2" scope="col">{t('sub')}</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Last</th> */}
      <th colSpan="15">  
       <Row style={{ display:"flex", fontSize:"22px"}}>
                  <Col sm="4">{t('studentnamelabel')} {t(this.state.input_roll_number)}</Col>
                  <Col sm="4">{t('class')}</Col>
                  <Col sm="4">{t('division')} {number}</Col>
      </Row> 
       </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" scope="row">{t('sub')}</th>
      <td colSpan="4">{t('lan')}</td>
        <td colSpan="3">{t('scimat')}</td>
        <td rowspan="2">{t('socialsci')}</td>
    <td rowspan="2">{t('sub1')}</td>
    <td rowspan="2">{t('sub2')}</td>
    <td rowspan="2">{t('sub3')}</td>
    <td rowspan="2">{t('total')}</td>
    <td rowspan="2">{t('grade')}</td>
    <td rowspan="2">{t('gradef')}</td>
    </tr>
    <tr>
        <td>{t('marathi')}</td>
        <td>{t('hindi')}</td>
        <td>{t('english')}</td>
        <td>{t('total')}</td>
        <td>{t('math')}</td>
        <td>{t('sci')}</td>
        <td>{t('total')}</td>
    </tr>
    <tr>
        <th scope="row">{t('finaltotal')}</th>
      <td>100</td>
      <td>100</td>
      <td>100</td>
      <td>300</td>
      <td>100</td>
      <td>100</td>
      <td>200</td>
        <td>{t('grade')}</td>
    <td>{t('grademark')}</td>
    <td>{t('grademark')}</td>
    <td>{t('grademark')}</td>
    <td>600</td>
    <td>{t('शेकडा गुण')}</td>
      <td>@</td>
    </tr>
    <tr>
    <td>{t('obtainedmark')}</td>
        <td>{this.state.studentResult.sub1}</td>
    <td>{this.state.studentResult.sub1}</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>

  </tbody>
</table>
            <Row>    <label style={{textAlign:"left"}}>{t('note')}</label>
            </Row>
<br/>
<br/>
<Row>
    <Col sm="3">
       <label> {t('classteacher')}</label></Col>
<Col sm="3"></Col>
<Col sm="3"></Col>
    <Col sm="3"><label>{t('headmaster')}</label></Col>
    </Row>
        </Form>
        </div>
            </div>
            </React.Fragment>
        )
    }
}
export default withTranslation()(StudentResult);