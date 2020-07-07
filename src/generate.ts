import {
    getInitials,
    generateColor,
    generateTextColor
} from './utils';

export function generateAvatar(text: string, options: any) {
    // Extracting initials
    const initials = getInitials(text);

    // Set options
    let svgOptions;
    const randomColor = generateColor();
    if(options){
        svgOptions = {
            backgroundColor: options.backgroundColor ? options.backgroundColor : randomColor,
            textColor: options.backgroundColor ? generateTextColor(options.backgroundColor) : generateTextColor(randomColor),
            font: "sans-serif"
        }
    } else{
        svgOptions = {
            backgroundColor: randomColor,
            textColor: generateTextColor(randomColor),
            font: "sans-serif"
        }
    }

    // SVG Code
    /*const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 746.49 836.37"><defs><style>.cls-1{fill:${svgOptions.backgroundColor || "#d8bfdc"};}.cls-2{isolation:isolate;font-size:428.57px;fill:${svgOptions.textColor || "#231f20"};font-family:${svgOptions.font};}</style></defs><title>ud</title><rect class="cls-1" width="746.49" height="836.37"/><text class="cls-2" transform="translate(${initials.length == 2 ? "100": "240"} 543.81) scale(0.9 1)">${initials}</text></svg>`*/
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 746.49 836.37"><path fill="${svgOptions.backgroundColor || "#d8bfdc"}" d="M0 0h746.5v836.37H0z"/><text transform="matrix(.9 0 0 1 182 543.81)" font-size="428.57" fill="${svgOptions.textColor || "#231f20"}" font-family="${svgOptions.font}">${initials}</text></svg>`

    return "data:image/svg+xml;base64," + window.btoa(svg);
}