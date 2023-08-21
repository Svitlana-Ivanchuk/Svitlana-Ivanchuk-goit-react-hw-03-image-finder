import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '38162173-e7189c612242127d8d754fc70';

export const fetchApi = async (nextQuery, nextPage) => {
  const response = await axios.get(
    `?q=${nextQuery}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

//fetch(
//        `https://pixabay.com/api/?q=${nextQuery}&page=${nextPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//      )
//        .then(response => {
//          if (response.ok) {
//            return response.json();
//          }

//          return Promise.reject(new Error(`no match ${nextQuery}`));
//        })
//        .then(images =>
//          this.setState({
//            images: images,
//            status: 'resolved',
//          })
//        )
//        .catch(error => this.setState({ error, status: 'rejected' }));
//    }}
