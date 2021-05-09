
export function usePostData(newData) {

    fetch('https://api.steinhq.com/v1/storages/60979616d9e29121dfda964e/sheet1', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify([newData])

    }).then(Response => console.log(Response));

    return Response

}

