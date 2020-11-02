import { CSHARPJAVAACTION, CSHARPPYTHONACTION, CSHARPJAVASCRIPTACTION } from './c#Types'

const initialState = {
    //C# C# STATE
    cSharpPay1: 0,
    cSharpPay2: 0,
    cSharpPay3: 0,
    cSharpPay4: 0,
    cSharpPay5: 0,
    cSharpPay6: 0,
    cSharpPay7: 0,
    cSharpPay8: 0,
    cSharpPay9: 0,
    cSharpPay10: 0,

    cSharpPop1: 0,
    cSharpPop2: 0,
    cSharpPop3: 0,
    cSharpPop4: 0,
    cSharpPop5: 0,
    cSharpPop6: 0,
    cSharpPop7: 0,
    cSharpPop8: 0,
    cSharpPop9: 0,
    cSharpPop10: 0,
    //C# C# STATE

    //JAVA JAVA STATE
    cSharpJavaPay1: 0,
    cSharpJavaPay2: 0,
    cSharpJavaPay3: 0,
    cSharpJavaPay4: 0,
    cSharpJavaPay5: 0,
    cSharpJavaPay6: 0,
    cSharpJavaPay7: 0,
    cSharpJavaPay8: 0,
    cSharpJavaPay9: 0,
    cSharpJavaPay10: 0,

    cSharpJavaPop1: 0,
    cSharpJavaPop2: 0,
    cSharpJavaPop3: 0,
    cSharpJavaPop4: 0,
    cSharpJavaPop5: 0,
    cSharpJavaPop6: 0,
    cSharpJavaPop7: 0,
    cSharpJavaPop8: 0,
    cSharpJavaPop9: 0,
    cSharpJavaPop10: 0,
    //JAVA JAVA STATE

    //PYTHON PYTHON STATE
    cSharpPythonPay1: 0,
    cSharpPythonPay2: 0,
    cSharpPythonPay3: 0,
    cSharpPythonPay4: 0,
    cSharpPythonPay5: 0,
    cSharpPythonPay6: 0,
    cSharpPythonPay7: 0,
    cSharpPythonPay8: 0,
    cSharpPythonPay9: 0,
    cSharpPythonPay10: 0,

    cSharpPythonPop1: 0,
    cSharpPythonPop2: 0,
    cSharpPythonPop3: 0,
    cSharpPythonPop4: 0,
    cSharpPythonPop5: 0,
    cSharpPythonPop6: 0,
    cSharpPythonPop7: 0,
    cSharpPythonPop8: 0,
    cSharpPythonPop9: 0,
    cSharpPythonPop10: 0,
    //PYTHON PYTHON STATE

    //JAVASCRIPT STATE
    cSharpJavascriptPay1: 0,
    cSharpJavascriptPay2: 0,
    cSharpJavascriptPay3: 0,
    cSharpJavascriptPay4: 0,
    cSharpJavascriptPay5: 0,
    cSharpJavascriptPay6: 0,
    cSharpJavascriptPay7: 0,
    cSharpJavascriptPay8: 0,
    cSharpJavascriptPay9: 0,
    cSharpJavascriptPay10: 0,

    cSharpJavascriptPop1: 0,
    cSharpJavascriptPop2: 0,
    cSharpJavascriptPop3: 0,
    cSharpJavascriptPop4: 0,
    cSharpJavascriptPop5: 0,
    cSharpJavascriptPop6: 0,
    cSharpJavascriptPop7: 0,
    cSharpJavascriptPop8: 0,
    cSharpJavascriptPop9: 0,
    cSharpJavascriptPop10: 0,
    //JAVASCRIPT STATE

    redPay: 0,
    bluePay: 0,
}

