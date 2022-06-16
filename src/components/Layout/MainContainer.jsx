import styled from "styled-components";

const MainContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: var(--margin-top-main-container);
    width: 100%;
    height: 100%;
    & > h2 {
    font-family: var(--font-family-h2);
    font-weight: var(--font-bold);
    font-size: var(--font-size-main-container);
    color: var(--color-white);
    margin: 19px 0 19px 17px;
    }
`
export default MainContainer;