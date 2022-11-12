import PropTypes from 'prop-types';
import { BASE_URL_IMG } from "../../services/MoviesApi"
import {Section, ImgWrapper,HeaderText,HeaderSecondText,WrapperScoreBlock,UserScore,ItemInfo,Overvie} from "./MovieDetails.styled"
import defIm from "../../image/commingSoon.jpg"



export const MovieDetails = ({movie}) => {
const {original_title,vote_average,overview
        , genres, belongs_to_collection } = movie
    const userScore = Math.round(vote_average * 10)

    const CheckImages = () => {
        if (!belongs_to_collection && !movie.poster_path) {
           return <img src={defIm} alt={original_title} width='300' height='450' /> 
        }
        else if (!belongs_to_collection) {
        return <img src={`${BASE_URL_IMG}${movie.poster_path}`
} alt={original_title} /> 
        }
        else if (!belongs_to_collection.poster_path) {
            return <img src={`${BASE_URL_IMG}${movie.poster_path}`
} alt={original_title} />
        }
        else if (belongs_to_collection) {
            return <img src={`${BASE_URL_IMG}${belongs_to_collection.poster_path}`
            } alt={original_title} />
        }
        

}

    return <Section>
        <ImgWrapper>{CheckImages()}</ImgWrapper>       
        <div>
             <HeaderText>{original_title}</HeaderText>
        <ul>
            <ItemInfo>
                    <WrapperScoreBlock>
                        <HeaderSecondText>User score:</HeaderSecondText>
                <UserScore>{userScore}%</UserScore>
                </WrapperScoreBlock>
            </ItemInfo>
            <ItemInfo>
                <HeaderSecondText>Overview</HeaderSecondText>
                <Overvie>{overview }</Overvie>
            </ItemInfo>
            <ItemInfo>
                <HeaderSecondText>Genres:</HeaderSecondText>
                {genres.map(({ name, id }) => {
                    return <p key={id}>* {name} </p>
                })}
                
            </ItemInfo>
        </ul>
       </div>

    </Section>
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
      belongs_to_collection: PropTypes.shape({
        poster_path: PropTypes.string
    }),
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};



