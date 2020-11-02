import React, { useReducer, useState,useRef, useEffect } from 'react'
import { Line, Bar, Doughnut } from 'react-chartjs-2'
import { gsap } from 'gsap/all';

//other pages
import JavaPage from './JavaPage'
import PythonPage from './PythonPage'
import CsharpPage from './CsharpPage'
import JavascriptPage from './JavascriptPage'
//other pages

//reducer 
import { javaPythonAction, javaCsharpAction, javaJavascriptAction, 
         pythonJavaAction, pythonCsharpAction, pythonJavascriptAction,
         cSharpJavaAction, cSharpPythonAction, cSharpJavascriptAction,
         javascriptJavaAction, javascriptPythonAction, javascriptCsharpAction, } from '../redux'
import { connect } from 'react-redux'
//reducer

const initialLanguageState = { 
    languageChosen: 'comparePage', 

    compareButtonOpac: '1',
    javaButtonOpac: '0.7',
    pythonButtonOpac: '0.7',
    cSharpButtonOpac: '0.7',
    javascriptButtonOpac: '0.7',
}


const reducer = (state, action) => {
    switch(action.type) {
        case 'JAVA': 
            return {
                languageChosen: 'Java',
                compareButtonOpac: '0.7',
                javaButtonOpac: '1',
                pythonButtonOpac: '0.7',
                cSharpButtonOpac: '0.7',
                javascriptButtonOpac: '0.7',
            }

        case 'PYTHON': 
            return {
                languageChosen: 'Python',
                compareButtonOpac: '0.7',
                javaButtonOpac: '0.7',
                pythonButtonOpac: '1',
                cSharpButtonOpac: '0.7',
                javascriptButtonOpac: '0.7',
            }

        case 'C#': 
            return {
                languageChosen: 'C#',
                compareButtonOpac: '0.7',
                javaButtonOpac: '0.7',
                pythonButtonOpac: '0.7',
                cSharpButtonOpac: '1',
                javascriptButtonOpac: '0.7',
            }

        case 'JAVASCRIPT': 
            return {
                languageChosen: 'Javascript',
                compareButtonOpac: '0.7',
                javaButtonOpac: '0.7',
                pythonButtonOpac: '0.7',
                cSharpButtonOpac: '0.7',
                javascriptButtonOpac: '1',
            }

        case 'COMPAREPAGE':
            return {
                languageChosen: 'ComparePage',
                compareButtonOpac: '1',
                javaButtonOpac: '0.7',
                pythonButtonOpac: '0.7',
                cSharpButtonOpac: '0.7',
                javascriptButtonOpac: '0.7',
            }
        default: 
            return {state}
    }
}

