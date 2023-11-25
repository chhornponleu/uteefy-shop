
export async function fileToBlobV2(filePath: string) {
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function () {
            reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', filePath, true);
        xhr.send(null);
    })
    return blob
}

export async function fileToBlob(fileUri: string) {
    return fetch(fileUri).then(r => r.blob())
}