import axios from 'axios';

const arrearBaseUrl = 'http://salmoney-dev.us-west-2.elasticbeanstalk.com/api';

export function Confirm(id){
  let url = `${arrearBaseUrl}/confirm`;
  return axios.post(url, {
      id
  }).then(function(res) {
      if (res.status !== 200)
          throw new Error(`Unexpected response code: ${res.status}`);

      return res.data;
  });
}
export function payBack(id,payBack){
    let url = `${arrearBaseUrl}/payback`;
    return axios.post(url, {
        id,payBack
    }).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        return res.data;
    });
}
export function listArrearRecords(user_account, target_account) {

    let url = `${arrearBaseUrl}/arrear`;
    let query = [];
    if (user_account)
        query.push(`user_account=${user_account}`);
        query.push(`target_account=${target_account}`);
    if (query.length)
        url += '?' + query.join('&');

    console.log(`Making GET request to: ${url}`);

    return axios.get(url).then(function(res) {
        if (res.status !== 200)
            throw new Error(`Unexpected response code: ${res.status}`);
        else{
            // Convert Date format
            for(var i=0; i<res.data.length; i++){
                const date = new Date(res.data[i].expect_date);
                var year = date.getFullYear();
                var month = date.getMonth()+1;
                var dt = date.getDate();
                if (dt < 10) {
                    dt = '0' + dt;
                }
                if (month < 10) {
                    month = '0' + month;
                }
                res.data[i].expect_date = year +　'-' + month + '-' + dt;
            }
        }
        return res.data;
    });
}

/*
export function listArrearRecords() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(_listArrearRecords());
        }, 500);
    });
}


// Simulated server-side code
function _listArrearRecords() {
    let arrearRecords = [
        {
            id : 1,
            name : 'Turtle',
            money : 100,
            date : '2018-04-22'
        },
        {
            id : 2,
            name : 'Shan',
            money : 10,
            date : '2018-04-23'
        }
    ];
    return arrearRecords;
};*/
