import styled from 'styled-components';
import { SearchCard } from '../styled';

export const StyledShowCard = styled(SearchCard)`
    .btns {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
            text-decoration-color: #000;
            color: #000;
            &:hover {
                text-decoration-color: blue;
                color: blue;
            }
        }
        button {
            outline: none;
            border: 1px solid #8e8e8e;
            border-radius: 15px;
            padding: 5px 20px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                cursor: pointer;
            }
        }
    }

    .animeGenres {
        margin: 0;
        margin-top: 15px;
        font-weight: bold;
    }
`;

// Overwrite few css properties of styled showcard and extend to other css written here
