import { JAVASCRIPTJAVAACTION, JAVASCRIPTPYTHONACTION, JAVASCRIPTCSHARPACTION } from './javascriptTypes'

const initialState = {
    //JAVASCRIPT STATE
    javascriptPay1: 0,
    javascriptPay2: 0,
    javascriptPay3: 0,
    javascriptPay4: 0,
    javascriptPay5: 0,
    javascriptPay6: 0,
    javascriptPay7: 0,
    javascriptPay8: 0,
    javascriptPay9: 0,
    javascriptPay10: 0,

    javascriptPop1: 0,
    javascriptPop2: 0,
    javascriptPop3: 0,
    javascriptPop4: 0,
    javascriptPop5: 0,
    javascriptPop6: 0,
    javascriptPop7: 0,
    javascriptPop8: 0,
    javascriptPop9: 0,
    javascriptPop10: 0,
    //JAVASCRIPT STATE

    //JAVA JAVA STATE
    javascriptJavaPay1: 0,
    javascriptJavaPay2: 0,
    javascriptJavaPay3: 0,
    javascriptJavaPay4: 0,
    javascriptJavaPay5: 0,
    javascriptJavaPay6: 0,
    javascriptJavaPay7: 0,
    javascriptJavaPay8: 0,
    javascriptJavaPay9: 0,
    javascriptJavaPay10: 0,

    javascriptJavaPop1: 0,
    javascriptJavaPop2: 0,
    javascriptJavaPop3: 0,
    javascriptJavaPop4: 0,
    javascriptJavaPop5: 0,
    javascriptJavaPop6: 0,
    javascriptJavaPop7: 0,
    javascriptJavaPop8: 0,
    javascriptJavaPop9: 0,
    javascriptJavaPop10: 0,
    //JAVA JAVA STATE

    //PYTHON PYTHON STATE
    javascriptPythonPay1: 0,
    javascriptPythonPay2: 0,
    javascriptPythonPay3: 0,
    javascriptPythonPay4: 0,
    javascriptPythonPay5: 0,
    javascriptPythonPay6: 0,
    javascriptPythonPay7: 0,
    javascriptPythonPay8: 0,
    javascriptPythonPay9: 0,
    javascriptPythonPay10: 0,

    javascriptPythonPop1: 0,
    javascriptPythonPop2: 0,
    javascriptPythonPop3: 0,
    javascriptPythonPop4: 0,
    javascriptPythonPop5: 0,
    javascriptPythonPop6: 0,
    javascriptPythonPop7: 0,
    javascriptPythonPop8: 0,
    javascriptPythonPop9: 0,
    javascriptPythonPop10: 0,
    //PYTHON PYTHON STATE

    //C# C# STATE
    javascriptCsharpPay1: 0,
    javascriptCsharpPay2: 0,
    javascriptCsharpPay3: 0,
    javascriptCsharpPay4: 0,
    javascriptCsharpPay5: 0,
    javascriptCsharpPay6: 0,
    javascriptCsharpPay7: 0,
    javascriptCsharpPay8: 0,
    javascriptCsharpPay9: 0,
    javascriptCsharpPay10: 0,

    javascriptCsharpPop1: 0,
    javascriptCsharpPop2: 0,
    javascriptCsharpPop3: 0,
    javascriptCsharpPop4: 0,
    javascriptCsharpPop5: 0,
    javascriptCsharpPop6: 0,
    javascriptCsharpPop7: 0,
    javascriptCsharpPop8: 0,
    javascriptCsharpPop9: 0,
    javascriptCsharpPop10: 0,
    //C# C# STATE

    redPay: 0,
    bluePay: 0,
}

