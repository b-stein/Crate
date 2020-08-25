// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const GET_STYLE_PREF = 'GET_STYLE_PREF'
export const GET_SURVEY_PRODUCTS = 'GET_SURVEY_PRODUCTS'

// Actions

export function getStylePref(isLoading = true, forceRefresh = false) {
  return dispatch => {
    dispatch({
      type: GET_STYLE_PREF,
      isLoading,
      error: null
    })

    // return axios.post(routeApi, query({
		//   operation: 'styleUpdate',
		//	variables: { style }
    //   fields: ['style']
    // }))
    //   .then(response => {
    //     if (response.status === 200) {
    //       dispatch({
    //         type: ADD_STYLE_PREF,
    //         style
    //         isLoading: false,
    //       })
    //     } else {
    //       dispatch({
    //         type: PRODUCTS_GET_LIST_FAILURE,
    //         error: 'Some error occurred. Please try again.',
    //         isLoading: false
    //       })
    //     }
    //   })
    //   .catch(error => {
    //       dispatch({
    //         type: PRODUCTS_GET_LIST_FAILURE,
    //         error: 'Some error occurred. Please try again.',
    //         isLoading: false
    //       })
    //   })
  }
}

export function getSurveyProducts(isLoading = true, forceRefresh = false) {
	return dispatch => {
		return axios.post(routeApi, mutation({
			operation: 'getSurveyProducts',
			fields: ['surveyProducts']
		}))
			.then(response => {
				if (response.status === 200) {
					dispatch({
						type: GET_SURVEY_PRODUCTS,
						isLoading,
						error: null
					})
				} else {
					dispatch({
            type: PRODUCTS_GET_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        }
      })
      .catch(error => {
          dispatch({
            type: PRODUCTS_GET_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
			})
	}
}