const cSharpReducer = (state = initialState, action) => {
    switch(action.type) {
        case CSHARPJAVAACTION: 
            return {

                redPay: 94400,
                bluePay: 94000,

                //c#
                cSharpPay1: 101000,
                cSharpPay2: 99000,
                cSharpPay3: 95100,
                cSharpPay4: 97000,
                cSharpPay5: 89700,
                cSharpPay6: 95200,
                cSharpPay7: 92000,
                cSharpPay8: 83000,
                cSharpPay9: 89000,
                cSharpPay10: 103000,

                cSharpPop1: 9300,
                cSharpPop2: 10300,
                cSharpPop3: 11100,
                cSharpPop4: 11000,
                cSharpPop5: 10400,
                cSharpPop6: 9800,
                cSharpPop7: 9200,
                cSharpPop8: 8800,
                cSharpPop9: 8600,
                cSharpPop10: 8400,
                //c#

                //java
                cSharpJavaPay1: 100000,
                cSharpJavaPay2: 101000,
                cSharpJavaPay3: 112000,
                cSharpJavaPay4: 121000,
                cSharpJavaPay5: 120000,
                cSharpJavaPay6: 107000,
                cSharpJavaPay7: 102000,
                cSharpJavaPay8: 101000,
                cSharpJavaPay9: 103000,
                cSharpJavaPay10: 94000,

                cSharpJavaPop1: 29200,
                cSharpJavaPop2: 28100,
                cSharpJavaPop3: 26700,
                cSharpJavaPop4: 29700,
                cSharpJavaPop5: 28600,
                cSharpJavaPop6: 27100,
                cSharpJavaPop7: 25400,
                cSharpJavaPop8: 24500,
                cSharpJavaPop9: 23500,
                cSharpJavaPop10: 22300,
                //java
            }
        case CSHARPPYTHONACTION: 
            return {
                ...state,
                //c# 

                redPay: 94400,
                bluePay: 94890,

                cSharpPay1: 101000,
                cSharpPay2: 99000,
                cSharpPay3: 95100,
                cSharpPay4: 97000,
                cSharpPay5: 89700,
                cSharpPay6: 95200,
                cSharpPay7: 92000,
                cSharpPay8: 83000,
                cSharpPay9: 89000,
                cSharpPay10: 103000,

                cSharpPop1: 9300,
                cSharpPop2: 10300,
                cSharpPop3: 11100,
                cSharpPop4: 11000,
                cSharpPop5: 10400,
                cSharpPop6: 9800,
                cSharpPop7: 89200,
                cSharpPop8: 8800,
                cSharpPop9: 8600,
                cSharpPop10: 8400,
                //c#

                //python 
                cSharpPythonPay1: 84600,
                cSharpPythonPay2: 86000,
                cSharpPythonPay3: 85000,
                cSharpPythonPay4: 87000,
                cSharpPythonPay5: 90000,
                cSharpPythonPay6: 91000,
                cSharpPythonPay7: 80300,
                cSharpPythonPay8: 118000,
                cSharpPythonPay9: 107000,
                cSharpPythonPay10: 120000,

                cSharpPythonPop1: 10800,
                cSharpPythonPop2: 11800,
                cSharpPythonPop3: 12500,
                cSharpPythonPop4: 13100,
                cSharpPythonPop5: 13200,
                cSharpPythonPop6: 14100,
                cSharpPythonPop7: 15500,
                cSharpPythonPop8: 19000,
                cSharpPythonPop9: 21700,
                cSharpPythonPop10: 24200,
                //python
            }
        case CSHARPJAVASCRIPTACTION: 
            return {
                ...state,

                redPay: 94400,
                bluePay: 89210,

                //c#
                cSharpPay1: 101000,
                cSharpPay2: 99000,
                cSharpPay3: 95100,
                cSharpPay4: 97000,
                cSharpPay5: 89700,
                cSharpPay6: 95200,
                cSharpPay7: 92000,
                cSharpPay8: 83000,
                cSharpPay9: 89000,
                cSharpPay10: 103000,

                cSharpPop1: 9300,
                cSharpPop2: 10300,
                cSharpPop3: 11100,
                cSharpPop4: 11000,
                cSharpPop5: 10400,
                cSharpPop6: 9800,
                cSharpPop7: 89200,
                cSharpPop8: 8800,
                cSharpPop9: 8600,
                cSharpPop10: 8400,
                //c# 

                //javascript 
                cSharpJavascriptPay1: 68000,
                cSharpJavascriptPay2: 67800,
                cSharpJavascriptPay3: 70000,
                cSharpJavascriptPay4: 85000,
                cSharpJavascriptPay5: 82300,
                cSharpJavascriptPay6: 87000,
                cSharpJavascriptPay7: 99000,
                cSharpJavascriptPay8: 109000,
                cSharpJavascriptPay9: 107000,
                cSharpJavascriptPay10: 117000,
            
                cSharpJavascriptPop1: 20200,
                cSharpJavascriptPop2: 20500,
                cSharpJavascriptPop3: 20700,
                cSharpJavascriptPop4: 21200,
                cSharpJavascriptPop5: 21600,
                cSharpJavascriptPop6: 22000,
                cSharpJavascriptPop7: 22600,
                cSharpJavascriptPop8: 22900,
                cSharpJavascriptPop9: 23000,
                cSharpJavascriptPop10: 23100,
                //javascript 
            }
        default: return {state}
    }
}

export default cSharpReducer

/*const cSharp = {
    Jobs: [],
    Pay: ['101,000', '99,000', '95,100', '97,000', '89,700', '95,200', '92,000', '83,000', '89,000', '103,000'],
    Popularity: ['9.3', '10.3', '11.1', '11.0', '10.4', '9.8', '9.2', '8.8', '8.6', '8.4']*/