import { gql } from '@apollo/client';
const getCountries = () => gql`
        query {
            countries {
                name,
                code,
                emoji,
                capital,
                currency,
                languages {
                  language:name
                }
          }
      }
    `;
export default { getCountries }