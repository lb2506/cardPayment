export default function shareInfos(cvv = '', action) {
    if(action.type === 'sendCvv') {
        var infosCvv = [...cvv];
        infosCvv.push(action.cvv);
        let newCvv = infosCvv[infosCvv.length-1];

      return newCvv;

    } else {

      return cvv;
    }  
}