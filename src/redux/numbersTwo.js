export default function shareInfos(numbersTwo = '', action) {
    if(action.type === 'sendNumbersTwo') {
        var infosNumbersTwo = [...numbersTwo];
        infosNumbersTwo.push(action.numbersTwo);
        let newNumbersTwo = infosNumbersTwo[infosNumbersTwo.length-1];

      return newNumbersTwo;

    } else {

      return numbersTwo;
    }  
}