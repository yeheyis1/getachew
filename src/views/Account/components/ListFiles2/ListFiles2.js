import React, {useState,useEffect} from 'react'

function ListFiles2() {
    const serverResponse = {
        success: true, 
        status: 200, 
        data: [
            {id: 0, file: 'one.pdf', created_by: 'Peter James', createdOn: '2020-12-23', status:'Downloaded', modifiedOn: "2021-02-22"},
            {id: 1, file: 'two.pdf', created_by: 'Peter James', createdOn: '2020-12-23', status:'Downloaded', modifiedOn: "2021-02-22"},
            {id: 2, file: 'three.pdf', created_by: 'Jennifer James', createdOn: '2020-12-21', status:'Uploaded', modifiedOn: "2021-02-22"}
        ]
    };

    const [data, setData] = useState([]);

    useEffect(()=>{
        /*
            async function getResults(){
                let results = await axios.get('http://localhost:3000/api/getFiles')
                if(results){
                    setData(results.data);
                }
            }
            getResults();
        */
       setData(serverResponse.data);
    }, [serverResponse.data])

    return (
        <div className="listFiles2">
            <table>
                <thead>
                    <tr>
                    {
                            Object.keys(serverResponse.data[0])?.map((key, index)=> {
                                let title = key;
                                title = title.replace("_"," ");
                                title.charAt(0).toUpperCase();
                                return (
                                    <th key={index}>{title}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item, itemIndex) => {
                            return (
                                <tr key={`itemIndex_${itemIndex}`}>
                                    {
                                        Object.keys(item).map((keyItem, keyItemIndex) => {
                                            return(
                                                <td key={`tbody_${keyItemIndex}`}>
                                                    {
                                                        item[keyItem]
                                                    }
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListFiles2
