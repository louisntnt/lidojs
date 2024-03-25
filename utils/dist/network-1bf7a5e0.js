const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    }
    catch (err) {
        return false;
    }
};
const fetchSvgContent = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const reader = new FileReader();
        if (isValidUrl(url)) {
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.onload = () => {
                if (xhr.status === 200) {
                    reader.readAsText(xhr.response);
                    reader.onloadend = () => {
                        const parser = new DOMParser();
                        const ele = parser.parseFromString(reader.result, 'text/xml').documentElement;
                        resolve(ele);
                    };
                }
                else {
                    reject('Cannot parse content');
                }
            };
            xhr.onerror = (e) => {
                reject(e);
            };
            xhr.send();
        }
        else {
            reader.readAsDataURL(b64toBlob(url, 'image/svg+xml'));
            reader.onloadend = () => {
                const parser = new DOMParser();
                const ele = parser.parseFromString(reader.result, 'text/xml').documentElement;
                resolve(ele);
            };
        }
    });
};
const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, { type: contentType });
};

export { fetchSvgContent as f, isValidUrl as i };
