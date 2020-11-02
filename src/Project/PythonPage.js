import React, { useRef, useEffect } from 'react'
import { Line, Bar} from 'react-chartjs-2'
import { pythonJavaAction } from '../redux'
import { connect } from 'react-redux'
import { gsap } from 'gsap/all';

function PythonPage(props) {

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
    const PythonLinePay = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020], 
        datasets: [
            {
                label: 'Python',

                data: [props.pythonPay1, props.pythonPay2, props.pythonPay3, 
                    props.pythonPay4, props.pythonPay5, props.pythonPay6],

                borderColor: ['rgb(210, 0, 0)'],
                backgroundColor: ['rgb(240, 65, 65)'],
                pointBackgroundColor: 'rgb(210, 0, 0)',
                pointBorderColor: 'red',
            }
        ]
    }

    const PythonLinePayOptions = {
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
    const PythonBarPop = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020],
        datasets: [
            {
                label: 'Python',

                data: [props.pythonPop1, props.pythonPop2, props.pythonPop3, 
                props.pythonPop4, props.pythonPop5, props.pythonPop6], 

                borderColor: ['#4e73df'],
                backgroundColor: ['#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df'],
                pointBackgroundColor: '#4e73df',
                pointBorderColor: '#4e73df',
            }
        ]
    }

    const PythonBarPopOptions = {
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
        props.pythonJavaAction()

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
                    Python
                </div>
            </div>
        </div>

        <div className="description-container">
            <div className="inside-description-container">
                <div className="description" ref={paragraph}>
                    Python is an interpreted, object-oriented, high-level programming 
                    language with dynamic semantics. Python's simple, easy to learn 
                    syntax emphasizes readability and therefore reduces the cost of 
                    program maintenance. Python supports modules and packages, which 
                    encourages program modularity and code reuse.
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
                                '$ 94,890' 
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
                                '15.5 k' 
                            }
                        </span>
                    </div>

                </div>
            </div>
        </div>

        <div className="stats-container">
            
            <div className="first-stat-container" > 
                <div className="first-stat" ref={secondParagraph}>
                    <p>
                        This language mainly focuses on jobs like Data Science and AI. 
                        While they do make a lot of money, the python developers/ software 
                        developers don't. 
                    </p>
                    
                </div>

                <div className="second-stat" ref={graph}>
                    <div className="java-graph-container" >
                        <Line datasetKeyProvider={datasetKeyProvider} data={PythonLinePay} options={PythonLinePayOptions}/>
                    </div>
                </div>
            </div>

            <div className="first-stat-container">
                <div className="first-stat" ref={secondParagraph2}>
                    <p>
                        The demand for Python jobs such as Data Science and Machin Learning, has rose 
                        ever since the beginning of the last decade.               
                    </p> 
                </div>

                <div className="second-stat" ref={graph2}>
                    <div className="java-graph-container" >
                        <Bar datasetKeyProvider={datasetKeyProvider} data={PythonBarPop} options={PythonBarPopOptions} />
                    </div>
                </div>
            </div>

        </div>
    </div>
)
}


const mapStateToProps = state => {
return {
    pythonPay: state.python.pythonPay,
    pythonPop: state.python.pythonPop,

    pythonPay1: state.python.pythonPay1,
    pythonPay2: state.python.pythonPay2,
    pythonPay3: state.python.pythonPay3,
    pythonPay4: state.python.pythonPay4,
    pythonPay5: state.python.pythonPay5,
    pythonPay6: state.python.pythonPay6,
    pythonPay7: state.python.pythonPay7,
    pythonPay8: state.python.pythonPay8,
    pythonPay9: state.python.pythonPay9,
    pythonPay10: state.python.pythonPay10,

    pythonPop1: state.python.pythonPop1,
    pythonPop2: state.python.pythonPop2,
    pythonPop3: state.python.pythonPop3,
    pythonPop4: state.python.pythonPop4,
    pythonPop5: state.python.pythonPop5,
    pythonPop6: state.python.pythonPop6,
    pythonPop7: state.python.pythonPop7,
    pythonPop8: state.python.pythonPop8,
    pythonPop9: state.python.pythonPop9,
    pythonPop10: state.python.pythonPop10, 
}
}

const mapDispatchToProps = dispatch => {
return {
    pythonJavaAction: () => dispatch(pythonJavaAction())
}
}


export default connect(mapStateToProps, mapDispatchToProps)(PythonPage)
