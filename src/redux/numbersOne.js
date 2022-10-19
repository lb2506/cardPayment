export default function shareInfos(numbersOne = '', action) {
    if(action.type === 'sendNumbersOne') {
        var infosNumbersOne = [...numbersOne];
        infosNumbersOne.push(action.numbersOne);
        let newNumbersOne = infosNumbersOne[infosNumbersOne.length-1];

      return newNumbersOne;

    } else {

      return numbersOne;
    }  
}