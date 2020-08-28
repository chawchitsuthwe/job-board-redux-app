import { fetchCategoriesPending, fetchCategoriesSuccess, fetchCategoriesError } from './index';
import axios from 'axios';

const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchCategoriesPending());
        return axios.get("/api/remote-jobs/categories")
                    .then(res => {
                        dispatch(fetchCategoriesSuccess(res.data.jobs));
                    })
                    .catch(err => {
                        dispatch(fetchCategoriesError(err));
                    });

    }
}

export default fetchCategories;