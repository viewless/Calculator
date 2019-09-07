const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) =>{
        let calculatorBody = req.body;

        let calculatorParms = calculatorBody['calculator'];

        let calculator = new Calculator();
        calculator.leftOperand = Number(calculatorParms.leftOperand);
        calculator.operator = calculatorParms.operator;
        calculator.rightOperand = Number(calculatorParms.rightOperand);

        let result = calculator.calculateResult();

        res.render('home/index', {calculator: calculator, 'result': result});
    }
};