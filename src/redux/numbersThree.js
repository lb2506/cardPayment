export default function shareInfos(numbersThree = '', action) {
    if(action.type === 'sendNumbersThree') {
        var infosNumbersThree = [...numbersThree];
        infosNumbersThree.push(action.numbersThree);
        let newNumbersThree = infosNumbersThree[infosNumbersThree.length-1];

      return newNumbersThree;

    } else {

      return numbersThree;
    }  
}