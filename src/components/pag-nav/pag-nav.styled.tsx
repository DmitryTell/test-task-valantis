import styled from 'styled-components';


export const PagNav = styled.nav`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const LoadingButton = styled.div`
    width: 120px;
    height: 30px;
    border-radius: 6px;
    -webkit-animation: button-loading 1.5s linear infinite alternate both;
    animation: button-loading 1.5s linear infinite alternate both;
`;

export const Page = styled.span`
    font-size: 20px;
    font-weight: 600;
    line-height: 100%;
    color: #002149;
`;
