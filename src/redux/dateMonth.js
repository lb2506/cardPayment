export default function shareInfos(dateMonth = '', action) {
    if(action.type === 'sendDateMonth') {
        var infosDateMonth = [...dateMonth];
        infosDateMonth.push(action.dateMonth);
        let newDateMonth = infosDateMonth[infosDateMonth.length-1];

      return newDateMonth;

    } else {

      return dateMonth;
    }  
}