function Language(props) {

    //useState
    const [lan, setLan] = useState('')
    const [lan2, setLan2] = useState('')
    const [opacity, setOpacity] = useState(0)
    const [divDisplay, setDivDisplay] = useState('none')
    const [repAnim, setRepAnim] = useState(0);
    const [reloadBug, setReloadBug] = useState(0)
    //useState

    //useReducer 
        const [state, dispatch] = useReducer(reducer, initialLanguageState);
    //useReducer

    //useRef 
    const PayDivAnim = useRef(null);

    const leftNavAnim = useRef(null);

    const leftNavTitle = useRef(null);
    const left1 = useRef(null);
    const left2 = useRef(null);
    const left3 = useRef(null);
    const left4 = useRef(null);
    const left5 = useRef(null);

    const inputButton = useRef(null);
    const twoDataSets = useRef(null);
    const bottomDataSet = useRef(null);
    //useRef 

    //useEffect 
    useEffect(() => {
        if (reloadBug === 0) {
           gsap.from(leftNavAnim.current, {ease: 'none', autoAlpha: 0, delay: 0.1, duration: 0.3})

            gsap.from(leftNavTitle.current, {ease: 'none', autoAlpha: 0, delay: 0.4, duration: 0.8})
            gsap.from(left1.current, {ease: 'none', autoAlpha: 0, delay: 0.5, duration: 0.8})
            gsap.from(left2.current, {ease: 'none', autoAlpha: 0, delay: 0.6, duration: 0.8})
            gsap.from(left3.current, {ease: 'none', autoAlpha: 0, delay: 0.7, duration: 0.8})
            gsap.from(left4.current, {ease: 'none', autoAlpha: 0, delay: 0.8, duration: 0.8})
            gsap.from(left5.current, {ease: 'none', autoAlpha: 0, delay: 0.9, duration: 0.8})

            gsap.from(inputButton.current, {ease: 'none', autoAlpha: 0, delay: 1.1, duration: 0.8})
            gsap.from(twoDataSets.current, {ease: 'none', autoAlpha: 0, delay: 1.3, duration: 0.8})
            gsap.from(bottomDataSet.current, {ease: 'none', autoAlpha: 0, delay: 1.5, duration: 0.8}) 
        }
        setReloadBug(1)
    }, [twoDataSets, reloadBug])
    //useEffect 

    //bar graph 
    const BarStats = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020], 
        datasets: [
            {
                label: lan,

                data: lan === 'Java' ? 
                    [props.javaPay1state, props.javaPay2state, props.javaPay3state, 
                     props.javaPay4state, props.javaPay5state, props.javaPay6state] : 
                    
                    lan === 'Python' ?
                    [props.pythonPay1state, props.pythonPay2state, props.pythonPay3state, 
                     props.pythonPay4state, props.pythonPay5state, props.pythonPay6state] : 
                    
                    lan === 'C#'  ?
                    [props.cSharpPay1state, props.cSharpPay2state, props.cSharpPay3state, 
                     props.cSharpPay4state, props.cSharpPay5state, props.cSharpPay6state] : 
                     
                     lan === 'Javascript' ? 
                     [props.javascriptPay1state, props.javascriptPay2state, props.javascriptPay3state, 
                      props.javascriptPay4state, props.javascriptPay5state, props.javascriptPay6state] : [],

                borderColor: ['#e74a3b'],
                backgroundColor: ['#e74a3b', '#e74a3b', '#e74a3b', '#e74a3b', '#e74a3b', '#e74a3b'],
                pointBackgroundColor: '#e74a3b',
                pointBorderColor: '#e74a3b'
            }, 
            {
                label: lan2,
                
                data:
                //JAVA JAVA  
                lan === 'Java' ?  
                    lan2 === 'Python' ? 
                        [props.javaPythonPay1state, props.javaPythonPay2state, props.javaPythonPay3state, 
                         props.javaPythonPay4state, props.javaPythonPay5state, props.javaPythonPay6state] : 

                    lan2 === 'C#' ?
                        [props.javaCsharpPay1state, props.javaCsharpPay2state, props.javaCsharpPay3state, 
                         props.javaCsharpPay4state, props.javaCsharpPay5state, props.javaCsharpPay6state] : 

                    lan2 === 'Javascript' ? 
                        [props.javaJavascriptPay1state, props.javaJavascriptPay2state, props.javaJavascriptPay3state, 
                         props.javaJavascriptPay4state, props.javaJavascriptPay5state, props.javaJavascriptPay6state] : [] :
                
                //PYTHON PYTHON
                lan === 'Python' ? 
                    lan2 === 'Java' ? 
                        [props.pythonJavaPay1state, props.pythonJavaPay2state, props.pythonJavaPay3state, 
                         props.pythonJavaPay4state, props.pythonJavaPay5state, props.pythonJavaPay6state] : 
                 
                    lan2 === 'C#' ? 
                        [props.pythonCsharpPay1state, props.pythonCsharpPay2state, props.pythonCsharpPay3state, 
                            props.pythonCsharpPay4state, props.pythonCsharpPay5state, props.pythonCsharpPay6state] : 
                
                    lan2 === 'Javascript' ?
                        [props.pythonJavascriptPay1state, props.pythonJavascriptPay2state, props.pythonJavascriptPay3state, 
                         props.pythonJavascriptPay4state, props.pythonJavascriptPay5state, props.pythonJavascriptPay6state] : [] :
            
                //C# C#
                lan === 'C#' ?
                    lan2 === 'Java' ?
                        [props.cSharpJavaPay1state, props.cSharpJavaPay2state, props.cSharpJavaPay3state, 
                         props.cSharpJavaPay4state, props.cSharpJavaPay5state, props.cSharpJavaPay6state] : 

                    lan2 === 'Python' ? 
                        [props.cSharpPythonPay1state, props.cSharpPythonPay2state, props.cSharpPythonPay3state, 
                         props.cSharpPythonPay4state, props.cSharpPythonPay5state, props.cSharpPythonPay6state] : 

                    lan2 === 'Javascript' ? 
                        [props.cSharpJavascriptPay1state, props.cSharpJavascriptPay2state, props.cSharpJavascriptPay3state, 
                         props.cSharpJavascriptPay4state, props.cSharpJavascriptPay5state, props.cSharpJavascriptPay6state] : [] :
                
                //JAVASCRIPT JAVASCRIPT 
                lan === 'Javascript' ? 
                    lan2 === 'Java' ? 
                        [props.javascriptJavaPay1state, props.javascriptJavaPay2state, props.javascriptJavaPay3state, 
                            props.javascriptJavaPay4state, props.javascriptJavaPay5state, props.javascriptJavaPay6state] : 

                    lan2 === 'Python' ?
                        [props.javascriptPythonPay1state, props.javascriptPythonPay2state, props.javascriptPythonPay3state, 
                         props.javascriptPythonPay4state, props.javascriptPythonPay5state, props.javascriptPythonPay6state] : 
                    
                    lan2 === 'C#' ? 
                        [props.javascriptCsharpPay1state, props.javascriptCsharpPay2state, props.javascriptCsharpPay3state, 
                            props.javascriptCsharpPay4state, props.javascriptCsharpPay5state, props.javascriptCsharpPay6state] : [] : [],


                borderColor: ['#4e73df'],
                backgroundColor: ['#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df'],
                pointBackgroundColor: '#4e73df',
                pointBorderColor: '#4e73df'
            }
        ]
    }

    const BarOptions = {
        title: {
            display: true, 
            text: 'Pay'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 60000,
                        max: 130000,
                        stepSize: 15000,
                    }
                }
            ]
        }
    }
    //bar graph

    //donut graph
    const DonutStats = {
        labels: [lan, lan2], 
        datasets: [
            {
                label: lan,

                data: 
                    lan === 'Java' ? 
                        lan2 === 'Python' ? 
                            [props.javaPop10state, props.javaPythonPop10state] : 
                        lan2 === 'C#' ? 
                            [props.javaPop10state, props.javaCsharpPop10state] : 
                        lan2 === 'Javascript' ?
                            [props.javaPop10state, props.javaJavascriptPop10state] : [] : 
                    
                    lan === 'Python' ? 
                        lan2 === 'Java' ? 
                            [props.pythonPop10state, props.pythonJavaPop10state] : 
                        lan2 === 'C#' ? 
                            [props.pythonPop10state, props.pythonCsharpPop10state] : 
                        lan2 === 'Javascript' ? 
                            [props.pythonPop10state, props.pythonJavascriptPop10state] : [] : 
                    
                    lan === 'C#' ? 
                        lan2 === 'Java' ? 
                            [props.cSharpPop10state, props.cSharpJavaPop10state] : 
                        lan2 === 'Python' ? 
                            [props.cSharpPythonPop10state, props.cSharpPythonPop10state] : 
                        lan2 === 'Javascript' ? 
                            [props.cSharpPop10state, props.cSharpJavascriptPop10state] : [] : 
                    
                    lan === 'Javascript' ? 
                        lan2 === 'Java' ? 
                            [props.javascriptPop10state, props.javascriptJavaPop10state] : 
                        lan2 === 'Python' ? 
                            [props.javascriptPop10state, props.javascriptPythonPop10state] : 
                        lan2 === 'C#' ? 
                            [props.javascriptPop10state, props.javascriptCsharpPop10state] : [] : [],

                    
                    

                borderColor: ['#e74a3b'],
                backgroundColor: ['#e74a3b', '#4e73df'],
                pointBackgroundColor: '#e74a3b',
                pointBorderColor: '#e74a3b'
            }, 
        ]
    }

    const DonutOptions = {
        title: {
            display: true, 
            text: 'Popularity'
        },
    }
    //donut graph 

    //line graph 
    const LineStats = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020], 
        datasets: [
            {
                label: lan,

                data: lan === 'Java' ? 
                    [props.javaPay1state, props.javaPay2state, props.javaPay3state, 
                     props.javaPay4state, props.javaPay5state, props.javaPay6state] : 
                    
                    lan === 'Python' ?
                    [props.pythonPay1state, props.pythonPay2state, props.pythonPay3state, 
                     props.pythonPay4state, props.pythonPay5state, props.pythonPay6state] : 
                    
                    lan === 'C#'  ?
                    [props.cSharpPay1state, props.cSharpPay2state, props.cSharpPay3state, 
                     props.cSharpPay4state, props.cSharpPay5state, props.cSharpPay6state] : 
                     
                     lan === 'Javascript' ? 
                     [props.javascriptPay1state, props.javascriptPay2state, props.javascriptPay3state, 
                      props.javascriptPay4state, props.javascriptPay5state, props.javascriptPay6state] : [],

                borderColor: ['red'],
                backgroundColor: ['#e74a3b'],
                pointBackgroundColor: 'red',
                pointBorderColor: 'red',
            }, 
            {
                label: lan2,
                
                data:
                //JAVA JAVA  
                lan === 'Java' ?  
                    lan2 === 'Python' ? 
                        [props.javaPythonPay1state, props.javaPythonPay2state, props.javaPythonPay3state, 
                         props.javaPythonPay4state, props.javaPythonPay5state, props.javaPythonPay6state] : 

                    lan2 === 'C#' ?
                        [props.javaCsharpPay1state, props.javaCsharpPay2state, props.javaCsharpPay3state, 
                         props.javaCsharpPay4state, props.javaCsharpPay5state, props.javaCsharpPay6state] : 

                    lan2 === 'Javascript' ? 
                        [props.javaJavascriptPay1state, props.javaJavascriptPay2state, props.javaJavascriptPay3state, 
                         props.javaJavascriptPay4state, props.javaJavascriptPay5state, props.javaJavascriptPay6state] : [] :
                
                //PYTHON PYTHON
                lan === 'Python' ? 
                    lan2 === 'Java' ? 
                        [props.pythonJavaPay1state, props.pythonJavaPay2state, props.pythonJavaPay3state, 
                         props.pythonJavaPay4state, props.pythonJavaPay5state, props.pythonJavaPay6state] : 
                 
                    lan2 === 'C#' ? 
                        [props.pythonCsharpPay1state, props.pythonCsharpPay2state, props.pythonCsharpPay3state, 
                         props.pythonCsharpPay4state, props.pythonCsharpPay5state, props.pythonCsharpPay6state] : 
                
                    lan2 === 'Javascript' ?
                        [props.pythonJavascriptPay1state, props.pythonJavascriptPay2state, props.pythonJavascriptPay3state, 
                            props.pythonJavascriptPay4state, props.pythonJavascriptPay5state, props.pythonJavascriptPay6state] : [] :
                
                //C# C#
                lan === 'C#' ?
                    lan2 === 'Java' ?
                        [props.cSharpJavaPay1state, props.cSharpJavaPay2state, props.cSharpJavaPay3state, 
                         props.cSharpJavaPay4state, props.cSharpJavaPay5state, props.cSharpJavaPay6state, ] : 

                    lan2 === 'Python' ? 
                        [props.cSharpPythonPay1state, props.cSharpPythonPay2state, props.cSharpPythonPay3state, 
                         props.cSharpPythonPay4state, props.cSharpPythonPay5state, props.cSharpPythonPay6state] : 

                    lan2 === 'Javascript' ? 
                        [props.cSharpJavascriptPay1state, props.cSharpJavascriptPay2state, props.cSharpJavascriptPay3state, 
                         props.cSharpJavascriptPay4state, props.cSharpJavascriptPay5state, props.cSharpJavascriptPay6state] : [] :
                
                //JAVASCRIPT JAVASCRIPT 
                lan === 'Javascript' ? 
                    lan2 === 'Java' ? 
                        [props.javascriptJavaPay1state, props.javascriptJavaPay2state, props.javascriptJavaPay3state, 
                         props.javascriptJavaPay4state, props.javascriptJavaPay5state, props.javascriptJavaPay6state] : 

                    lan2 === 'Python' ?
                        [props.javascriptPythonPay1state, props.javascriptPythonPay2state, props.javascriptPythonPay3state, 
                         props.javascriptPythonPay4state, props.javascriptPythonPay5state, props.javascriptPythonPay6state, ] : 
                    
                    lan2 === 'C#' ? 
                        [props.javascriptCsharpPay1state, props.javascriptCsharpPay2state, props.javascriptCsharpPay3state, 
                         props.javascriptCsharpPay4state, props.javascriptCsharpPay5state, props.javascriptCsharpPay6state, ] : [] : [],


                borderColor: ['blue'],
                backgroundColor: ['#4e73df'],
                pointBackgroundColor: 'blue',
                pointBorderColor: 'blue'
            }
        ]
    }

    const LineOptions = {
        title: {
            display: true, 
            text: 'Pay'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 60000,
                        max: 130000,
                        stepSize: 15000,
                    }
                }
            ]
        }
    }
    //line graph 
    
    const datasetKeyProvider = () => {
        return Math.random();
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (lan === lan2) {
            setOpacity(1)
        }
        else {
            setOpacity(0)
        }

        //java
        if (lan === 'Java' && lan2 === 'Python') {
            props.javaPythonAction()
        }
        else if (lan === 'Java' && lan2 === 'C#') {
            props.javaCsharpAction()
        }
        else if (lan === 'Java' && lan2 === 'Javascript') {
            props.javaJavascriptAction()
        }  
        //java
        //python 
        else if (lan === 'Python' && lan2 === 'Java') {
            props.pythonJavaAction()
        }
        else if (lan === 'Python' && lan2 === 'C#') {
            props.pythonCsharpAction()
        }
        else if (lan === 'Python' && lan2 === 'Javascript') {
            props.pythonJavascriptAction()
        }     
        //python 
        //c#
        else if (lan === 'C#' && lan2 === 'Java') {
            props.cSharpJavaAction()
        }
        else if (lan === 'C#' && lan2 === 'Python') {
            props.cSharpPythonAction()
        }
        else if (lan === 'C#' && lan2 === 'Javascript') {
            props.cSharpJavascriptAction()
        }    
        //c#
        //javascript
        else if (lan === 'Javascript' && lan2 === 'Java') {
            props.javascriptJavaAction()
        }
        else if (lan === 'Javascript' && lan2 === 'Python') {
            props.javascriptPythonAction()
        }
        else if (lan === 'Javascript' && lan2 === 'C#') {
            props.javascriptCsharpAction()
        }
        //javascript

        setDivDisplay('')
        if (repAnim === 0) {
            gsap.from(PayDivAnim.current, {height: '0px', ease: 'easeOut', autoAlpha: 0, duration: 0.7})
            setRepAnim(1);
        }
        else {

        }
        
        setDivDisplay('')
    }

    const handleFirstLanguage = e => {
        e.preventDefault()
        setLan(e.target.value)
    }

    const handleSecondLanguage = e => {
        e.preventDefault()
        setLan2(e.target.value)
    }

    return (
        <div className="page-container">

            {/* LEFT SIDE OF PAGE/ LEFT NAV */}
            <div className="left-nav-container" ref={leftNavAnim}>

                <div className="clicker-container">

                    <div className="inside-clicker-title-container">
                        <h1 ref={leftNavTitle}>Languages</h1>
                    </div>
                    <div className="inside-clicker-div">

                        {/* LANGUAGE BUTTONS */}
                            <div className="clicker-choices" 
                            onClick={() => dispatch({type: 'COMPAREPAGE'})} 
                            style={{ opacity: state.compareButtonOpac }} ref={left1}>
                                Compare 
                            </div>

                            <div className="clicker-choices" 
                            onClick={() => dispatch({type: 'JAVA'})}
                            style={{ opacity: state.javaButtonOpac }} ref={left2}>
                                Java
                            </div>

                            <div className="clicker-choices" 
                            onClick={() => dispatch({type: 'PYTHON'})}
                            style={{ opacity: state.pythonButtonOpac }} ref={left3}>
                                Python
                            </div>

                            <div className="clicker-choices middle-choice-1" 
                            onClick={() => dispatch({type: 'C#'})}
                            style={{ opacity: state.cSharpButtonOpac }} ref={left4}>
                                C#
                            </div>

                            <div className="clicker-choices middle-choice-2" 
                            onClick={() => dispatch({type: 'JAVASCRIPT'})}
                            style={{opacity: state.javascriptButtonOpac }} ref={left5}>
                                Javascript
                            </div>
                        {/* LANGUAGE BUTTONS */}

                    </div>
                
                </div>


            </div>
            {/* LEFT SIDE OF PAGE/ LEFT NAV */}

            {/* RIGHT SIDE OF PAGE/ RIGHT CONTENT */}
            {
                state.languageChosen === 'Java' ? 
                    <div className="right-content-container"><JavaPage/></div> : 
                state.languageChosen === 'Python' ? 
                    <div className="right-content-container"><PythonPage/></div> : 
                state.languageChosen === 'C#' ? 
                    <div className="right-content-container"><CsharpPage/></div> : 
                state.languageChosen === 'Javascript' ? 
                    <div className="right-content-container"><JavascriptPage/></div> :  
            
            <div className="right-content-container">
                {/*<div className="absolute-background"></div>*/}

                {/* FROM VALIDATION  */}
                <form className="top-content-container"
                    onSubmit={handleSubmit} ref={inputButton}>
                    <div className="select-container first-select" >

                        <div className="red-circle-div"></div>

                        <select type='text' 
                            id="languages"
                            list="languages"
                            onChange={handleFirstLanguage}
                            value={lan}
                            >
                            <option></option>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="C#">C#</option>
                            <option value="Javascript">Javascript</option>
                        </select>
                    </div>
                    
                    <div className="compare-button">
                        <button className="compare-button">Compare</button>
                    </div>
                    
                    <div className="select-container second-select">

                        <div className="blue-circle-div"></div>

                        <select type='text'
                            id="languages2"
                            list="languages2"
                            onChange={handleSecondLanguage}
                            value={lan2}>
                            <option ></option>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="C#">C#</option>
                            <option value="Javascript">Javascript</option>
                        </select>
                    </div>
                    
                </form>

                <div className="error" style={{opacity: opacity}}>
                    You can't select the same language
                </div>
                {/* FROM VALIDATION  */}

                {/* First average data boxes*/}
                <div className="first-boxes-container" style={{display: divDisplay}} ref={PayDivAnim}>
                    <div className="small-box-container">
                        <div className="small-box">
                            
                            <div className="red-line"></div>

                            <div className="inside-small-box">
                                <span className="red-text">Average Pay</span>
                            </div>
                            <div className="inside-small-box">
                                <span className="black-text">
                                    {
                                        lan === 'Java' ? 
                                            '$ 94,000' : 
                                        lan === 'Python' ? 
                                            '$ 94,890' : 
                                        lan === 'C#' ? 
                                            '$ 94,400' : 
                                        lan === 'Javascript' ? 
                                            '$ 89,210' : null
                                    }
                                </span>
                            </div>

                        </div>
                    </div>

                    <div className="small-box-container">
                        <div className="small-box">

                            <div className="blue-line"></div>

                            <div className="inside-small-box">
                                <span className="blue-text">Average Pay</span>
                            </div>
                            <div className="inside-small-box">
                                <span className="black-text">
                                    {
                                        lan2 === 'Java' ?
                                            '$ 94,000' : 
                                        lan2 === 'Python' ?
                                            '$ 94,890' : 
                                        lan2 === 'C#' ? 
                                            '$ 94,400' : 
                                        lan2 === 'Javascript' ? 
                                            '$ 89,210' : null
                                    }
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                {/*First average data boxes*/}

                <div className="bottom-content-container" ref={twoDataSets}>
                    <div className="first-row-container">

                        <div className="first-graph-container">
                            <div className="graph-container">
                                <Bar datasetKeyProvider={datasetKeyProvider} data={BarStats} options={BarOptions} />
                            </div>
                        </div>

                        <div className="second-graph-container">
                            <div className="graph-container">
                                <Doughnut datasetKeyProvider={datasetKeyProvider} data={DonutStats} options={DonutOptions} />
                            </div>
                            
                        </div>

                    </div>
                </div>

                <div className="bottom-bottom-content-container" ref={bottomDataSet}>
                    <div className="bar-graph-container">
                        <div className="graph-container">
                            <Line datasetKeyProvider={datasetKeyProvider} data={LineStats} options={LineOptions} />
                        </div>
                    </div>
                </div>
            </div>
            }
            {/* RIGHT SIDE OF PAGE/ RIGHT CONTENT */}
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        

        //JAVA REDUX STATE
            //pay 
            javaRedPay: state.java.redPay,
            javaBluePay: state.java.bluePay,
            //pay
            //java
                javaPay1state: state.java.javaPay1,
                javaPay2state: state.java.javaPay2,
                javaPay3state: state.java.javaPay3,
                javaPay4state: state.java.javaPay4,
                javaPay5state: state.java.javaPay5,
                javaPay6state: state.java.javaPay6,

                javaPop10state: state.java.javaPop10,
            //java
            //python
                javaPythonPay1state: state.java.javaPythonPay1,
                javaPythonPay2state: state.java.javaPythonPay2,
                javaPythonPay3state: state.java.javaPythonPay3,
                javaPythonPay4state: state.java.javaPythonPay4,
                javaPythonPay5state: state.java.javaPythonPay5,
                javaPythonPay6state: state.java.javaPythonPay6,

                javaPythonPop10state: state.java.javaPythonPop10,
            //python
            //c# 
                javaCsharpPay1state: state.java.javaCsharpPay1,
                javaCsharpPay2state: state.java.javaCsharpPay2,
                javaCsharpPay3state: state.java.javaCsharpPay3,
                javaCsharpPay4state: state.java.javaCsharpPay4,
                javaCsharpPay5state: state.java.javaCsharpPay5,
                javaCsharpPay6state: state.java.javaCsharpPay6,

                javaCsharpPop10state: state.java.javaCsharpPop10,
            //c#
            //javascript 
                javaJavascriptPay1state: state.java.javaJavascriptPay1,
                javaJavascriptPay2state: state.java.javaJavascriptPay2,
                javaJavascriptPay3state: state.java.javaJavascriptPay3,
                javaJavascriptPay4state: state.java.javaJavascriptPay4,
                javaJavascriptPay5state: state.java.javaJavascriptPay5,
                javaJavascriptPay6state: state.java.javaJavascriptPay6,

                javaJavascriptPop10state: state.java.javaJavascriptPop10,
            //javascript 
        //JAVA REDUX STATE


        //PYTHON REDUX STATE
            //pay 
                pythonRedPay: state.python.redPay,
                pythonBluePay: state.python.bluePay,
            //pay
            //python
                pythonPay1state: state.python.pythonPay1,
                pythonPay2state: state.python.pythonPay2,
                pythonPay3state: state.python.pythonPay3,
                pythonPay4state: state.python.pythonPay4,
                pythonPay5state: state.python.pythonPay5,
                pythonPay6state: state.python.pythonPay6,

                pythonPop10state: state.python.pythonPop10,
            //python 
            //java 
                pythonJavaPay1state: state.python.pythonJavaPay1,
                pythonJavaPay2state: state.python.pythonJavaPay2,
                pythonJavaPay3state: state.python.pythonJavaPay3,
                pythonJavaPay4state: state.python.pythonJavaPay4,
                pythonJavaPay5state: state.python.pythonJavaPay5,
                pythonJavaPay6state: state.python.pythonJavaPay6,

                pythonJavaPop10state: state.python.pythonJavaPop10,
            //java
            //c#
                pythonCsharpPay1state: state.python.pythonCsharpPay1,
                pythonCsharpPay2state: state.python.pythonCsharpPay2,
                pythonCsharpPay3state: state.python.pythonCsharpPay3,
                pythonCsharpPay4state: state.python.pythonCsharpPay4,
                pythonCsharpPay5state: state.python.pythonCsharpPay5,
                pythonCsharpPay6state: state.python.pythonCsharpPay6,

                pythonCsharpPop10state: state.python.pythonCsharpPop10,
            //c#
            //javascript 
                pythonJavascriptPay1state: state.python.pythonJavascriptPay1,
                pythonJavascriptPay2state: state.python.pythonJavascriptPay2,
                pythonJavascriptPay3state: state.python.pythonJavascriptPay3,
                pythonJavascriptPay4state: state.python.pythonJavascriptPay4,
                pythonJavascriptPay5state: state.python.pythonJavascriptPay5,
                pythonJavascriptPay6state: state.python.pythonJavascriptPay6,

                pythonJavascriptPop10state: state.python.pythonJavascriptPop10,
            //javascript 
        //PYTHON REDUX STATE


        //C# REDUX STATE
            //pay 
                cSharpRedPay: state.csharp.redPay,
                cSharpBluePay: state.csharp.bluePay,
            //pay
            //c# 
                cSharpPay1state: state.csharp.cSharpPay1,
                cSharpPay2state: state.csharp.cSharpPay2,
                cSharpPay3state: state.csharp.cSharpPay3,
                cSharpPay4state: state.csharp.cSharpPay4,
                cSharpPay5state: state.csharp.cSharpPay5,
                cSharpPay6state: state.csharp.cSharpPay6,

                cSharpPop10state: state.csharp.cSharpPop10,
            //c#
            //java
                cSharpJavaPay1state: state.csharp.cSharpJavaPay1,
                cSharpJavaPay2state: state.csharp.cSharpJavaPay2,
                cSharpJavaPay3state: state.csharp.cSharpJavaPay3,
                cSharpJavaPay4state: state.csharp.cSharpJavaPay4,
                cSharpJavaPay5state: state.csharp.cSharpJavaPay5,
                cSharpJavaPay6state: state.csharp.cSharpJavaPay6,

                cSharpJavaPop10state: state.csharp.cSharpJavaPop10,
            //java
            //python 
                cSharpPythonPay1state: state.csharp.cSharpPythonPay1,
                cSharpPythonPay2state: state.csharp.cSharpPythonPay2,
                cSharpPythonPay3state: state.csharp.cSharpPythonPay3,
                cSharpPythonPay4state: state.csharp.cSharpPythonPay4,
                cSharpPythonPay5state: state.csharp.cSharpPythonPay5,
                cSharpPythonPay6state: state.csharp.cSharpPythonPay6,

                cSharpPythonPop10state: state.csharp.cSharpPythonPop10,
            //python
            //javascript
                cSharpJavascriptPay1state: state.csharp.cSharpJavascriptPay1,
                cSharpJavascriptPay2state: state.csharp.cSharpJavascriptPay2,
                cSharpJavascriptPay3state: state.csharp.cSharpJavascriptPay3,
                cSharpJavascriptPay4state: state.csharp.cSharpJavascriptPay4,
                cSharpJavascriptPay5state: state.csharp.cSharpJavascriptPay5,
                cSharpJavascriptPay6state: state.csharp.cSharpJavascriptPay6,

                cSharpJavascriptPop10state: state.csharp.cSharpJavascriptPop10,
            //javascript
        //C# REDUX STATE

        //JAVASCRIPT REDUX STATE 
            //pay 
                javascriptRedPay: state.javascript.redPay,
                javascriptBluePay: state.javascript.bluePay,
            //pay
            //javascript 
                javascriptPay1state: state.javascript.javascriptPay1,
                javascriptPay2state: state.javascript.javascriptPay2,
                javascriptPay3state: state.javascript.javascriptPay3,
                javascriptPay4state: state.javascript.javascriptPay4,
                javascriptPay5state: state.javascript.javascriptPay5,
                javascriptPay6state: state.javascript.javascriptPay6,

                javascriptPop10state: state.javascript.javascriptPop10,
            //javascript 
            //java 
                javascriptJavaPay1state: state.javascript.javascriptJavaPay1,
                javascriptJavaPay2state: state.javascript.javascriptJavaPay2,
                javascriptJavaPay3state: state.javascript.javascriptJavaPay3,
                javascriptJavaPay4state: state.javascript.javascriptJavaPay4,
                javascriptJavaPay5state: state.javascript.javascriptJavaPay5,
                javascriptJavaPay6state: state.javascript.javascriptJavaPay6,

                javascriptJavaPop10state: state.javascript.javascriptJavaPop10,
            //java 
            //python 
                javascriptPythonPay1state: state.javascript.javascriptPythonPay1,
                javascriptPythonPay2state: state.javascript.javascriptPythonPay2,
                javascriptPythonPay3state: state.javascript.javascriptPythonPay3,
                javascriptPythonPay4state: state.javascript.javascriptPythonPay4,
                javascriptPythonPay5state: state.javascript.javascriptPythonPay5,
                javascriptPythonPay6state: state.javascript.javascriptPythonPay6,

                javascriptPythonPop10state: state.javascript.javascriptPythonPop10,
            //python 
            //c# 
                javascriptCsharpPay1state: state.javascript.javascriptCsharpPay1,
                javascriptCsharpPay2state: state.javascript.javascriptCsharpPay2,
                javascriptCsharpPay3state: state.javascript.javascriptCsharpPay3,
                javascriptCsharpPay4state: state.javascript.javascriptCsharpPay4,
                javascriptCsharpPay5state: state.javascript.javascriptCsharpPay5,
                javascriptCsharpPay6state: state.javascript.javascriptCsharpPay6,

                javascriptCsharpPop10state: state.javascript.javascriptCsharpPop10,
            //c# 
        //JAVSCRIPT REDUX STATE
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //java cases 
        javaPythonAction: () => dispatch(javaPythonAction()),
        javaCsharpAction: () => dispatch(javaCsharpAction()),
        javaJavascriptAction: () => dispatch(javaJavascriptAction()),
        //java cases

        //python cases 
        pythonJavaAction: () => dispatch(pythonJavaAction()),
        pythonCsharpAction: () => dispatch(pythonCsharpAction()),
        pythonJavascriptAction: () => dispatch(pythonJavascriptAction()),
        //python cases
        
        //c# cases
        cSharpJavaAction: () => dispatch(cSharpJavaAction()),
        cSharpPythonAction: () => dispatch(cSharpPythonAction()),
        cSharpJavascriptAction: () => dispatch(cSharpJavascriptAction()),
        //c# cases

        //javascript 
        javascriptJavaAction: () => dispatch(javascriptJavaAction()),
        javascriptPythonAction: () => dispatch(javascriptPythonAction()),
        javascriptCsharpAction: () => dispatch(javascriptCsharpAction()),
        //javascript 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Language)
