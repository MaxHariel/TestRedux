import React from 'react';
import {connect} from "react-redux";
// import { Container } from './styles';

const Videos = ({activeLesson, activeModule}) => (
      <div>
          <strong>Modulo {activeModule.title}  </strong> <br/>
          <span>Liçao {activeLesson.title}</span>
      </div>
)

export default connect(state => ({
activeLesson: state.course.activeLesson,
activeModule: state.course.activeModule
}))(Videos);