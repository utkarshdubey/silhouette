export function getInitials(name) {
    return name.split(' ').map((name, index, array) => index === 0 || index + 1 === array.length ? name[0] : null).join("");
}

export function generateColor(){
    return "#" + ((1<<24) * Math.random() | 0).toString(16);
}

export function generateTextColor(color){
    return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
}