const javascriptReducer = (state = initialState, action) => {
    switch(action.type) {
        case JAVASCRIPTJAVAACTION: 
            return {

                redPay: 89210,
                bluePay: 94000,

                //javascript 
                javascriptPay1: 68000,
                javascriptPay2: 67800,
                javascriptPay3: 70000,
                javascriptPay4: 85000,
                javascriptPay5: 82300,
                javascriptPay6: 87000,
                javascriptPay7: 99000,
                javascriptPay8: 109000,
                javascriptPay9: 107000,
                javascriptPay10: 117000,
            
                javascriptPop1: 20200,
                javascriptPop2: 20500,
                javascriptPop3: 20700,
                javascriptPop4: 21200,
                javascriptPop5: 21600,
                javascriptPop6: 22000,
                javascriptPop7: 22600,
                javascriptPop8: 22900,
                javascriptPop9: 23000,
                javascriptPop10: 23100,
                //javascript 

                //java 
                javascriptJavaPay1: 100000,
                javascriptJavaPay2: 101000,
                javascriptJavaPay3: 112000,
                javascriptJavaPay4: 121000,
                javascriptJavaPay5: 120000,
                javascriptJavaPay6: 107000,
                javascriptJavaPay7: 102000,
                javascriptJavaPay8: 101000,
                javascriptJavaPay9: 103000,
                javascriptJavaPay10: 94000,

                javascriptJavaPop1: 29200,
                javascriptJavaPop2: 28100,
                javascriptJavaPop3: 26700,
                javascriptJavaPop4: 29700,
                javascriptJavaPop5: 28600,
                javascriptJavaPop6: 27100,
                javascriptJavaPop7: 25400,
                javascriptJavaPop8: 24500,
                javascriptJavaPop9: 23500,
                javascriptJavaPop10: 22300,
                //java
            }
        case JAVASCRIPTPYTHONACTION:   
            return {
                ...state,

                redPay: 89210,
                bluePay: 94890,

                //javascript 
                javascriptPay1: 68000,
                javascriptPay2: 67800,
                javascriptPay3: 70000,
                javascriptPay4: 85000,
                javascriptPay5: 82300,
                javascriptPay6: 87000,
                javascriptPay7: 99000,
                javascriptPay8: 109000,
                javascriptPay9: 107000,
                javascriptPay10: 117000,
            
                javascriptPop1: 20200,
                javascriptPop2: 20500,
                javascriptPop3: 20700,
                javascriptPop4: 21200,
                javascriptPop5: 21600,
                javascriptPop6: 22000,
                javascriptPop7: 22600,
                javascriptPop8: 22900,
                javascriptPop9: 23000,
                javascriptPop10: 23100,
                //javascript 

                //python 
                javascriptPythonPay1: 100000,
                javascriptPythonPay2: 101000,
                javascriptPythonPay3: 112000,
                javascriptPythonPay4: 121000,
                javascriptPythonPay5: 120000,
                javascriptPythonPay6: 107000,
                javascriptPythonPay7: 102000,
                javascriptPythonPay8: 101000,
                javascriptPythonPay9: 103000,
                javascriptPythonPay10: 94000,

                javascriptPythonPop1: 29200,
                javascriptPythonPop2: 28100,
                javascriptPythonPop3: 26700,
                javascriptPythonPop4: 29700,
                javascriptPythonPop5: 28600,
                javascriptPythonPop6: 27100,
                javascriptPythonPop7: 25400,
                javascriptPythonPop8: 24500,
                javascriptPythonPop9: 23500,
                javascriptPythonPop10: 22300,
                //python 
            }
        case JAVASCRIPTCSHARPACTION: 
            return {
                ...state,

                redPay: 89210,
                bluePay: 94400,

                //javascript 
                javascriptPay1: 68000,
                javascriptPay2: 67800,
                javascriptPay3: 70000,
                javascriptPay4: 85000,
                javascriptPay5: 82300,
                javascriptPay6: 87000,
                javascriptPay7: 99000,
                javascriptPay8: 109000,
                javascriptPay9: 107000,
                javascriptPay10: 117000,
            
                javascriptPop1: 20200,
                javascriptPop2: 20500,
                javascriptPop3: 20700,
                javascriptPop4: 21200,
                javascriptPop5: 21600,
                javascriptPop6: 22000,
                javascriptPop7: 22600,
                javascriptPop8: 22900,
                javascriptPop9: 23000,
                javascriptPop10: 23100,
                //javascript 

                //c# 
                javascriptCsharpPay1: 101000,
                javascriptCsharpPay2: 99000,
                javascriptCsharpPay3: 95100,
                javascriptCsharpPay4: 97000,
                javascriptCsharpPay5: 89700,
                javascriptCsharpPay6: 95200,
                javascriptCsharpPay7: 92000,
                javascriptCsharpPay8: 83000,
                javascriptCsharpPay9: 89000,
                javascriptCsharpPay10: 103000,

                javascriptCsharpPop1: 9300,
                javascriptCsharpPop2: 10300,
                javascriptCsharpPop3: 11100,
                javascriptCsharpPop4: 11000,
                javascriptCsharpPop5: 10400,
                javascriptCsharpPop6: 9800,
                javascriptCsharpPop7: 89200,
                javascriptCsharpPop8: 8800,
                javascriptCsharpPop9: 8600,
                javascriptCsharpPop10: 8400,
                //c# 
            }
        default: return {state}
    }
}

export default javascriptReducer

/*const Javascript = {
    Jobs: [],
    Pay: ['68,000', '67,800', '70,000', '85,000', '82,300', '87,000', '99,000', '109,000', '107,000', '117,000'],
    Popularity: ['20.2', '20.5', '20.7', '21.2', '21.6', '22.0', '22.6', '22.9', '23.0', '23.1']
}*/
