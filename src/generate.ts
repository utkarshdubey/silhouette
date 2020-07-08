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
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 746.49 836.37"><path fill="${svgOptions.backgroundColor || "#d8bfdc"}" d="M0 0h746.5v836.37H0z"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="428.57" fill="${svgOptions.textColor || "#231f20"}" font-family="${svgOptions.font}">${initials}</text></svg>`

    return "data:image/svg+xml," + encodeURIComponent(svg);
}