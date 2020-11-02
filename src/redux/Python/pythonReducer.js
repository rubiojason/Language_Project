import { PYTHONJAVAACTION, PYTHONCSHARPACTION, PYTHONJAVASCRIPTACTION } from './pythonTypes'


const initialState = {
    //PYTHON PYTHON STATE
    pythonPay1: 0,
    pythonPay2: 0,
    pythonPay3: 0,
    pythonPay4: 0,
    pythonPay5: 0,
    pythonPay6: 0,
    pythonPay7: 0,
    pythonPay8: 0,
    pythonPay9: 0,
    pythonPay10: 0,

    pythonPop1: 0,
    pythonPop2: 0,
    pythonPop3: 0,
    pythonPop4: 0,
    pythonPop5: 0,
    pythonPop6: 0,
    pythonPop7: 0,
    pythonPop8: 0,
    pythonPop9: 0,
    pythonPop10: 0,
    //PYTHON PYTHON STATE

    //JAVA JAVA STATE
    pythonJavaPay1: 0,
    pythonJavaPay2: 0,
    pythonJavaPay3: 0,
    pythonJavaPay4: 0,
    pythonJavaPay5: 0,
    pythonJavaPay6: 0,
    pythonJavaPay7: 0,
    pythonJavaPay8: 0,
    pythonJavaPay9: 0,
    pythonJavaPay10: 0,

    pythonJavaPop1: 0,
    pythonJavaPop2: 0,
    pythonJavaPop3: 0,
    pythonJavaPop4: 0,
    pythonJavaPop5: 0,
    pythonJavaPop6: 0,
    pythonJavaPop7: 0,
    pythonJavaPop8: 0,
    pythonJavaPop9: 0,
    pythonJavaPop10: 0,
    //JAVA JAVA STATE

    //C# C# STATE
    pythonCsharpPay1: 0,
    pythonCsharpPay2: 0,
    pythonCsharpPay3: 0,
    pythonCsharpPay4: 0,
    pythonCsharpPay5: 0,
    pythonCsharpPay6: 0,
    pythonCsharpPay7: 0,
    pythonCsharpPay8: 0,
    pythonCsharpPay9: 0,
    pythonCsharpPay10: 0,

    pythonCsharpPop1: 0,
    pythonCsharpPop2: 0,
    pythonCsharpPop3: 0,
    pythonCsharpPop4: 0,
    pythonCsharpPop5: 0,
    pythonCsharpPop6: 0,
    pythonCsharpPop7: 0,
    pythonCsharpPop8: 0,
    pythonCsharpPop9: 0,
    pythonCsharpPop10: 0,
    //C# C# STATE

    //JAVASCRIPT STATE
    pythonJavascriptPay1: 0,
    pythonJavascriptPay2: 0,
    pythonJavascriptPay3: 0,
    pythonJavascriptPay4: 0,
    pythonJavascriptPay5: 0,
    pythonJavascriptPay6: 0,
    pythonJavascriptPay7: 0,
    pythonJavascriptPay8: 0,
    pythonJavascriptPay9: 0,
    pythonJavascriptPay10: 0,

    pythonJavascriptPop1: 0,
    pythonJavascriptPop2: 0,
    pythonJavascriptPop3: 0,
    pythonJavascriptPop4: 0,
    pythonJavascriptPop5: 0,
    pythonJavascriptPop6: 0,
    pythonJavascriptPop7: 0,
    pythonJavascriptPop8: 0,
    pythonJavascriptPop9: 0,
    pythonJavascriptPop10: 0,
    //JAVASCRIPT STATE

    //RED
    redPay: 0,
    //RED

    //BLUE 
    bluePay: 0,
    //BLUE 

    pythonPay: 0,
    pythonPop: 0,
}

