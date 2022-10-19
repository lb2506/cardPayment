export default function shareInfos(name = '', action) {
    if(action.type === 'sendName') {
        var infosName = [...name];
        infosName.push(action.name);
        let newName = infosName[infosName.length-1];

      return newName;

    } else {

      return name;
    }  
}