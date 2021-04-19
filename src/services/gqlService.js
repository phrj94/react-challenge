import { gql } from '@apollo/client';
const getCountries = () => gql`
        query {
          Country {
              _id
              name
              capital
              population
              area
              flag {
                  svgFile
              }
              subregion {
                  name
              }
          }
      }
    `;
export default { getCountries }