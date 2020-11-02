import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Line, Bar} from 'react-chartjs-2'
import { javascriptPythonAction } from '../redux'
import { gsap } from 'gsap/all';

function JavascriptPage(props) {

    //useRef 
    const title = useRef(null);
    const paragraph = useRef(null);
    const boxes = useRef(null);
        
    const secondParagraph = useRef(null);
    const secondParagraph2 = useRef(null);
        
    const graph = useRef(null);
    const graph2 = useRef(null);
    //useRef

    //line graph
    const JavascriptLinePay = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020], 
        datasets: [
            {
                label: 'Javascript',

                data: [props.javascriptPay1, props.javascriptPay2, props.javascriptPay3, 
                    props.javascriptPay4, props.javascriptPay5, props.javascriptPay6],

                borderColor: ['rgb(210, 0, 0)'],
                backgroundColor: ['rgb(240, 65, 65)'],
                pointBackgroundColor: 'rgb(210, 0, 0)',
                pointBorderColor: 'red',
            }
        ]
    }

    const JavascriptLinePayOptions = {
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
                        stepSize: 25000,
                    }
                }
            ]
        }
    }
    //line graph 

    //bar graph 
    const JavascriptBarPop = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020],
        datasets: [
            {
                label: 'Javascript',

                data: [props.javascriptPop1, props.javascriptPop2, props.javascriptPop3, 
                props.javascriptPop4, props.javascriptPop5, props.javascriptPop6], 

                borderColor: ['#4e73df'],
                backgroundColor: ['#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df'],
                pointBackgroundColor: '#4e73df',
                pointBorderColor: '#4e73df',
            }
        ]
    }

    const JavascriptBarPopOptions = {
        title: {
            display: true, 
            text: 'Popularity'
        },
        scales: {
            yAxes: [
                {
                    ticks: {
                        min: 6000,
                        max: 35000,
                        stepSize: 8000,
                    }
                }
            ]
        }
    }
    //bar graph 

    //functions 
    const datasetKeyProvider = () => {
        return Math.random()
    }
    //functions 

    //useEffect 
    useEffect(() => {
        props.javascriptPythonAction()

        gsap.from(title.current, {y: -10, opacity: 0, duration: 0.8, delay: 0.5})

        gsap.from(paragraph.current, {x: -30, opacity: 0, duration: 1, delay: 0.7})

        gsap.from(boxes.current, {height: '0px', opacity: 0, duration: 0.5, delay: 1})

        gsap.from([secondParagraph.current, secondParagraph2.current], {x: -30, opacity: 0, duration: 1.3, delay: 1.3})

        gsap.from([graph.current, graph2.current], {opacity: 0, duration: 1.3, delay: 1.5})
    }, [paragraph, boxes])
    //useEffect

    return (
        <div className='java-page'>
            <div className="language-container">
                <div className="inside-language-container">
                    <div className="java-title" ref={title}>
                        Javascript
                    </div>
                </div>
            </div>

            <div className="description-container">
                <div className="inside-description-container">
                    <div className="description" ref={paragraph}>
                        JavaScript is a lightweight, interpreted, object-oriented
                        language with first-class functions, and is best known as
                        the scripting language for Web pages, but it's used in 
                        many non-browser environments as well. It is a prototype-based, 
                        multi-paradigm scripting language that is dynamic, and supports 
                        object-oriented, imperative, and functional programming styles.
                    </div>
                </div>
            </div>

            <div className="first-boxes-container" ref={boxes}>
                <div className="small-box-container">
                    <div className="small-box">
                                
                        <div className="red-line"></div>

                        <div className="inside-small-box">
                            <span className="red-text">Pay</span>
                        </div>
                        <div className="inside-small-box">
                            <span className="black-text">
                                {
                                    '$ 89,210' 
                                }
                            </span>
                        </div>

                    </div>
                </div>

                <div className="small-box-container">
                    <div className="small-box">
                                
                        <div className="blue-line"></div>

                        <div className="inside-small-box">
                            <span className="blue-text">Popularity</span>
                        </div>
                        <div className="inside-small-box">
                            <span className="black-text">
                                {
                                    '13.5 k' 
                                }
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="stats-container">
                
                <div className="first-stat-container">
                    <div className="first-stat" ref={secondParagraph}>
                        <p>
                            The demand for javascript developers has increased over the last 
                            decade. Mainly the demand comes from web development itself.
                        </p>
                        
                    </div>

                    <div className="second-stat" ref={graph}>
                        <div className="java-graph-container">
                            <Line datasetKeyProvider={datasetKeyProvider} data={JavascriptLinePay} options={JavascriptLinePayOptions}/>
                        </div>
                    </div>
                </div>

                <div className="first-stat-container">
                    <div className="first-stat" ref={secondParagraph2}>
                        <p>
                            The popularity and demand for javascript developers varies from React JS, Vue Js,
                            and Angular, atleast that's the demand. This has remained the same throughout the 
                            last decade.
                        </p> 
                    </div>

                    <div className="second-stat" ref={graph2}>
                        <div className="java-graph-container">
                            <Bar datasetKeyProvider={datasetKeyProvider} data={JavascriptBarPop} options={JavascriptBarPopOptions} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        )
    }

const mapStateToProps = state => {
    return {
        javascriptPay1: state.javascript.javascriptPay1,
        javascriptPay2: state.javascript.javascriptPay2,
        javascriptPay3: state.javascript.javascriptPay3,
        javascriptPay4: state.javascript.javascriptPay4,
        javascriptPay5: state.javascript.javascriptPay5,
        javascriptPay6: state.javascript.javascriptPay6,
        javascriptPay7: state.javascript.javascriptPay7,
        javascriptPay8: state.javascript.javascriptPay8,
        javascriptPay9: state.javascript.javascriptPay9,
        javascriptPay10: state.javascript.javascriptPay10,

        javascriptPop1: state.javascript.javascriptPop1,
        javascriptPop2: state.javascript.javascriptPop2,
        javascriptPop3: state.javascript.javascriptPop3,
        javascriptPop4: state.javascript.javascriptPop4,
        javascriptPop5: state.javascript.javascriptPop5,
        javascriptPop6: state.javascript.javascriptPop6,
        javascriptPop7: state.javascript.javascriptPop7,
        javascriptPop8: state.javascript.javascriptPop8,
        javascriptPop9: state.javascript.javascriptPop9,
        javascriptPop10: state.javascript.javascriptPop10, 
    }
}

const mapDispatchToProps = dispatch => {
return {
    javascriptPythonAction: () => dispatch(javascriptPythonAction())
}
}

export default connect(mapStateToProps, mapDispatchToProps)(JavascriptPage)
