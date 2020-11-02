import { JAVAPYTHONACTION, JAVACSHARPACTION, JAVAJAVASCRIPTACTION } from './javaTypes'

const initialState = {
    //JAVA JAVA STATE
    javaPay1: 0,
    javaPay2: 0,
    javaPay3: 0,
    javaPay4: 0,
    javaPay5: 0,
    javaPay6: 0,
    javaPay7: 0,
    javaPay8: 0,
    javaPay9: 0,
    javaPay10: 0,

    javaPop1: 0,
    javaPop2: 0,
    javaPop3: 0,
    javaPop4: 0,
    javaPop5: 0,
    javaPop6: 0,
    javaPop7: 0,
    javaPop8: 0,
    javaPop9: 0,
    javaPop10: 0,
    //JAVA JAVA STATE

    //PYTHON PYTHON STATE
    javaPythonPay1: 0,
    javaPythonPay2: 0,
    javaPythonPay3: 0,
    javaPythonPay4: 0,
    javaPythonPay5: 0,
    javaPythonPay6: 0,
    javaPythonPay7: 0,
    javaPythonPay8: 0,
    javaPythonPay9: 0,
    javaPythonPay10: 0,

    javaPythonPop1: 0,
    javaPythonPop2: 0,
    javaPythonPop3: 0,
    javaPythonPop4: 0,
    javaPythonPop5: 0,
    javaPythonPop6: 0,
    javaPythonPop7: 0,
    javaPythonPop8: 0,
    javaPythonPop9: 0,
    javaPythonPop10: 0,
    //PYTHON PYTHON STATE

    //C# C# STATE
    javaCsharpPay1: 0,
    javaCsharpPay2: 0,
    javaCsharpPay3: 0,
    javaCsharpPay4: 0,
    javaCsharpPay5: 0,
    javaCsharpPay6: 0,
    javaCsharpPay7: 0,
    javaCsharpPay8: 0,
    javaCsharpPay9: 0,
    javaCsharpPay10: 0,

    javaCsharpPop1: 0,
    javaCsharpPop2: 0,
    javaCsharpPop3: 0,
    javaCsharpPop4: 0,
    javaCsharpPop5: 0,
    javaCsharpPop6: 0,
    javaCsharpPop7: 0,
    javaCsharpPop8: 0,
    javaCsharpPop9: 0,
    javaCsharpPop10: 0,
    //C# C# STATE

    //JAVASCRIPT STATE
    javaJavascriptPay1: 0,
    javaJavascriptPay2: 0,
    javaJavascriptPay3: 0,
    javaJavascriptPay4: 0,
    javaJavascriptPay5: 0,
    javaJavascriptPay6: 0,
    javaJavascriptPay7: 0,
    javaJavascriptPay8: 0,
    javaJavascriptPay9: 0,
    javaJavascriptPay10: 0,

    javaJavascriptPop1: 0,
    javaJavascriptPop2: 0,
    javaJavascriptPop3: 0,
    javaJavascriptPop4: 0,
    javaJavascriptPop5: 0,
    javaJavascriptPop6: 0,
    javaJavascriptPop7: 0,
    javaJavascriptPop8: 0,
    javaJavascriptPop9: 0,
    javaJavascriptPop10: 0,
    //JAVASCRIPT STATE

    //RED
    redPay: 0,
    //RED

    //BLUE 
    bluePay: 0,
    //BLUE 
}

