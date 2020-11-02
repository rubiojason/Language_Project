import React, { useRef, useEffect } from 'react'
import { Line, Bar} from 'react-chartjs-2'
import { javaPythonAction } from '../redux'
import { connect } from 'react-redux'
import { gsap } from 'gsap/all';

function JavaPage(props) {

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
    const JavaLinePay = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020], 
        datasets: [
            {
                label: 'Java',

                data: [props.javaPay1, props.javaPay2, props.javaPay3, 
                       props.javaPay4, props.javaPay5, props.javaPay6],

                borderColor: ['rgb(210, 0, 0)'],
                backgroundColor: ['rgb(240, 65, 65)'],
                pointBackgroundColor: 'rgb(210, 0, 0)',
                pointBorderColor: 'red',
            }
        ]
    }

    const JavaLinePayOptions = {
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
    const JavaBarPop = {
        labels: [2010, 2012, 2014, 2016, 2018, 2020],
        datasets: [
            {
                label: 'Java',

                data: [props.javaPop1, props.javaPop2, props.javaPop3, 
                 props.javaPop4, props.javaPop5, props.javaPop6], 

                borderColor: ['#4e73df'],
                backgroundColor: ['#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df', '#4e73df'],
                pointBackgroundColor: '#4e73df',
                pointBorderColor: '#4e73df',
            }
        ]
    }

    const JavaBarPopOptions = {
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
        props.javaPythonAction()

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
                        Java
                    </div>
                </div>
            </div>

            <div className="description-container">
                <div className="inside-description-container">
                    <div className="description" ref={paragraph} >
                        Java is a high-level programming language developed by Sun Microsystems. 
                        It was originally designed for developing programs for set-top boxes and 
                        handheld devices, but later became a popular choice for creating web 
                        applications. The Java syntax is similar to C++, but is strictly an 
                        object-oriented programming language.
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
                                        '$ 94,000'
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
                                        '26.5 k' 
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
                            Over the last decade, the pay for Java Developers peaked midway through the 
                            decade. Ever since 2018, the average pay has fallen into 2020. 
                        </p>
                        
                    </div>

                    <div className="second-stat" ref={graph}>
                        <div className="java-graph-container">
                            <Line datasetKeyProvider={datasetKeyProvider} data={JavaLinePay} options={JavaLinePayOptions}/>
                        </div>
                    </div>
                </div>

                <div className="first-stat-container">
                    <div className="first-stat" ref={secondParagraph2}>
                        <p>
                            The demand and popularity for Java has remained pretty steady throughout the decade. 
                            Companies demand for Java Developers is around the same now than how it was in 2010.
                        </p> 
                    </div>

                    <div className="second-stat" ref={graph2}>
                        <div className="java-graph-container" >
                            <Bar datasetKeyProvider={datasetKeyProvider} data={JavaBarPop} options={JavaBarPopOptions} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        
        javaPay: state.java.redPay,
        javaPop: state.java.redPop,

        javaPay1: state.java.javaPay1,
        javaPay2: state.java.javaPay2,
        javaPay3: state.java.javaPay3,
        javaPay4: state.java.javaPay4,
        javaPay5: state.java.javaPay5,
        javaPay6: state.java.javaPay6,
        javaPay7: state.java.javaPay7,
        javaPay8: state.java.javaPay8,
        javaPay9: state.java.javaPay9,
        javaPay10: state.java.javaPay10,

        javaPop1: state.java.javaPop1,
        javaPop2: state.java.javaPop2,
        javaPop3: state.java.javaPop3,
        javaPop4: state.java.javaPop4,
        javaPop5: state.java.javaPop5,
        javaPop6: state.java.javaPop6,
        javaPop7: state.java.javaPop7,
        javaPop8: state.java.javaPop8,
        javaPop9: state.java.javaPop9,
        javaPop10: state.java.javaPop10, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        javaPythonAction: () => dispatch(javaPythonAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(JavaPage)
