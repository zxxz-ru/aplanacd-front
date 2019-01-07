import disks from "../../fakedata/disks";
import {diskUrl} from '../../fakedata/url';

async function getDisks(){
    return await Promise.resolve(disks);
}
async function fetchDisks() {
        const response = await fetch(diskUrl);
        const j = await response.json();
        const data = j['_embedded'].diskList;
        return data;
}
async function fetchDisksById(id) {
        const url = `${diskUrl}/${id}}`
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
}
export {getDisks, fetchDisks};