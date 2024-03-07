import styled from 'styled-components';


const ItemBlock = styled.div`
    padding: 10px 0;
    display: flex;
    flex-flow: column;
    gap: 10px;
`;

const ItemTitle = styled.span`
    align-self: center;
    font-size: 20px;
    line-height: 100%;
    color: #002149;
`;

const ItemText = styled.span`
    font-size: 16px;
    line-height: 90%;
    color: #000;
`;

export const List = styled.ul`
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    overflow: auto;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
        width: 0;
    }
`;

export const Item = styled.li`
    width: 230px;
    min-height: 350px;
    padding: 10px;
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    gap: 15px;
    transition: all 0.5s;

    &:hover {
        -webkit-box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.62);
        -moz-box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.62);
        box-shadow: 0px 0px 6px 5px rgba(0, 0, 0, 0.62);
    }
`;

export const ItemLoading = styled.div`
    width: 230px;
    height: 350px;
    border-radius: 12px;
    -webkit-animation: list-loading 1.5s linear infinite alternate both;
    animation: list-loading 1.5s linear infinite alternate both;
`;

export const IdBlock = styled(ItemBlock)``;

export const IdTitle = styled(ItemTitle)``;

export const IdText = styled(ItemText)``;

export const NameBlock = styled(ItemBlock)`
    border-top: 1px solid #002149;
    border-bottom: 1px solid #002149;
`;

export const NameTitle = styled(ItemTitle)``;

export const NameText = styled(ItemText)``;

export const PriceBlock = styled(ItemBlock)``;

export const PriceTitle = styled(ItemTitle)``;

export const PriceText = styled(ItemText)`
    align-self: center;
`;

export const BrandBlock = styled(ItemBlock)`
    border-top: 1px solid #002149;
`;

export const BrandTitle = styled(ItemTitle)``;

export const BrandText = styled(ItemText)`
    align-self: center;
`;
