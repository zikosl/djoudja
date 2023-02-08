import _ from 'lodash'
import communes from "./commune.json"

export default class AllCommunes {

    constructor() {

        this.GroupedCommunes()
    }
    GroupedCommunes() {
        communes = communes.map((v, i) => {
            return { ...v, wilaya_code: parseInt(v.wilaya_code) }
        })
        communes = _.orderBy(communes, ["wilaya_code", "asc"])
        this.all = _.groupBy(communes, (item) => item.wilaya_code);
    }


    getWillayaByKey(key) {
        return this.all[key]?.map((v, i) => {
            return { id: v.id, title: v.commune_name }
        })
    }


    getAllWillays() {
        const arr = []
        let b = Object.keys(this.all)

        b.map((v, i) => {
            arr.push({
                id: v,
                title: this.all[v][0].wilaya_name
            })
        })
        return arr
    }
}


