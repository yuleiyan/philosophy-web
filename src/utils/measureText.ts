export const measureText = (text: string, className: string, fontFamily: string): number => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const tempSpan = document.createElement('span');
    tempSpan.textContent = text;
    tempSpan.className = className;
    tempSpan.style.fontFamily = fontFamily;
    document.body.appendChild(tempSpan);
    const computedFont = getComputedStyle(tempSpan).font;
    document.body.removeChild(tempSpan);
    context.font = computedFont;
    const measureTextWidth = context.measureText(text).width;
    const textWidth = measureTextWidth;
    return textWidth;
};