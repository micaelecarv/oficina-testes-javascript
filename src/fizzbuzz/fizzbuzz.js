function fizzbuzz(number) {

        let resultadoFinal = ""

        if(number === 0) {
            return number
        }

        if(number % 3 === 0) {
            resultadoFinal = "Fizz"
        } 
        
        if(number % 5 === 0) {
            resultadoFinal += "Buzz"
        }

        if(resultadoFinal === "" ) {
            resultadoFinal = number
        }

        return resultadoFinal
}


module.exports = fizzbuzz