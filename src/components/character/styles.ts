import styled from "styled-components";

export const Container = styled.div<{size: number, top: number, left: number, sidePos: number}>`
    width: ${Props => Props.size}px;
    height: ${Props => Props.size}px;
    top: ${Props => Props.top}px;
    left: ${Props => Props.left}px;
    position: absolute;
    background-image: url("/assets/char.png");
    background-position: 0px ${Props => Props.sidePos}px;
`;