const pythonReducer = (state = initialState, action) => {
    switch(action.type) {
        case PYTHONJAVAACTION: 
            return {
                ...state,
                //python 

                redPay: 94890,
                bluePay: 94000,

                pythonPay: 94890,
                pythonPop: 15590,

                pythonPay1: 84000,
                pythonPay2: 86000,
                pythonPay3: 85000,
                pythonPay4: 87000,
                pythonPay5: 90000,
                pythonPay6: 91000,
                pythonPay7: 80300,
                pythonPay8: 118000,
                pythonPay9: 107000,
                pythonPay10: 120000,

                pythonPop1: 10800,
                pythonPop2: 11800,
                pythonPop3: 12500,
                pythonPop4: 13100,
                pythonPop5: 13200,
                pythonPop6: 14100,
                pythonPop7: 15500,
                pythonPop8: 19000,
                pythonPop9: 21700,
                pythonPop10: 24200,
                //python 

                //java 
                pythonJavaPay1: 100000,
                pythonJavaPay2: 101000,
                pythonJavaPay3: 112000,
                pythonJavaPay4: 121000,
                pythonJavaPay5: 120000,
                pythonJavaPay6: 107000,
                pythonJavaPay7: 102000,
                pythonJavaPay8: 101000,
                pythonJavaPay9: 103000,
                pythonJavaPay10: 94000,
            
                pythonJavaPop1: 29200,
                pythonJavaPop2: 28100,
                pythonJavaPop3: 26700,
                pythonJavaPop4: 29700,
                pythonJavaPop5: 28600,
                pythonJavaPop6: 27100,
                pythonJavaPop7: 25400,
                pythonJavaPop8: 24500,
                pythonJavaPop9: 23500,
                pythonJavaPop10: 22300,
                //java 
            }
        case PYTHONCSHARPACTION: 
            return {
                ...state,
                //python 

                redPay: 94890,
                bluePay: 94400,

                pythonPay1: 84000,
                pythonPay2: 86000,
                pythonPay3: 85000,
                pythonPay4: 87000,
                pythonPay5: 90000,
                pythonPay6: 91000,
                pythonPay7: 80300,
                pythonPay8: 118000,
                pythonPay9: 107000,
                pythonPay10: 120000,

                pythonPop1: 10800,
                pythonPop2: 11800,
                pythonPop3: 12500,
                pythonPop4: 13100,
                pythonPop5: 13200,
                pythonPop6: 14100,
                pythonPop7: 15500,
                pythonPop8: 19000,
                pythonPop9: 21700,
                pythonPop10: 24200,
                //python 
                //c#
                pythonCsharpPay1: 101000,
                pythonCsharpPay2: 99000,
                pythonCsharpPay3: 95100,
                pythonCsharpPay4: 97000,
                pythonCsharpPay5: 89700,
                pythonCsharpPay6: 95200,
                pythonCsharpPay7: 92000,
                pythonCsharpPay8: 83000,
                pythonCsharpPay9: 89000,
                pythonCsharpPay10: 103000,
            
                pythonCsharpPop1: 93000,
                pythonCsharpPop2: 10300,
                pythonCsharpPop3: 11100,
                pythonCsharpPop4: 11000,
                pythonCsharpPop5: 10400,
                pythonCsharpPop6: 9800,
                pythonCsharpPop7: 9200,
                pythonCsharpPop8: 8800,
                pythonCsharpPop9: 8600,
                pythonCsharpPop10: 8400,
                //c#
            }
        case PYTHONJAVASCRIPTACTION: 
            return {
                ...state,
                //python 

                redPay: 94890,
                bluePay: 89210,

                pythonPay1: 84000,
                pythonPay2: 86000,
                pythonPay3: 85000,
                pythonPay4: 87000,
                pythonPay5: 90000,
                pythonPay6: 91000,
                pythonPay7: 80300,
                pythonPay8: 118000,
                pythonPay9: 107000,
                pythonPay10: 120000,

                pythonPop1: 10800,
                pythonPop2: 11800,
                pythonPop3: 12500,
                pythonPop4: 13100,
                pythonPop5: 13200,
                pythonPop6: 14100,
                pythonPop7: 15500,
                pythonPop8: 19000,
                pythonPop9: 21700,
                pythonPop10: 24200,
                //python 
                //javascript 
                pythonJavascriptPay1: 68000,
                pythonJavascriptPay2: 67800,
                pythonJavascriptPay3: 70000,
                pythonJavascriptPay4: 85000,
                pythonJavascriptPay5: 82300,
                pythonJavascriptPay6: 87000,
                pythonJavascriptPay7: 99000,
                pythonJavascriptPay8: 109000,
                pythonJavascriptPay9: 107000,
                pythonJavascriptPay10: 117000,

                pythonJavascriptPop1: 20200,
                pythonJavascriptPop2: 20500,
                pythonJavascriptPop3: 20700,
                pythonJavascriptPop4: 21200,
                pythonJavascriptPop5: 21600,
                pythonJavascriptPop6: 22000,
                pythonJavascriptPop7: 22600,
                pythonJavascriptPop8: 22900,
                pythonJavascriptPop9: 23000,
                pythonJavascriptPop10: 23100,
                //javascript 
            }
        default: 
            return {state}
    }
}

export default pythonReducer

/*const Python = {
    Jobs: [],
    Pay: ['84,600', '86,000', '85,000', '87,000', '90,000', '91,000', '80,300', '118,000', '107,000', '120,000'],
    Popularity: ['10.8', '11.8', '12.5', '13.1', '13.2', '14.1', '15.5', '19.0', '21.7', '24.2'],
}*/
