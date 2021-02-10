import React from 'react';
import axios from 'axios';
import './Bored.css';


function Bored() {

    let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://www.boredapi.com/api/activity/",
      "headers": {
        "content-type": "application/json",
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data.activity)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])


    return (
        <div className="Bored">
      <header className="Bored-header">
        <h1>
          Are you Bored?
        </h1>
        <button type='button' onClick={fetchData}>Click for Something To Do</button>
      </header>
      <main className="Bored-main">
        {responseData &&
          <blockquote>
            "{responseData}"
          </blockquote>
        }
        </main>
      {/* <pre>
        <code>
          {responseData && JSON.stringify(responseData, null, 4)}
        </code>
      </pre>  */}
    </div>
      );
}

export default Bored;
