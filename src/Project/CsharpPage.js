import React, { useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import { Line, Bar} from 'react-chartjs-2'
import { cSharpPythonAction } from '../redux'
import { gsap } from 'gsap/all';

function CsharpPage(props) {

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
    const cSharpLinePay = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020], 
        datasets: [
            {
                label: 'C#',

                data: [props.cSharpPay1, props.cSharpPay2, props.cSharpPay3, 
                       props.cSharpPay4, props.cSharpPay5, props.cSharpPay6],

                borderColor: ['rgb(210, 0, 0)'],
                backgroundColor: ['rgb(240, 65, 65)'],
                pointBackgroundColor: 'rgb(210, 0, 0)',
                pointBorderColor: 'red',
            }
        ]
    }

    const cSharpLinePayOptions = {
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
    const cSharpBarPop = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020],
        datasets: [
            {
                label: 'C#',

                data: [props.cSharpPop1, props.cSharpPop2, props.cSharpPop3, 
                 props.cSharpPop4, props.cSharpPop5, props.cSharpPop6], 

                borderColor: ['#4e73df'],
                backgroundColor: ['#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df'],
                pointBackgroundColor: '#4e73df',
                pointBorderColor: '#4e73df',
            }
        ]
    }

    const cSharpBarPopOptions = {
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
        props.cSharpPythonAction()

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
                        C#
                    </div>
                </div>
            </div>

            <div className="description-container">
                <div className="inside-description-container">
                    <div className="description" ref={paragraph}>
                        C# is a modern, general-purpose, object-oriented programming language 
                        developed by Microsoft and approved by European Computer Manufacturers 
                        Association and International Standards Organization. C# 
                        was developed by Anders Hejlsberg and his team during the development
                        of .Net Framework.
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
                                    '$ 94,400' 
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
                                    '9.7 k' 
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
                            The pay for C# developers has remained steady and constant over the 
                            decade. 
                        </p>
                        
                    </div>

                    <div className="second-stat" ref={graph}>
                        <div className="java-graph-container">
                            <Line datasetKeyProvider={datasetKeyProvider} data={cSharpLinePay} options={cSharpLinePayOptions}/>
                        </div>
                    </div>
                </div>

                <div className="first-stat-container">
                    <div className="first-stat" ref={secondParagraph2}>
                        <p>
                            Although the demand for C# developers isn't as high as something like a 
                            Java or Python Developer, it is still one of the best technologes to use 
                            in some parts of the US. 
                        </p> 
                    </div>

                    <div className="second-stat" ref={graph2}>
                        <div className="java-graph-container">
                            <Bar datasetKeyProvider={datasetKeyProvider} data={cSharpBarPop} options={cSharpBarPopOptions} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cSharpPay1: state.csharp.cSharpPay1,
        cSharpPay2: state.csharp.cSharpPay2,
        cSharpPay3: state.csharp.cSharpPay3,
        cSharpPay4: state.csharp.cSharpPay4,
        cSharpPay5: state.csharp.cSharpPay5,
        cSharpPay6: state.csharp.cSharpPay6,
        cSharpPay7: state.csharp.cSharpPay7,
        cSharpPay8: state.csharp.cSharpPay8,
        cSharpPay9: state.csharp.cSharpPay9,
        cSharpPay10: state.csharp.cSharpPay10,

        cSharpPop1: state.csharp.cSharpPop1,
        cSharpPop2: state.csharp.cSharpPop2,
        cSharpPop3: state.csharp.cSharpPop3,
        cSharpPop4: state.csharp.cSharpPop4,
        cSharpPop5: state.csharp.cSharpPop5,
        cSharpPop6: state.csharp.cSharpPop6,
        cSharpPop7: state.csharp.cSharpPop7,
        cSharpPop8: state.csharp.cSharpPop8,
        cSharpPop9: state.csharp.cSharpPop9,
        cSharpPop10: state.csharp.cSharpPop10, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cSharpPythonAction: () => dispatch(cSharpPythonAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CsharpPage)