export const javaReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case JAVAPYTHONACTION: 
            return {
                ...state,
                //pay
                redPay: 94000,
                /*python*/bluePay: 94890,
                redPop: 26.5,
                //pay 

                //java 
                javaPay1: 100000,
                javaPay2: 101000,
                javaPay3: 112000,
                javaPay4: 121000,
                javaPay5: 120000,
                javaPay6: 107000,
                javaPay7: 102000,
                javaPay8: 101000,
                javaPay9: 103000,
                javaPay10: 94000,

                javaPop1: 29200,
                javaPop2: 28100,
                javaPop3: 26700,
                javaPop4: 29700,
                javaPop5: 28600,
                javaPop6: 27100,
                javaPop7: 25400,
                javaPop8: 24500,
                javaPop9: 23500,
                javaPop10: 22300,
                //java

                //python 
                javaPythonPay1: 84600,
                javaPythonPay2: 86000,
                javaPythonPay3: 85000,
                javaPythonPay4: 87000,
                javaPythonPay5: 90000,
                javaPythonPay6: 91000,
                javaPythonPay7: 80300,
                javaPythonPay8: 118000,
                javaPythonPay9: 107000,
                javaPythonPay10: 120000,

                javaPythonPop1: 10800,
                javaPythonPop2: 11800,
                javaPythonPop3: 12500,
                javaPythonPop4: 13100,
                javaPythonPop5: 13200,
                javaPythonPop6: 14100,
                javaPythonPop7: 15500,
                javaPythonPop8: 19000,
                javaPythonPop9: 21700,
                javaPythonPop10: 24200,
                //python 
            }
        case JAVACSHARPACTION: 
            return {
                ...state,

                //pay
                redPay: 94000,
                /*C#*/bluePay: 94400,
                //pay 
                
                //java
                javaPay1: 100000,
                javaPay2: 101000,
                javaPay3: 112000,
                javaPay4: 121000,
                javaPay5: 120000,
                javaPay6: 107000,
                javaPay7: 102000,
                javaPay8: 101000,
                javaPay9: 103000,
                javaPay10: 94000,

                javaPop1: 29200,
                javaPop2: 28100,
                javaPop3: 26700,
                javaPop4: 29700,
                javaPop5: 28600,
                javaPop6: 27100,
                javaPop7: 25400,
                javaPop8: 24500,
                javaPop9: 23500,
                javaPop10: 22300,
                //java

                //c#
                javaCsharpPay1: 101000,
                javaCsharpPay2: 99000,
                javaCsharpPay3: 95100,
                javaCsharpPay4: 97000,
                javaCsharpPay5: 89700,
                javaCsharpPay6: 95200,
                javaCsharpPay7: 92000,
                javaCsharpPay8: 83000,
                javaCsharpPay9: 89000,
                javaCsharpPay10: 103000,

                javaCsharpPop1: 9300,
                javaCsharpPop2: 10300,
                javaCsharpPop3: 11100,
                javaCsharpPop4: 11000,
                javaCsharpPop5: 10400,
                javaCsharpPop6: 9800,
                javaCsharpPop7: 89200,
                javaCsharpPop8: 8800,
                javaCsharpPop9: 8600,
                javaCsharpPop10: 8400,
                //c#
            }
        case JAVAJAVASCRIPTACTION: 
            return {
                ...state,

                //pay
                redPay: 94000,
                /*javascript */bluePay: 89210,
                //pay 

                //java
                javaPay1: 100000,
                javaPay2: 101000,
                javaPay3: 112000,
                javaPay4: 121000,
                javaPay5: 120000,
                javaPay6: 107000,
                javaPay7: 102000,
                javaPay8: 101000,
                javaPay9: 103000,
                javaPay10: 94000,

                javaPop1: 29200,
                javaPop2: 28100,
                javaPop3: 26700,
                javaPop4: 29700,
                javaPop5: 28600,
                javaPop6: 27100,
                javaPop7: 25400,
                javaPop8: 24500,
                javaPop9: 23500,
                javaPop10: 22300,
                //java

                //javascript 
                javaJavascriptPay1: 68000,
                javaJavascriptPay2: 67800,
                javaJavascriptPay3: 70000,
                javaJavascriptPay4: 85000,
                javaJavascriptPay5: 82300,
                javaJavascriptPay6: 87000,
                javaJavascriptPay7: 99000,
                javaJavascriptPay8: 109000,
                javaJavascriptPay9: 107000,
                javaJavascriptPay10: 117000,
            
                javaJavascriptPop1: 20200,
                javaJavascriptPop2: 20500,
                javaJavascriptPop3: 20700,
                javaJavascriptPop4: 21200,
                javaJavascriptPop5: 21600,
                javaJavascriptPop6: 22000,
                javaJavascriptPop7: 22600,
                javaJavascriptPop8: 22900,
                javaJavascriptPop9: 23000,
                javaJavascriptPop10: 23100,
                //javascript 
            }
        default: return {state}
    }
}

export default javaReducer

/*const Python = {
    Jobs: [],
    Pay: ['84,600', '86,000', '85,000', '87,000', '90,000', '91,000', '80,300', '118,000', '107,000', '120,000'],
    Popularity: ['10.8', '11.8', '12.5', '13.1', '13.2', '14.1', '15.5', '19.0', '21.7', '24.2'],
}

const Javascript = {
    Jobs: [],
    Pay: ['68,000', '67,800', '70,000', '85,000', '82,300', '87,000', '99,000', '109,000', '107,000', '117,000'],
    Popularity: ['20.2', '20.5', '20.7', '21.2', '21.6', '22.0', '22.6', '22.9', '23.0', '23.1']
}

const Java = {
    Jobs: [],
    Pay: ['100,000', '101,000', '112,000', '121,000', '120,000', '107,000', '102,000', '101,000', '103,000', '94,000'],
    Popularity: ['29.2', '28.1', '26.7', '29.7', '28.6', '27.1', '25.4', '24.5', '23.5', '22.3']
}

const cSharp = {
    Jobs: [],
    Pay: ['101,000', '99,000', '95,100', '97,000', '89,700', '95,200', '92,000', '83,000', '89,000', '103,000'],
    Popularity: ['9.3', '10.3', '11.1', '11.0', '10.4', '9.8', '9.2', '8.8', '8.6', '8.4']
}
   */