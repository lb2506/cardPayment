export default function shareInfos(dateYear = '', action) {
    if(action.type === 'sendDateYear') {
        var infosDateYear  = [...dateYear];
        infosDateYear .push(action.dateYear);
        let newDateYear = infosDateYear [infosDateYear .length-1];

      return newDateYear;

    } else {

      return dateYear;
    }  
}