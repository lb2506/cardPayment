export default function shareInfos(numbersFour = '', action) {
    if(action.type === 'sendNumbersFour') {
        var infosNumbersFour = [...numbersFour];
        infosNumbersFour.push(action.numbersFour);
        let newNumbersFour = infosNumbersFour[infosNumbersFour.length-1];

      return newNumbersFour;

    } else {

      return numbersFour;
    }  
}