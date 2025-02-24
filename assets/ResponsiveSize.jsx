import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize } from "react-native-responsive-dimensions";

const FIGMA_WINDOW_WIDTH = 390;
const FIGMA_WINDOW_HEIGHT = 844;

export function widthPercentage(width) {
    const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
    return responsiveScreenWidth(percentage);
}

export function heightPercentage(height) {
    const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;
    return responsiveScreenHeight(percentage);
}

export function fontPercentage(size) {
    const percentage = size * 0.13;
    return responsiveScreenFontSize(percentage);
}
